import React from 'react';
import { Link } from 'react-router-dom';

type Props = object;

function NotFound(props: Props) {
    return (
        <>
            <h1 aria-label="Start">404 Not Found</h1>
            <Link to="/">Home</Link>
        </>
    );
}

export default NotFound;
