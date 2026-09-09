import { Link } from "react-router-dom";
import { formatPrice, type Product } from "../data/mockProducts";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group card block hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="badge absolute top-3 left-3 bg-white/90 backdrop-blur-sm">
          Handmade
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-xs tracking-wider text-warm-gray uppercase">
          {product.category}
        </p>
        <h3 className="mt-1 font-serif text-lg text-charcoal transition-colors group-hover:text-gold">
          {product.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
