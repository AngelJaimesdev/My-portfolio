import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "./config";
import { useLang } from "./i18n";

type Status = "idle" | "sending" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const { t } = useLang();
  const f = t.contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = f.invalidName;
    if (!EMAIL_RE.test(email)) nextErrors.email = f.invalidEmail;
    if (message.length < 10) nextErrors.message = f.invalidMessage;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-xl bg-[#050505] border border-[#2563eb]/30 px-4 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#475569] outline-none transition-colors focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/40";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="w-full max-w-lg text-left flex flex-col gap-4"
    >
      <div>
        <label htmlFor="cf-name" className="block text-xs font-medium text-[#94a3b8] mb-1.5">
          {f.name}
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={f.namePh}
          className={fieldClass}
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-xs font-medium text-[#94a3b8] mb-1.5">
          {f.email}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={f.emailPh}
          className={fieldClass}
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-medium text-[#94a3b8] mb-1.5">
          {f.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          placeholder={f.messagePh}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:from-[#2563eb] hover:to-[#0ea5e9] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
        {status === "sending" ? f.sending : f.send}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-400">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {f.success}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {f.error}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
