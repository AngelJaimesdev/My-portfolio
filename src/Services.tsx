import { Check, MessageCircle } from "lucide-react";
import { socialLinks } from "./socialLinks";
import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";

function Services() {
  const { ref: titleRef, visible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { ref: listRef, visible: listVisible } = useReveal<HTMLDivElement>();

  const plans = [
    {
      name: "Basic",
      tagline: "Digital Presence",
      price: "$500.000 COP",
      priceNote: "≈ US$125",
      delivery: "5-7 business days",
      featured: false,
      features: [
        "Single-page landing page",
        "Responsive design",
        "Up to 4 sections (Hero, Services, Gallery, Contact)",
        "Contact form to WhatsApp/email",
        "Basic SEO",
        "1 round of revisions",
      ],
    },
    {
      name: "Professional",
      tagline: "Online Business",
      price: "$1.500.000 COP",
      priceNote: "≈ US$375",
      delivery: "10-15 business days",
      featured: true,
      features: [
        "Custom 5-6 page website",
        "Home, About, Services/Products, Gallery, Contact",
        "WhatsApp Business integration",
        "On-page SEO",
        "2 rounds of revisions",
      ],
    },
    {
      name: "Premium",
      tagline: "Custom Platform",
      price: "From $4.000.000 COP",
      priceNote: "≈ US$1.000",
      delivery: "4-6 weeks",
      featured: false,
      features: [
        "Web app with a custom backend",
        "Database and admin panel",
        "User authentication",
        "Online payments (Wompi/PayU)",
        "Custom UI/UX design",
        "3 rounds of revisions + 15 days of support",
      ],
    },
  ];

  const whatsappHref = (planName: string) =>
    `${socialLinks.whatsapp}?text=${encodeURIComponent(
      `Hi Angel, I'm interested in the ${planName} plan to build my website.`
    )}`;

  return (
    <div className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#0d0d0f] to-[#050505] flex flex-col items-center justify-center p-10">
      <AnimatedBackground />

      {/* Title */}
      <h1
        ref={titleRef}
        className={`relative z-10 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent mt-10 text-center ${revealClass(titleVisible)}`}
      >
        Services
      </h1>

      {/* Subtitle */}
      <h2
        style={{ transitionDelay: "100ms" }}
        className={`relative z-10 md:text-lg text-[#94a3b8] mb-10 text-center max-w-2xl ${revealClass(titleVisible)}`}
      >
        Do you have a business? I build custom websites so your business gets a strong online presence.
      </h2>

      {/* Plans */}
      <div ref={listRef} className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-5xl items-stretch">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            style={{ transitionDelay: `${i * 150}ms` }}
            className={`relative flex flex-col bg-[#050505] border rounded-xl p-6 w-full md:flex-1 transition-all duration-300 hover:-translate-y-1 ${
              plan.featured
                ? "border-[#2563eb] shadow-xl shadow-[#1d4ed8]/30 md:scale-105"
                : "border-[#2563eb]/30 shadow-lg shadow-[#2563eb]/20 hover:border-[#2563eb]/60 hover:shadow-xl hover:shadow-[#1d4ed8]/30"
            } ${revealClass(listVisible)}`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1d4ed8] to-[#0ea5e9] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md shadow-[#1d4ed8]/40">
                Most popular
              </span>
            )}

            <h3 className="text-xl font-semibold text-white text-center mt-2">{plan.name}</h3>
            <p className="text-[#7dd3fc] text-sm text-center mb-4">{plan.tagline}</p>

            <div className="text-center mb-1">
              <span className="text-2xl md:text-3xl font-bold text-white">{plan.price}</span>
            </div>
            <p className="text-[#94a3b8] text-xs text-center mb-6">{plan.priceNote}</p>

            <ul className="flex flex-col gap-3 mb-6 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-[#cbd5e1]">
                  <Check className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#94a3b8] text-center mb-4">
              Estimated delivery: <span className="text-[#f8fafc]">{plan.delivery}</span>
            </p>

            <a
              href={whatsappHref(plan.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 text-sm font-medium px-5 py-3 rounded-xl transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white shadow-lg hover:from-[#2563eb] hover:to-[#0ea5e9] hover:shadow-xl"
                  : "bg-transparent border border-[#1d4ed8] text-white hover:bg-[#1d4ed8]/10"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Request via WhatsApp
            </a>
          </div>
        ))}
      </div>

      <p
        style={{ transitionDelay: "450ms" }}
        className={`relative z-10 text-xs text-[#94a3b8] text-center max-w-2xl mt-8 ${revealClass(listVisible)}`}
      >
        Hosting and domain not included. Need something different? Reach out and we'll build a custom plan for you.
      </p>
    </div>
  );
}

export default Services;
