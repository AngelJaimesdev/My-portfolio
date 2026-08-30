import { Check, MessageCircle } from "lucide-react";
import { socialLinks } from "./socialLinks";
import { useReveal, revealClass } from "./useReveal";
import { useTilt } from "./useTilt";
import AnimatedBackground from "./AnimatedBackground";
import { useLang } from "./i18n";

type Plan = {
  name: string;
  tagline: string;
  delivery: string;
  features: string[];
  featured: boolean;
};

function PlanCard({
  plan,
  index,
  visible,
  href,
  labels,
}: {
  plan: Plan;
  index: number;
  visible: boolean;
  href: string;
  labels: { mostPopular: string; delivery: string; cta: string; quote: string };
}) {
  const tiltRef = useTilt<HTMLDivElement>(5);

  return (
    <div
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`w-full md:flex-1 [perspective:1000px] ${
        plan.featured ? "md:scale-105" : ""
      } ${revealClass(visible)}`}
    >
      <div
        ref={tiltRef}
        className={`relative flex h-full flex-col rounded-xl border bg-[#050505] p-6 transition-[box-shadow,border-color] duration-300 [transform-style:preserve-3d] ${
          plan.featured
            ? "border-[#2563eb] shadow-xl shadow-[#1d4ed8]/30"
            : "border-[#2563eb]/30 shadow-lg shadow-[#2563eb]/20 hover:border-[#2563eb]/60 hover:shadow-xl hover:shadow-[#1d4ed8]/30"
        }`}
      >
        {plan.featured && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0ea5e9] px-4 py-1 text-xs font-semibold text-white shadow-md shadow-[#1d4ed8]/40">
            {labels.mostPopular}
          </span>
        )}

        <h3 className="mt-2 text-center text-xl font-semibold text-white">{plan.name}</h3>
        <p className="mb-4 text-center text-sm text-[#7dd3fc]">{plan.tagline}</p>

        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#2563eb]/40 px-3 py-1 text-xs font-medium text-[#94a3b8]">
            {labels.quote}
          </span>
        </div>

        <ul className="mb-6 flex flex-1 flex-col gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-[#cbd5e1]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" />
              {feature}
            </li>
          ))}
        </ul>

        <p className="mb-4 text-center text-xs text-[#94a3b8]">
          {labels.delivery} <span className="text-[#f8fafc]">{plan.delivery}</span>
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
            plan.featured
              ? "bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white shadow-lg hover:from-[#2563eb] hover:to-[#0ea5e9] hover:shadow-xl"
              : "border border-[#1d4ed8] bg-transparent text-white hover:bg-[#1d4ed8]/10"
          }`}
        >
          <MessageCircle className="h-4 w-4" />
          {labels.cta}
        </a>
      </div>
    </div>
  );
}

function Services() {
  const { t } = useLang();
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: listRef, visible: listVisible } = useReveal<HTMLDivElement>();

  const plans: Plan[] = [
    { ...t.services.basic, featured: false },
    { ...t.services.professional, featured: true },
    { ...t.services.premium, featured: false },
  ];

  const whatsappHref = (planName: string) =>
    `${socialLinks.whatsapp}?text=${encodeURIComponent(t.services.whatsappMsg(planName))}`;

  const labels = {
    mostPopular: t.services.mostPopular,
    delivery: t.services.delivery,
    cta: t.services.cta,
    quote: t.services.quote,
  };

  return (
    <div className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#0d0d0f] to-[#050505] flex flex-col items-center justify-center p-10">
      <AnimatedBackground />

      {/* Title */}
      <h1
        ref={titleRef}
        className={`relative z-10 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent mt-10 text-center ${revealClass(titleVisible)}`}
      >
        {t.services.title}
      </h1>

      {/* Subtitle */}
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`relative z-10 md:text-lg text-[#94a3b8] mb-10 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        {t.services.subtitle}
      </h2>

      {/* Plans */}
      <div ref={listRef} className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-5xl items-stretch">
        {plans.map((plan, i) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            index={i}
            visible={listVisible}
            href={whatsappHref(plan.name)}
            labels={labels}
          />
        ))}
      </div>

      <p
        style={{ transitionDelay: "450ms" }}
        className={`relative z-10 text-xs text-[#94a3b8] text-center max-w-2xl mt-8 ${revealClass(listVisible)}`}
      >
        {t.services.footnote}
      </p>
    </div>
  );
}

export default Services;
