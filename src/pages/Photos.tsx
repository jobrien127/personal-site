import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    src: '/assets/photos/pebble.png',
    alt: 'Golfing at Pebble Beach with Dad and brother',
  },
  {
    src: '/assets/photos/nick_grad2.jpg',
    alt: 'My brother and I at his graduation get together',
  },
  {
    src: '/assets/photos/abaydisc.png',
    alt: 'Playing disc golf at Arapahoe Basin',
  },
  {
    src: '/assets/photos/sisters.png',
    alt: "My sisters and I at our cousin's wedding",
  },
  { src: '/assets/photos/gooma.png', alt: 'My Grandma and I' },
  {
    src: '/assets/photos/graduation.png',
    alt: 'My Graduation ceremony',
  },
  { src: '/assets/photos/archie.png', alt: 'Archie the dog and I' },
  {
    src: '/assets/photos/arizona.png',
    alt: 'My Dad and I mountain biking in Arizona',
  },
  { src: '/assets/photos/mom.png', alt: 'Photo Booth with my Mom' },
  { src: '/assets/photos/amsterdam.png', alt: 'Amsterdam boat ride' },
  {
    src: '/assets/photos/tropez.png',
    alt: 'My brother and I in Saint-Tropez, France',
  },
  {
    src: '/assets/photos/sidebells.png',
    alt: 'Other mountains by the Maroon Bells',
  },
  { src: '/assets/photos/dublin.png', alt: 'Temple Bar in Dublin' },
  { src: '/assets/photos/scout.png', alt: 'Scout the dog' },
  { src: '/assets/photos/skiing.png', alt: 'Spring disc golf' },
  {
    src: '/assets/photos/marseille.png',
    alt: 'Marseille with my brother',
  },
  {
    src: '/assets/photos/dub.png',
    alt: 'Another Old town Dubrovnik scene',
  },
  {
    src: '/assets/photos/lightbells.png',
    alt: 'Daylight on the Maroon Bells',
  },
  {
    src: '/assets/photos/fsu.png',
    alt: 'Fresno State Bowl Game in Vegas',
  },
  {
    src: '/assets/photos/gabbytux.png',
    alt: 'Gabby with me in tuxedo',
  },
  { src: '/assets/photos/dub2.png', alt: 'Old town Dubrovnik' },
  {
    src: '/assets/photos/jensen.png',
    alt: 'Lube Room Bar with my friend',
  },
  {
    src: '/assets/photos/nick_grad.JPG',
    alt: "Siblings and I at my brother's graduation",
  },
  {
    src: '/assets/photos/grad-bench.png',
    alt: 'On a bench with grandparents and mother after graduating from Mines',
  },
  {
    src: '/assets/photos/wedding.png',
    alt: 'My brother-in-law and I',
  },
  {
    src: '/assets/photos/morningbells.png',
    alt: 'Morning at the Maroon Bells landscape',
  },
  {
    src: '/assets/photos/gooma2.jpg',
    alt: 'My grandma and I',
  },
  {
    src: '/assets/photos/newyork.png',
    alt: 'New York City with Gabby',
  },
  {
    src: '/assets/photos/snowdisc.png',
    alt: 'Early Winter disc golf in Dillon',
  },
  { src: '/assets/photos/ouray.png', alt: 'Coffee in Ouray' },
  {
    src: '/assets/photos/gulch.png',
    alt: 'Officers Gulch Landscape',
  },
];

const Photos: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  }, []);

  return (
    <section id="photos">
      <h2>Photos</h2>
      <div className="image-container">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: loadedImages.has(index) ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="gallery-image"
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
              width="400"
              height="300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
