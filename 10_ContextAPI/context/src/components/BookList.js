import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

// come un classe
// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;

//         return ( 
//             <div className="book-list" style={{background: theme.ui, color: theme.text }}>
//                 <ul>
//                     <li style={{background: theme.bg }}>book1</li>
//                     <li style={{background: theme.bg }}>book2</li>
//                     <li style={{background: theme.bg }}>book3</li>
//                 </ul>
//             </div>
//          );
//     }
// }
// export default BookList;

// usando hooks
const BookList = () => {
    const {isLightTheme, light, dark} = useContext( ThemeContext );
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return ( 
            <div className="book-list" style={{background: theme.ui, color: theme.text }}>
                <ul>
                    {books.map(book => {
                        return(
                            <li key={book.id} style={{background: theme.bg }}>{ book.title }</li>
                        );
                    })}          
                </ul>
            </div>
            );
}
 
export default BookList;
