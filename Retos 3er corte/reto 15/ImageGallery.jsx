
import React, { useState, useEffect } from 'react';
import { storage } from './firebaseConfig';

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
   
    const fetchImageUrls = async () => {
      
      const imageRefs = await storage.ref('images').listAll();

      const urls = await Promise.all(
        imageRefs.items.map(async (item) => {
          const url = await item.getDownloadURL();
          return url;
        })
      );

      setImageUrls(urls);
    };

    fetchImageUrls();
  }, []);

  const handleDeleteImage = async (imageUrl) => {
    try {
      
      const imageRef = storage.refFromURL(imageUrl);

      
      await imageRef.delete();

      
      setImageUrls((prevUrls) => prevUrls.filter((url) => url !== imageUrl));
    } catch (error) {
      console.error('Error deleting image:', error.message);
    }
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div>
        {imageUrls.map((imageUrl) => (
          <div key={imageUrl} style={{ marginBottom: '10px' }}>
            <img src={imageUrl} alt="Gallery" style={{ maxWidth: '100px', marginRight: '10px' }} />
            <button onClick={() => handleDeleteImage(imageUrl)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
