import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Handmade gold jewellery arranged on a soft linen surface"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/30" />
      </div>

      <div className="container-narrow relative flex min-h-[85vh] items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl animate-fade-up visible py-20">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-gold uppercase">
            AhaCreates
          </p>
          <h1 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Handmade jewellery for everyday magic
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal-light sm:text-lg">
            Small-batch, handcrafted pieces designed to be worn, loved, and
            layered.
          </p>
          <div className="mt-10">
            <Link to="/shop" className="btn-primary">
              Shop the collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
