import React from 'react';
import "./Page404.scss";
import { GiFruitTree } from 'react-icons/gi';

const Page404 = () => {
    return (
        <div className='page404 f-os'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <h3>But Found a Tree</h3>
            <GiFruitTree className="tree" />
        </div>
    );
};

export default Page404;