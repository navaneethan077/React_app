// src/useFetch.js
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timer = setTimeout(() => {
      fetch(url, { signal })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            console.error('Error fetching data:', err.message);
            setError('Failed to fetch data. Please try again later.');
            setLoading(false);
          }
        });
    }, 2000);

    // Cleanup: abort fetch + clear timeout
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
