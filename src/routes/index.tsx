import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Crosshair, ShieldCheck } from "lucide-react";

import sentinelImage from "@/assets/upishield-sentinel.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPIShield | Proactive Cybercrime Intelligence" },
      {
        name: "description",
        content:
          "Detect, trace and predict UPI financial crime before funds reach cash-out points.",
      },
      { property: "og:title", content: "UPIShield | Proactive Cybercrime Intelligence" },
      {
        property: "og:description",
        content:
          "Operational intelligence for proactive UPI fraud detection, tracing and intervention.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 intelligence-grid" aria-hidden="true" />

      <header className="relative z-30 mx-auto flex h-24 max-w-[1480px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="group flex items-center gap-3" aria-label="UPIShield home">
          <span className="brand-shield flex size-9 items-center justify-center border border-primary/50 bg-primary/10 text-primary">
            <ShieldCheck className="size-5" strokeWidth={1.7} />
          </span>
          <span className="font-display text-lg font-semibold tracking-normal">
            UPI<span className="text-primary">Shield</span>
          </span>
        </a>
        <div className="hidden items-center gap-3 border-l border-border/70 pl-5 sm:flex">
          <span className="signal-dot" aria-hidden="true" />
          <div>
            <p className="font-mono text-[9px] uppercase text-muted-foreground">Sentinel network</p>
            <p className="font-mono text-[10px] font-medium uppercase text-foreground">Operational</p>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1480px] items-center px-6 pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:px-12 lg:pb-8">
        <div className="relative z-20 max-w-[650px] py-10 lg:py-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <p className="font-mono text-[10px] font-semibold uppercase text-primary sm:text-xs">
              Proactive cybercrime intelligence
            </p>
          </div>

          <h1 className="font-display max-w-[630px] text-[clamp(2.75rem,5.35vw,5.5rem)] font-medium leading-[0.98] tracking-normal text-balance">
            Detect the threat. <span className="text-muted-foreground">Predict the cash-out.</span>{" "}
            Intervene before it’s too late.
          </h1>

          <div className="relative -mx-6 mt-7 h-[320px] overflow-hidden lg:hidden">
            <img
              src={sentinelImage}
              alt="UPIShield Sentinel monitoring a traced UPI financial intelligence network"
              width={1600}
              height={1200}
              className="h-full w-full object-cover object-[68%_center]"
            />
            <div className="absolute inset-0 mobile-sentinel-mask" />
            <div className="absolute bottom-5 right-6 border-r border-risk/60 pr-3 text-right">
              <p className="font-mono text-[8px] uppercase text-muted-foreground">Predicted cash-out</p>
              <p className="mt-1 font-mono text-[10px] font-semibold text-risk">03 LOCATIONS</p>
            </div>
          </div>

          <p className="mt-7 max-w-[550px] text-base leading-7 text-muted-foreground sm:text-lg">
            UPIShield transforms live transaction signals into actionable intelligence—giving agencies and institutions the lead time to stop financial crime.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button size="lg" asChild className="group gap-4 tracking-[0.14em]">
              <a href="#intelligence">
                Enter command centre
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase text-muted-foreground">
              <Crosshair className="size-4 text-cyan" />
              <span>Protocol UPI-S/04<br />Secure access</span>
            </div>
          </div>

          <div className="mt-14 border-t border-border/60 pt-5">
            <p className="mb-4 font-mono text-[9px] uppercase text-muted-foreground">Operational sequence</p>
            <ol className="flex max-w-[590px] flex-wrap items-center gap-y-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em]">
              {['Detect', 'Trace', 'Predict', 'Alert', 'Intervene'].map((step, index) => (
                <li key={step} className="flex items-center text-foreground">
                  <span className={index === 0 ? 'text-primary' : ''}>{step}</span>
                  {index < 4 && <span className="mx-3 text-border">/</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div id="intelligence" className="relative z-10 hidden min-h-[570px] self-stretch lg:block lg:min-h-[720px]">
          <div className="absolute inset-y-0 -left-[24%] -right-[14%] overflow-hidden lg:-left-[22%]">
            <img
              src={sentinelImage}
              alt="UPIShield Sentinel monitoring a traced UPI financial intelligence network"
              width={1600}
              height={1200}
              className="h-full w-full object-cover object-[62%_center] opacity-90"
            />
            <div className="absolute inset-0 sentinel-mask" />
          </div>

          <div className="absolute right-2 top-[13%] hidden border-r border-primary/50 pr-4 text-right sm:block lg:right-4">
            <p className="font-mono text-[9px] uppercase text-muted-foreground">Case identifier</p>
            <p className="mt-1 font-mono text-xs text-foreground">I4C / MU-7184</p>
          </div>

          <div className="absolute bottom-[12%] right-1 flex items-end gap-3 sm:right-5">
            <div className="text-right">
              <p className="font-mono text-[9px] uppercase text-muted-foreground">Predicted cash-out</p>
              <p className="mt-1 font-mono text-xs font-semibold text-risk">03 LOCATIONS</p>
            </div>
            <div className="flex size-10 items-center justify-center border border-risk/50 bg-risk/10 text-risk">
              <Crosshair className="size-5" />
            </div>
          </div>

          <div className="absolute bottom-[3%] left-[8%] hidden w-[86%] sm:block">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase text-muted-foreground">
              <span>Victim signal</span><span>UPI rail</span><span className="text-primary">Mule hub</span><span>Distribution</span><span>ATM / CSP</span>
            </div>
            <div className="mt-3 flex items-center">
              {[0, 1, 2, 3, 4].map((node) => (
                <div key={node} className="contents">
                  <span className={node === 2 ? 'flow-node flow-node-active' : 'flow-node'} />
                  {node < 4 && <span className="flow-line"><i /></span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-3 left-6 right-6 hidden items-center justify-between border-t border-border/40 pt-3 font-mono text-[8px] uppercase text-muted-foreground lg:flex lg:left-12 lg:right-12">
          <span>National financial intelligence grid</span>
          <span>22.5726° N / 88.3639° E</span>
          <span className="text-primary">Transaction trace active</span>
        </div>
      </section>
    </main>
  );
}
