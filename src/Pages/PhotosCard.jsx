import React from 'react';
import image1 from '../images/galleryImage1.jpeg'
import image2 from '../images/galleryImage2.jpeg'
import image3 from '../images/galleryImage3.jpeg'
import image4 from '../images/galleryImage4.jpeg'
import image5 from '../images/galleryImage5.jpeg'
import image6 from '../images/galleryImage6.jpeg'
import image7 from '../images/galleryImage7.jpeg'
import image8 from '../images/galleryImage8.jpeg'
import image9 from '../images/galleryImage9.jpeg'
import image10 from '../images/galleryImage10.jpeg'
import image11 from '../images/galleryImage11.jpeg'
import image12 from '../images/galleryImage12.jpeg'
import image13 from '../images/galleryImage13.jpeg'
import image14 from '../images/galleryImage14.jpeg'
import image15 from '../images/galleryImage15.jpeg'
import image16 from '../images/galleryImage16.jpeg'
import image17 from '../images/galleryImage17.jpeg'
import image18 from '../images/galleryImage18.jpeg'
import image19 from '../images/galleryImage19.jpeg'
import image20 from '../images/galleryImage20.jpeg'

const photos = [
  { src: image1, alt: 'Memory 1' },
  { src: image2, alt: 'Memory 1' },
  { src: image3, alt: 'Memory 1' },
  { src: image4, alt: 'Memory 1' },
  { src: image5, alt: 'Memory 1' },
  { src: image6, alt: 'Memory 1' },
  { src: image7, alt: 'Memory 1' },
  { src: image8, alt: 'Memory 1' },
  { src: image9, alt: 'Memory 1' },
  { src: image10, alt: 'Memory 1' },
  { src: image11, alt: 'Memory 1' },
  { src: image12, alt: 'Memory 1' },
  { src: image13, alt: 'Memory 1' },
  { src: image14, alt: 'Memory 1' },
  { src: image15, alt: 'Memory 1' },
  { src: image16, alt: 'Memory 1' },
  { src: image17, alt: 'Memory 1' },
  { src: image18, alt: 'Memory 1' },
  { src: image19, alt: 'Memory 1' },
  { src: image20, alt: 'Memory 1' },
  
];

const PhotosCard = () => (
  <div className="min-h-screen bg-gray-100 py-8 px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Memories</h1>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={photo.src} alt={photo.alt} className="w-full h-64 sm:h-80 lg:h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PhotosCard;
