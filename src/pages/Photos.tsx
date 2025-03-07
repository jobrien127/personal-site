import React from 'react';

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
    src: '/assets/photos/abaydisc.png',
    alt: 'Playing disc golf at Arapahoe Basin',
  },
  { src: '/assets/photos/graduation.png', alt: 'My Graduation ceremony' },
  { src: '/assets/photos/archie.png', alt: 'Archie the dog and I' },
  {
    src: '/assets/photos/arizona.png',
    alt: 'My Dad and I mountain biking in Arizona',
  },
  {
    src: '/assets/photos/sisters.png',
    alt: "My sisters and I at our cousin's wedding",
  },
  { src: '/assets/photos/wedding.png', alt: 'My brother-in-law and I' },
  { src: '/assets/photos/fsu.png', alt: 'Fresno State Bowl Game in Vegas' },
  {
    src: '/assets/photos/bench.png',
    alt: 'On the bench with grandparents after graduating',
  },
  { src: '/assets/photos/jensen.png', alt: 'Lube Room Bar with my friend' },
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
  { src: '/assets/photos/marseille.png', alt: 'Marseille with my brother' },
  { src: '/assets/photos/dub.png', alt: 'Another Old town Dubrovnik scene' },
  { src: '/assets/photos/lightbells.png', alt: 'Daylight on the Maroon Bells' },
  {
    src: '/assets/photos/mom3.png',
    alt: 'Another Photobooth picture with my Mom',
  },
  { src: '/assets/photos/gooma.png', alt: 'My Grandma and I' },
  { src: '/assets/photos/gabbytux.png', alt: 'Gabby with me in tuxedo' },
  { src: '/assets/photos/dub2.png', alt: 'Old town Dubrovnik' },

  {
    src: '/assets/photos/morningbells.png',
    alt: 'Morning at the Maroon Bells landscape',
  },
  { src: '/assets/photos/newyork.png', alt: 'New York City with Gabby' },
  {
    src: '/assets/photos/snowdisc.png',
    alt: 'Early Winter disc golf in Dillon',
  },
  { src: '/assets/photos/ouray.png', alt: 'Coffee in Ouray' },
  { src: '/assets/photos/gulch.png', alt: 'Officers Gulch Landscape' },
];

const Photos: React.FC = () => {
  return (
    <section id="photos">
      <h2>Photos</h2>
      <div className="image-container">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Photos;
