import React from 'react';

const Muffins = () => {
    return (
        <>
            <h1 className='text-4xl text-center mb-10'>Muffins</h1>
            <div className="flex flex-col md:flex-row items-center justify-center h-full overflow-y-auto mb-10">
                <div className="w-full md:w-96 h-1/2 md:h-128 rounded-lg overflow-hidden shadow-md mx-2 mb-4 md:mb-0">
                    <img
                        src={`${process.env.PUBLIC_URL}/Catalogo/catalogo-patagonia_page-0014.jpg`}
                        alt="Placeholder"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default Muffins;
