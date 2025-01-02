  import React, { useState } from 'react';
  import axios from 'axios';
  import BookList from './BookList';

  function App() {
      const [query, setQuery] = useState('');
      const [books, setBooks] = useState([]);

      const searchBooks = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/books', {
                  params: { q: query },
              });
              setBooks(response.data.items || []);
          } catch (error) {
              console.error('Error fetching books:', error);
          }
      };

      return (
          <div className="App">
              <h1>Book Finder</h1>
              <input
                  type="text"
                  placeholder="Search for books"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={searchBooks}>Search</button>
              <BookList books={books} />
          </div>
      );
  }

  export default App;
