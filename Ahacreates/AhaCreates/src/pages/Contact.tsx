import { useState } from "react";
import ScrollSection from "../components/ScrollSection";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are dispatched within 2–3 business days. Domestic delivery typically takes 3–5 business days. You'll receive a tracking link once your order ships.",
  },
  {
    question: "Do you accept returns?",
    answer:
      "We accept returns within 7 days of delivery for unworn items in original packaging. Custom pieces are final sale. Please reach out before sending anything back.",
  },
  {
    question: "Can I request custom pieces?",
    answer:
      "Yes! We love creating custom jewellery for birthdays, anniversaries, or just because. Send us a message with your idea and we'll get back to you within 48 hours.",
  },
  {
    question: "Are your materials hypoallergenic?",
    answer:
      "Most of our pieces use hypoallergenic posts and nickel-free metals. Material details are listed on each product page. If you have specific sensitivities, let us know before ordering.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <ScrollSection>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-warm-gray">
              Questions about an order, a custom piece, or anything else — we'd
              love to hear from you.
            </p>
          </div>
        </ScrollSection>

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-5">
          <ScrollSection className="lg:col-span-3" delay={100}>
            {submitted ? (
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <p className="font-serif text-xl text-charcoal">
                  Thank you for your message!
                </p>
                <p className="mt-2 text-sm text-warm-gray">
                  We'll get back to you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                  Send message
                </button>
              </form>
            )}
          </ScrollSection>

          <ScrollSection className="lg:col-span-2" delay={200}>
            <div className="rounded-2xl bg-cream-dark p-6 sm:p-8">
              <h2 className="font-serif text-xl text-charcoal">
                Contact info
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-charcoal-light">
                <li>
                  <span className="block text-xs font-semibold tracking-wider text-warm-gray uppercase">
                    Email
                  </span>
                  <a
                    href="mailto:hello@ahacreates.com"
                    className="mt-1 inline-block hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    hello@ahacreates.com
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold tracking-wider text-warm-gray uppercase">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com/ahacreates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    @ahacreates
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold tracking-wider text-warm-gray uppercase">
                    Response time
                  </span>
                  <span className="mt-1 block">
                    We typically reply within 1–2 business days
                  </span>
                </li>
              </ul>
            </div>
          </ScrollSection>
        </div>

        <ScrollSection className="mx-auto mt-20 max-w-3xl" delay={100}>
          <h2 id="faq" className="mb-8 text-center font-serif text-3xl text-charcoal">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white shadow-sm"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-medium text-charcoal transition-colors hover:text-gold [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-gold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-charcoal/5 px-6 py-4 text-sm leading-relaxed text-charcoal-light">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </ScrollSection>
      </div>
    </div>
  );
}
