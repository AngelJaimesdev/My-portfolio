import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { socialLinks } from "./socialLinks";
import { useReveal, revealClass } from "./useReveal";
import AnimatedBackground from "./AnimatedBackground";
import ContactForm from "./ContactForm";
import { useLang } from "./i18n";

function Contact() {
  const { t } = useLang();
  const { ref: contactRef, visible: contactVisible } = useReveal<HTMLDivElement>();

  return (
    <div className="relative z-0 overflow-hidden w-full min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-[#050505] to-[#0d0d0f] text-white flex flex-col items-center justify-center py-16 px-12">
      <AnimatedBackground />

      <div
        ref={contactRef}
        className={`relative z-10 w-full max-w-4xl flex flex-col items-center text-center ${revealClass(contactVisible)}`}
      >
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
          {t.contact.title}
        </h2>
        <p className="text-[#94a3b8] mt-2 max-w-xl">{t.contact.subtitle}</p>

        <div className="mt-8 w-full flex justify-center">
          <ContactForm />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#050505] border border-[#2563eb]/30 text-white text-sm font-medium px-4 py-2 rounded-xl hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#050505] border border-[#2563eb]/30 text-white text-sm font-medium px-4 py-2 rounded-xl hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center gap-2 bg-[#050505] border border-[#2563eb]/30 text-white text-sm font-medium px-4 py-2 rounded-xl hover:border-[#2563eb]/70 hover:shadow-md hover:shadow-[#1d4ed8]/20 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg hover:from-[#2563eb] hover:to-[#0ea5e9] hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
