import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import shield from "@/assets/shield-mascot.png";
import atm from "@/assets/obj-atm.png";
import pin from "@/assets/obj-pin.png";
import coin from "@/assets/obj-coin.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPIShield | Proactive Cybercrime Intelligence" },
      {
        name: "description",
        content:
          "Trace suspicious UPI money flows and predict cash-out locations before funds disappear.",
      },
      { property: "og:title", content: "UPIShield | Proactive Cybercrime Intelligence" },
      {
        property: "og:description",
        content: "Detect the threat. Predict the cash-out. Intelligence for LEAs, banks and I4C.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = ["Detect", "Trace", "Predict", "Alert", "Intervene"];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-20 mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="/" className="flex items-center gap-3" aria-label="UPIShield home">
          <img src={shield} alt="" width={36} height={36} className="size-9" />
          <span className="leading-none">
            <span className="block font-display text-xl font-extrabold tracking-tight">
              UPI<span className="text-primary">Shield</span>
            </span>
            <span className="mt-1 block font-mono text-[9px] tracking-[0.18em] text-muted-foreground">
              PROACTIVE CYBERCRIME INTELLIGENCE
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-9 text-sm font-medium text-muted-foreground md:flex">
          <span>Platform</span>
          <span>Agencies</span>
          <span>Banks &amp; FIs</span>
          <span>I4C</span>
        </nav>
        <Button variant="outline" size="sm" className="rounded-full normal-case">
          Request access
        </Button>
      </header>

      <section className="relative mx-auto grid max-w-[1440px] items-center gap-6 px-6 pb-16 pt-6 lg:grid-cols-[1.05fr_1fr] lg:px-12 lg:pt-10">
        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-primary">
            <span className="size-1.5 rounded-full bg-risk" /> FOR LEAs · BANKS &amp; FIs · I4C
          </p>
          <h1 className="font-display text-[clamp(3rem,7.4vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
            Detect the threat.
            <br />
            <span className="text-primary">Predict</span> the{" "}
            <span className="relative inline-block">
              cash-out.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 14" fill="none" aria-hidden="true">
                <path d="M2 10 C 80 2, 200 2, 298 8" stroke="var(--risk)" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            UPIShield traces suspicious UPI money as it moves through mule accounts and predicts
            where it will be withdrawn, so teams can step in before the cash is gone.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button size="lg" className="rounded-full px-8 tracking-[0.14em]">
              Enter Command Centre <ArrowUpRight className="ml-3 size-4" />
            </Button>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <span className={i === 2 ? "text-primary" : ""}>{s.toUpperCase()}</span>
                  {i < steps.length - 1 && <span className="text-border">→</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[640px]">
          <div className="absolute inset-[12%] rounded-full bg-accent" aria-hidden="true" />
          <div className="absolute inset-[4%] rounded-full border border-dashed border-border" aria-hidden="true" />

          <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path className="flow-path" d="M14 22 Q 30 40 44 44" stroke="var(--cyan)" strokeWidth="0.5" />
            <path className="flow-path" d="M58 58 Q 70 74 80 76" stroke="var(--primary)" strokeWidth="0.5" />
            <path className="flow-path" d="M60 40 Q 76 26 84 22" stroke="var(--risk)" strokeWidth="0.5" />
          </svg>

          <img
            src={shield}
            alt="UPIShield intelligence core"
            width={1024}
            height={1024}
            className="float-a absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_40px_40px_color-mix(in_oklab,var(--primary)_28%,transparent)]"
          />

          <figure className="float-b absolute left-[2%] top-[8%] w-[22%]">
            <img src={coin} alt="UPI transaction" width={816} height={816} loading="lazy" />
            <figcaption className="-mt-2 text-center font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
              ₹48,200 · FLAGGED
            </figcaption>
          </figure>

          <figure className="float-c absolute right-[2%] top-[4%] w-[17%]">
            <img src={pin} alt="Predicted cash-out hotspot" width={816} height={816} loading="lazy" />
            <figcaption className="-mt-2 text-center font-mono text-[10px] tracking-[0.14em] text-risk">
              HOTSPOT · 87%
            </figcaption>
          </figure>

          <figure className="float-b absolute bottom-[6%] right-[4%] w-[22%]">
            <img src={atm} alt="ATM / CSP location" width={816} height={816} loading="lazy" />
            <figcaption className="-mt-1 text-center font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
              ATM / CSP
            </figcaption>
          </figure>

          <div className="absolute bottom-[14%] left-[4%] rounded-full bg-card px-4 py-2 font-mono text-[10px] tracking-[0.14em] shadow-sm">
            <span className="text-primary">●</span> 6 MULE ACCOUNTS LINKED
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-background to-foreground" aria-hidden="true" />
    </main>
  );
}
