import { Heart, Syringe, Scissors, Smile, Dog, Ambulance } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "General Checkup",
    desc: "Routine health examinations to detect potential issues early and keep your pet in top shape.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    desc: "Comprehensive vaccination schedules to protect your pet from dangerous diseases.",
  },
  {
    icon: Scissors,
    title: "Surgery",
    desc: "Sterile operating rooms with modern equipment and experienced veterinary surgeons.",
  },
  {
    icon: Smile,
    title: "Dental Care",
    desc: "Professional teeth cleaning, oral health checks, and treatment for dental issues.",
  },
  {
    icon: Dog,
    title: "Grooming",
    desc: "Bathing, coat trimming, ear cleaning, and nail care to keep your pet looking their best.",
  },
  {
    icon: Ambulance,
    title: "Emergency 24/7",
    desc: "Round-the-clock emergency team ready to provide urgent care whenever needed.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="border-t bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From routine checkups to advanced surgeries, we provide comprehensive
            care for your beloved pets.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
