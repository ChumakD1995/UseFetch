import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(url, {...options, signal})
    .then((response) => {
      if(!response.ok) {
        throw new Error ('Network response was not ok: ${response.status}');
      }
      return response.json();
    })
    .then((responseData) => {
      setData(responseData);
      setLoading(false);
    })
    .catch((err) => {
      if(err.name === 'AbortError') {
        alert('The request has been cancelled');
      } else {
        setError(err);
        setLoading(false);
      }
    });
    
    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return {data, loading, error};  

}

export default useFetch;