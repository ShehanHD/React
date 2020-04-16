import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './bookDetail';

const BookList = () => {
    const { books } = useContext(BookContext);
    
    return books.length ? ( 
        <div className="book-list">
            <ul>
                { books.map(item => {
                    return ( <BookDetails book={item} key={item.id} /> );
                })}
            </ul>
        </div>
    ) : (
        <div>No Books to read</div>
    );
}

export default BookList;