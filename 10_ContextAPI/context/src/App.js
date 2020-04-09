import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeCntextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeCntextProvider>
        <Navbar />
        <BookList />
      </ThemeCntextProvider>
    </div>
  );
}

export default App;
