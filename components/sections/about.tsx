import { Award, GraduationCap, HeartHandshake } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert Team",
    desc: "Veterinarians with over 15 years of experience, graduated from top universities.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    desc: "International certification for medical procedures and pet care standards.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    desc: "Every patient is treated with the same love and care as our own pets.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 to-orange-500/20" />
            <div className="absolute -bottom-4 -right-4 rounded-2xl border bg-card p-4 shadow-lg">
              <p className="text-sm font-medium text-muted-foreground">Lead Veterinarian</p>
              <p className="text-lg font-bold">Dr. Sarah Mitchell</p>
              <p className="text-xs text-muted-foreground">DVM, MVSc</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Passion for pets, dedication to care
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              VetCare was founded with a mission to provide the highest quality
              veterinary care for your beloved companions. With a team of experienced
              doctors and state-of-the-art facilities, we are committed to being
              your trusted partner in pet healthcare.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
