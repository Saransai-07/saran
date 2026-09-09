import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-cream-dark">
        <img
          src={images[activeIndex]}
          alt={`${title} — view ${activeIndex + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`aspect-square w-20 overflow-hidden rounded-lg border-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                activeIndex === index
                  ? "border-gold shadow-sm"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`View image ${index + 1} of ${images.length}`}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
