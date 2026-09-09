import ScrollSection from "../components/ScrollSection";

const values = [
  "Designed and handmade in Jaipur, India",
  "Ethically sourced materials",
  "Made to be worn every day",
];

export default function About() {
  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <ScrollSection>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-medium tracking-[0.2em] text-gold uppercase">
                Our story
              </p>
              <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">
                The story behind AhaCreates
              </h1>
            </div>
          </ScrollSection>

          <ScrollSection delay={100}>
            <div className="mx-auto mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-charcoal-light">
              <p>
                AhaCreates began on a quiet afternoon in Jaipur, with a handful
                of wire, a pair of pliers, and the simple belief that jewellery
                should feel like a small moment of magic — not something saved
                for special occasions.
              </p>
              <p>
                Every piece in our collection is designed and handmade in our
                studio. We work in small batches, which means each run is
                limited and each item receives the attention it deserves. From
                sketch to final polish, we stay involved in every step.
              </p>
              <p>
                Our inspiration comes from the everyday: morning light on a
                windowsill, the curve of a crescent moon, the warmth of gold
                against skin. We create jewellery that is minimal enough to
                layer, meaningful enough to gift, and comfortable enough to
                never take off.
              </p>
            </div>
          </ScrollSection>
        </div>
      </section>

      <ScrollSection className="section-padding bg-white pt-0">
        <div className="container-narrow">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1456356627738-a3a2d6b0f7b1?w=600&q=80"
                alt="Jewellery making tools on a workbench"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a9a7575a49?w=600&q=80"
                alt="Hands crafting a delicate jewellery piece"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl sm:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80"
                alt="Finished handmade jewellery pieces displayed together"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      <section className="section-padding">
        <div className="container-narrow">
          <ScrollSection>
            <h2 className="mb-8 text-center font-serif text-3xl text-charcoal">
              What we stand for
            </h2>
            <ul className="mx-auto max-w-lg space-y-4">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 shadow-sm"
                >
                  <span className="text-gold" aria-hidden="true">
                    ✦
                  </span>
                  <span className="text-charcoal-light">{value}</span>
                </li>
              ))}
            </ul>
          </ScrollSection>

          <ScrollSection delay={150}>
            <blockquote className="mx-auto mt-16 max-w-2xl rounded-2xl bg-cream-dark p-8 text-center sm:p-12">
              <p className="font-serif text-xl leading-relaxed text-charcoal italic sm:text-2xl">
                &ldquo;I started AhaCreates because I wanted jewellery that
                felt personal — pieces you reach for without thinking, that
                quietly become part of who you are. Thank you for being here
                and letting our work be part of your story.&rdquo;
              </p>
              <footer className="mt-6 text-sm font-medium text-warm-gray">
                — The founder, AhaCreates
              </footer>
            </blockquote>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
