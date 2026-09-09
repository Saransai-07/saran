import { galleryImages } from "../data/mockProducts";

export default function GalleryStrip() {
  return (
    <section aria-label="Product gallery">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
        {galleryImages.map((src, index) => (
          <div
            key={src}
            className="aspect-square overflow-hidden rounded-lg sm:rounded-xl"
          >
            <img
              src={src}
              alt={`AhaCreates jewellery styled flat lay ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
