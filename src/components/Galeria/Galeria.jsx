import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Galeria.css';

const ImageGallery = ({ images }) => {
  const [imageWidth, setImageWidth] = useState(400);

  useEffect(() => {
    const updateImageWidth = () => {
      if (window.innerWidth > 1800) {
        setImageWidth(600);
      } else {
        setImageWidth(400);
      }
    };

    updateImageWidth();

    window.addEventListener("resize", updateImageWidth);
    return () => {
      window.removeEventListener("resize", updateImageWidth);
    };
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({ opacity: 1, x: 0, y: 0 }));
    }
  }, [controls, inView]);

  return (
    <div className='imageGallery' ref={ref}>
      {images &&
        images.map((image, index) => (
          <motion.div
            className="m-2"
            key={index}
            initial={{ opacity: 0, x: -100, y: -100 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={image.url}
              alt={`Gallery Item ${index + 1}`}
              width={imageWidth}
              height={imageWidth}
            />
          </motion.div>
        ))}
    </div>
  );
};

const Galeria = () => {
  const images = [
    { url: "/Banners/breadss.png", width: 350, height: 300 },
    { url: "/Banners/empanadas.png", width: 500, height: 300 },
    { url: "/Banners/desserts.png", width: 250, height: 300 },
    { url: "/Banners/croissants.png", width: 250, height: 300 },
    { url: "/Banners/baked.png", width: 350, height: 300 },
    { url: "/Banners/muffins.png", width: 500, height: 300 },
  ];

  return (
    <div className="container galeria-cont" id="OurStory">
      <h1 className="text-4xl text-center mt-5 font-bold" style={{
        color: '#588157'
      }}>OUR BRAND</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default Galeria;
