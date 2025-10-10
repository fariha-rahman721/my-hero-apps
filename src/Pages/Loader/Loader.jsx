import React from 'react';

const Loader = () => {
    return (
        <div className='max-w-2/12 mx-auto flex justify-center gap-2 '>
            <img className='h-35 w-35' src="/logo.png" alt="" />
            <div className="flex justify-center items-center">
                <p className='text-3xl font-bold text-center'>Loading...</p>
            </div>
        </div>
    );
};

export default Loader;