import React from 'react';

const Banner = () => {
    return (
        <div className=" w-full h-120 z-0">
            <img
                src={`${process.env.PUBLIC_URL}/Banners/bannertasty-3.png`}
                alt="Placeholder"
                className="w-full h-full object-cover rounded-md"
            />
            <div className="inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-semibold text-white">¡Bienvenido!</h2>
            </div>
        </div>
    );
};

export default Banner;
