import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostList from './BlogPostList';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <ErrorBoundary>
      <BlogPostList posts={posts} />
    </ErrorBoundary>
  );
}

export default App;
