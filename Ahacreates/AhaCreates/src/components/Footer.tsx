import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-cream-dark">
      <div className="container-narrow section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-medium text-charcoal"
            >
              AhaCreates
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-warm-gray">
              Handmade jewellery for everyday magic. Small-batch pieces crafted
              with care in Jaipur, India — designed to be worn, loved, and
              layered.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-charcoal uppercase">
              Quick links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/shop", label: "Shop" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/contact#faq", label: "FAQ" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-warm-gray transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-charcoal uppercase">
              Follow us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  // href="https://instagram.com"
                  href="https://www.instagram.com/aha_creates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-warm-gray transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-warm-gray transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-charcoal uppercase">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-warm-gray">
              Be the first to know about new collections and restocks.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-charcoal/10 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-warm-gray/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button type="submit" className="btn-primary px-6 py-2.5 text-xs">
                Join
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-charcoal uppercase">
              Deekshitha Pathipati
            </h3>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal/5 pt-8 text-center">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} AhaCreates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
