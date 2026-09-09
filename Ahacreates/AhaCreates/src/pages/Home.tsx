import { Link } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";
import GalleryStrip from "../components/GalleryStrip";
import Hero from "../components/Hero";
import ScrollSection from "../components/ScrollSection";
import ValueCard from "../components/ValueCard";
import { collectionCards } from "../data/mockProducts";

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollSection className="section-padding">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              Featured collections
            </h2>
            <p className="mt-3 text-warm-gray">
              Find your next everyday favourite
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collectionCards.map((collection, index) => (
              <ScrollSection key={collection.title} delay={index * 100}>
                <CollectionCard {...collection} />
              </ScrollSection>
            ))}
          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="bg-white section-padding">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              Why AhaCreates
            </h2>
            <p className="mt-3 text-warm-gray">
              Thoughtfully made, meant to be treasured
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            <ValueCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              }
              title="Handmade with care"
              description="Each piece is shaped, polished, and finished by hand in our Jaipur studio."
            />
            <ValueCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              }
              title="Thoughtful materials"
              description="We source hypoallergenic metals and natural stones from trusted suppliers."
            />
            <ValueCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
              }
              title="Made in small batches"
              description="Limited runs mean every collection feels special — and uniquely yours."
            />
          </div>
        </div>
      </ScrollSection>

      <ScrollSection className="section-padding">
        <div className="container-narrow">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
                From the studio
              </h2>
              <p className="mt-2 text-warm-gray">
                A glimpse into our world
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gold transition-colors hover:text-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              @ahacreates on Instagram
            </a>
          </div>
          <GalleryStrip />
        </div>
      </ScrollSection>

      <ScrollSection className="bg-charcoal section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl text-cream sm:text-4xl">
            Ready to find your piece?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-cream/70">
            Explore our full collection of earrings, necklaces, rings, and
            bracelets — each one made with intention.
          </p>
          <Link to="/shop" className="btn-primary mt-8">
            Shop all jewellery
          </Link>
        </div>
      </ScrollSection>
    </>
  );
}
