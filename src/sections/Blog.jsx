import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://medium.com/@garvsl/latest`
        );
        setArticles(response.data);
        console.log('User Articles:', response.data);
      } catch (error) {
        setError('Error fetching articles');
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Blog Articles</h1>
      {error && <p>{error}</p>}
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
