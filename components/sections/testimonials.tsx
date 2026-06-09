import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jessica L.",
    pet: "Milo - Corgi",
    text: "The vets here are so gentle and professional. Milo used to be terrified of checkups, but now he walks right in!",
    rating: 5,
  },
  {
    name: "Sarah K.",
    pet: "Luna - Persian Cat",
    text: "Amazing care and attention to detail. I was especially impressed by how clean and modern the facility is.",
    rating: 5,
  },
  {
    name: "Michael T.",
    pet: "Buddy - Golden Retriever",
    text: "The 24/7 emergency team saved Buddy's life. I will be forever grateful to the team at VetCare!",
    rating: 5,
  },
  {
    name: "Emily R.",
    pet: "Kiki - Poodle",
    text: "I trust VetCare completely with grooming. Kiki always comes out looking beautiful and happy!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What pet parents say
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Your satisfaction and your pet&apos;s health are what drive us every day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-4 border-t pt-4">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
