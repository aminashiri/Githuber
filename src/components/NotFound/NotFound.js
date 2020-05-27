import React from 'react';

const NotFound = ({ heading, message }) => {
    return (
        <div className="panel not-found">
            <h2 className="panel--title">{heading}</h2>
            <p className="panel--content">{message}</p>
        </div>
    );
};

export default NotFound;