import React from 'react';

const Loader = () => {
    return (
        <div className='max-w-2/12 mx-auto flex justify-center gap-2 '>
            <img className='h-15 w-15' src="/logo.png" alt="" />
            <p className='text-xl font-bold'>Loading...</p>
        </div>
    );
};

export default Loader;