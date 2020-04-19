import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducer/bookReduser';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, []);

    return ( 
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;