const stats = [
  {
    id: 1,
    number: "10+",
    label: "Years Experience",
  },
  {
    id: 2,
    number: "50K+",
    label: "Happy Patients",
  },
  {
    id: 3,
    number: "120+",
    label: "Medical Experts",
  },
  {
    id: 4,
    number: "24/7",
    label: "Emergency Care",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <div key={item.id}>
            <h3 className="text-5xl font-bold text-cyan-400">
              {item.number}
            </h3>

            <p className="mt-4 text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}