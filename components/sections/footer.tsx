import Link from "next/link"
import { Stethoscope, Heart } from "lucide-react"

const footerLinks = {
  services: [
    { label: "General Checkup", href: "#services" },
    { label: "Vaccinations", href: "#services" },
    { label: "Surgery", href: "#services" },
    { label: "Emergency 24/7", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Stethoscope className="size-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">VetCare</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Compassionate, professional veterinary care from a team of
              experienced doctors who love what they do.
            </p>
          </div>

          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h3 className="mb-3 text-sm font-semibold capitalize">
                {key === "services" ? "Services" : key === "company" ? "Company" : "Support"}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} VetCare. Caring from the heart
            <Heart className="size-3.5 fill-primary text-primary" />
          </p>
        </div>
      </div>
    </footer>
  )
}
