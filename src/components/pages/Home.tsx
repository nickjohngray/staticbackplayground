import React from 'react';
// @ts-ignore
import words from './../../images/words.png';
// logo-words.png, logo-man
// @ts-ignore
import man from './../../images/man.png';

export default () => {
    return (
        <div className="page center-it">
            <p></p>
            <img className="center logo-words" src={words} />
            <img className="center logo-man" src={man} />
        </div>
    );
};
