import React from 'react';

const noImage = '/assets/image/no_image.png';

export default ({ src }) => (
    <img 
        src={src || noImage}
        onError={(e) => e.target.src = noImage}
    />
);