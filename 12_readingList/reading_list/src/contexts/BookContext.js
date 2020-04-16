import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState([
        { title: "ciao1", author: "mondo1", id: 1},
        { title: "ciao2", author: "mondo2", id: 2},
        { title: "ciao3", author: "mondo3", id: 3}
    ]);

    const addBook = (title, author) => {
        setBook([...books, { title, author, id: uuid() }]);
    }

    const removeBook = (id) => {
        setBook(books.filter(item => item.id !== id)); //Quando il condizione è vera agg. al array 
    }
    return ( 
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;