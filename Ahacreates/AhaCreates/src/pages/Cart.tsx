import { Link } from "react-router-dom";
import ScrollSection from "../components/ScrollSection";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/mockProducts";

export default function Cart() {
  const { items, total, updateQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="section-padding">
        <div className="container-narrow text-center">
          <ScrollSection>
            <h1 className="font-serif text-4xl text-charcoal">Your cart</h1>
            <p className="mt-4 text-warm-gray">
              Your cart is empty — but our collection isn't.
            </p>
            <Link to="/shop" className="btn-primary mt-8">
              Continue shopping
            </Link>
          </ScrollSection>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <ScrollSection>
          <h1 className="font-serif text-4xl text-charcoal">Your cart</h1>
          <p className="mt-2 text-warm-gray">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </ScrollSection>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {items.map((item, index) => (
              <ScrollSection key={item.product.id} delay={index * 80}>
                <article className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm sm:gap-6 sm:p-6">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="shrink-0 overflow-hidden rounded-xl"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="h-24 w-24 object-cover sm:h-28 sm:w-28"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="font-serif text-lg text-charcoal hover:text-gold"
                      >
                        {item.product.title}
                      </Link>
                      <p className="mt-1 text-sm text-warm-gray">
                        {item.product.category}
                      </p>
                      <p className="mt-2 font-medium text-charcoal">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1,
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1,
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-sm text-warm-gray transition-colors hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollSection>
            ))}
          </div>

          <ScrollSection delay={150}>
            <aside className="rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <h2 className="font-serif text-xl text-charcoal">
                Order summary
              </h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-charcoal-light">
                  <dt>Subtotal</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
                <div className="flex justify-between text-charcoal-light">
                  <dt>Shipping</dt>
                  <dd>Calculated at checkout</dd>
                </div>
                <div className="flex justify-between border-t border-charcoal/5 pt-3 text-base font-medium text-charcoal">
                  <dt>Total</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
              </dl>
              <button
                type="button"
                className="btn-primary mt-6 w-full"
                onClick={() =>
                  alert("Checkout is UI-only — no payment integration yet.")
                }
              >
                Proceed to checkout
              </button>
              <Link
                to="/shop"
                className="mt-4 block text-center text-sm text-gold hover:text-gold-dark"
              >
                Continue shopping
              </Link>
            </aside>
          </ScrollSection>
        </div>
      </div>
    </div>
  );
}
