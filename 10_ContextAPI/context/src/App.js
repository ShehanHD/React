import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/themeToggle';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <ThemeToggle />
          <Navbar />
          <BookList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
