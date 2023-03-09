import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeContext, DarkModeContextProvider } from '../../utilities/darkModeContext';
import Home from '../Home/Home';
import Page404 from '../Page404/Page404';

const MainPage = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='*' element={<Page404 />}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default MainPage;