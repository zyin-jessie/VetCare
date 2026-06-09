import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Main Street, Suite 100, New York, NY",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(212) 555-0198",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@vetcare.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sun: 7:00 AM - 9:00 PM",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 rounded-3xl border bg-card p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Book an Appointment
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Let us take care of your furry friend. Fill out the form or give
              us a call to schedule a visit.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-1.5 flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-1.5 flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pet" className="text-sm font-medium">
                Pet Name
              </label>
              <input
                id="pet"
                type="text"
                placeholder="Enter your pet's name"
                className="mt-1.5 flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Describe symptoms or your request"
                className="mt-1.5 flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <Button size="lg" className="w-full gap-2">
              Send Request
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
