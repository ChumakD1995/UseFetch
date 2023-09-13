import React from 'react';
import useFetch from './useFetch';

const MyComponent = () => {
    const { data, loading, error } = useFetch('http://localhost:3000/about');

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: { error.message }</div>
    }

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify( data, null, 2 )}</pre>
        </div>
    );
};

export default MyComponent;