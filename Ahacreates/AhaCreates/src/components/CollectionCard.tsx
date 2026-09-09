import { Link } from "react-router-dom";

interface CollectionCardProps {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export default function CollectionCard({
  title,
  slug,
  image,
  description,
}: CollectionCardProps) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(slug)}`}
      className="group card block hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={`${title} collection`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-charcoal transition-colors group-hover:text-gold">
          {title}
        </h3>
        <p className="mt-1 text-sm text-warm-gray">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold">
          Explore
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
