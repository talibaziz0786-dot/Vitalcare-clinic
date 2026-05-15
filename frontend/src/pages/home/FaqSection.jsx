const faqs = [
  {
    id: 1,
    question: "How can I book an appointment?",
    answer:
      "You can easily book appointments online through our website.",
  },
  {
    id: 2,
    question: "Do you provide emergency services?",
    answer:
      "Yes, our emergency department operates 24/7.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-20 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}