import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return ( 
            <div className="book-list" style={{background: theme.ui, color: theme.text }}>
                <ul>
                    <li style={{background: theme.bg }}>book1</li>
                    <li style={{background: theme.bg }}>book2</li>
                    <li style={{background: theme.bg }}>book3</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;