import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

// class Navbar extends Component {
//     render() {
//         return(
//             <AuthContext.Consumer>{(AuthContext) => (
//                 <ThemeContext.Consumer>{(ThemeContext) => {
//                     const { isAuthenticated, toggleAuth } = AuthContext;
//                     const { isLightTheme, light, dark} = ThemeContext;
//                     const theme = isLightTheme ? light : dark;
//                         return ( 
//                             <nav style={{background: theme.bg, color: theme.text}}>
//                                 <h1>Context App</h1>
//                                 <div onClick={toggleAuth}>
//                                     { isAuthenticated ? 'loged in' : 'loged out' }
//                                 </div>
//                                 <ul>
//                                     <li>Home</li>
//                                     <li>About</li>
//                                     <li>Contact</li>
//                                 </ul>
//                             </nav>
//                         )
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
//         );
//     }
// }

// export default Navbar;


const NavBar = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return(
        <nav style={{background: theme.bg, color: theme.text}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                { isAuthenticated ? 'loged in' : 'loged out' }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;