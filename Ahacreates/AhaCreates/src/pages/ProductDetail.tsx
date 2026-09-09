import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductGallery from "../components/ProductGallery";
import ScrollSection from "../components/ScrollSection";
import TrustBadges from "../components/TrustBadges";
import { useCart } from "../context/CartContext";
import {
  formatPrice,
  getProductById,
  getRelatedProducts,
} from "../data/mockProducts";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="btn-primary mt-6">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, product.category);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <div className="section-padding">
        <div className="container-narrow">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-warm-gray">
              <li>
                <Link to="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/shop" className="hover:text-gold">
                  Shop
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal">{product.title}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollSection>
              <ProductGallery images={product.images} title={product.title} />
            </ScrollSection>

            <ScrollSection delay={150}>
              <div>
                <span className="badge">{product.category}</span>
                <h1 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
                  {product.title}
                </h1>
                <p className="mt-3 text-2xl font-medium text-charcoal">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-6 leading-relaxed text-charcoal-light">
                  {product.description}
                </p>

                <dl className="mt-8 space-y-4 border-t border-charcoal/5 pt-8">
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-warm-gray uppercase">
                      Materials
                    </dt>
                    <dd className="mt-1 text-sm text-charcoal-light">
                      {product.materials}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-warm-gray uppercase">
                      Size / Length
                    </dt>
                    <dd className="mt-1 text-sm text-charcoal-light">
                      {product.dimensions}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-warm-gray uppercase">
                      Care
                    </dt>
                    <dd className="mt-1 text-sm text-charcoal-light">
                      {product.care}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="btn-primary mt-8 w-full sm:w-auto"
                >
                  {added ? "Added to cart ✓" : "Add to cart"}
                </button>

                <div className="mt-6">
                  <TrustBadges />
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-narrow">
            <ScrollSection>
              <h2 className="mb-8 font-serif text-3xl text-charcoal">
                You may also like
              </h2>
            </ScrollSection>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((item, index) => (
                <ScrollSection key={item.id} delay={index * 80}>
                  <ProductCard product={item} />
                </ScrollSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
