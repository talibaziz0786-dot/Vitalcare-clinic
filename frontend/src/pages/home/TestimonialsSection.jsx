const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    review:
      "The doctors and staff were incredibly professional and caring.",
  },
  {
    id: 2,
    name: "Sophia Williams",
    review:
      "A seamless digital healthcare experience with premium facilities.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            What Patients Say
          </h2>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
            >
              <p className="text-lg leading-8 text-zinc-300">
                "{item.review}"
              </p>

              <h4 className="mt-8 text-xl font-semibold">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}