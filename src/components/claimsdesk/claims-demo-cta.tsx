import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClaimsDemoCta() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-brand p-10 text-primary-foreground md:flex-row md:p-14">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to transform your claims?
            </h2>
            <p className="mt-4 text-brand-soft text-sm md:text-base leading-relaxed opacity-90">
              Experience firsthand how our automated workflow reduces processing time, eliminates manual errors, and enforces your financial thresholds perfectly.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="group shrink-0 rounded-full bg-amber-500 text-white hover:bg-amber-600 px-10 hover:px-12 py-6 text-base font-bold transition-all duration-300 shadow-none hover:shadow-none"
          >
            <Link to="/login" className="flex items-center gap-2">
              Try demo <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
