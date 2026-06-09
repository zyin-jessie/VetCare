import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-1px)] items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-orange-500/5" />
        <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 size-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <Star className="size-3.5 fill-yellow-500 text-yellow-500" />
            <span>Trusted by 10,000+ pet parents</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Caring for your{" "}
            <span className="text-primary">furry friend</span>{" "}
            like family
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Experienced veterinarians, modern facilities, and compassionate
            care for your beloved four-legged companion.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2" asChild>
              <Link href="#contact">
                Book an Appointment
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#services">Our Services</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" />
              Licensed Vets
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" />
              Modern Equipment
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" />
              24/7 Support
            </span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-orange-500/20 rounded-3xl" />
          <div className="relative flex h-full items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground shadow-lg">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm opacity-90">Years of Experience</p>
                </div>
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <p className="text-3xl font-bold text-orange-500">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Pets Treated</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-lg">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm opacity-90">Emergency Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
