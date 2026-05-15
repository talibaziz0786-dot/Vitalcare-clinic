const doctors = [
  {
    id: 1,
    name: "Dr. Abuzar Siddiqui",
    role: "Genral physition",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=988&auto=format&fit=crop",
      
  },
  {
    id: 2,
    name: "Dr. Sumayya",
    role: "Physition",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Emily Clark",
    role: "Dermatologist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=987&auto=format&fit=crop",
  },
];

export default function DoctorsSection() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Doctors
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Meet Our Experts
          </h2>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-105 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold">
                  {doctor.name}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {doctor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}