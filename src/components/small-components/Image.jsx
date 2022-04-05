import React from 'react';

 const Image = ({src}) => {
    return (<img style={{userSelect: 'none', pointerEvents: 'none', objectFit: 'cover'}} src={src} alt={''}/> );
};

export default Image;