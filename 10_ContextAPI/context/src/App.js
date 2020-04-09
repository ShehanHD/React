import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/themeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeToggle />
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
