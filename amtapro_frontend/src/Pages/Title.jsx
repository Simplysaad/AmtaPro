import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-5">
                {title}
            </h1>
        </div>
    );
}

export default Title;