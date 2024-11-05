'use client';

import React from 'react';
import Image from 'next/image';

const galleryItems = [
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fbear.jpg?alt=media&token=1bef5853-0c27-43cd-a87c-9b0d737e74d8",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fcar.jpg?alt=media&token=cff472b9-c7c4-4923-8a45-825b660bf03a",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fdog1.jpg?alt=media&token=43094bcc-d435-417d-b5b1-a508d6da9ce9",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fw1.jpg?alt=media&token=b07a479f-1be8-40ed-a07d-f33fc6dc0e16",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fw2.jpg?alt=media&token=c71f7927-d1c6-4fcc-94ff-417576034801",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fw3.jpg?alt=media&token=4ce03dc3-de62-4dba-9039-fb906050c201",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Flion.jpg?alt=media&token=02fe4687-7d5d-4a10-9d1b-0a70f33aeb56",
];

const hoverItems = [
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fbrear_seg.png?alt=media&token=0de1a6cb-c3e4-4b79-ae87-e25df3cd22d1",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fcar_seg.png?alt=media&token=c135796e-1803-4612-bf4f-82764c6805b3",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fdog1_seg.jpg?alt=media&token=e2f11457-d332-45a4-ba33-99be6905d5a7",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fw1_seg.png?alt=media&token=256f2878-aac6-493f-b23e-0620988f4fdf",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fw2_seg.png?alt=media&token=8977ae61-cdb0-49d5-8749-afb05f83aefe",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Fw3.png?alt=media&token=6a2ccd50-1452-4f34-975a-c400253d5b5d",
  "https://firebasestorage.googleapis.com/v0/b/lexicons-5.appspot.com/o/gallery%2Flion_seg.png?alt=media&token=28ccb83e-7dfe-44c0-a46c-9b5b9d3c50f7",
]

export function Gallery() {

  const [onHover, setOnHover] = React.useState<boolean>(false);

  return (
    <div className="py-20">
      <div className="max-w-full">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-indigo-400 font-medium">INSPIRATION GALLERY</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">See What&apos;s Possible</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how others are using Object Extractor
          </p>
        </div>

        <div className="grd w-full h-full columns-3 select-none">
          {galleryItems.map((item, index) => (
            <div onMouseEnter={()=>setOnHover(true)} onMouseLeave={()=>setOnHover(false)} className='grd-itm w-full transition-all duration-500 select-none' key={index}>
              <Image
                key={index}
                src={onHover ? hoverItems[index] : item }
                alt={`Gallery Item ${index + 1}`}
                className='w-full mb-[20px]  select-none'
                width={500}
                height={500}
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}