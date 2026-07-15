import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, PenTool, Briefcase, FileCode2, Check, Loader2 } from "lucide-react";
import { Section } from "./Section";
import { personalInfo } from "@/lib/portfolio-data";

// User provides via env at deploy time
const WEB3FORMS_KEY = (import.meta as any).env?.VITE_WEB3FORMS_KEY as string | undefined;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!WEB3FORMS_KEY) {
      // Fallback: open mail client
      const form = e.currentTarget;
      const data = new FormData(form);
      const subject = encodeURIComponent(
        `[Portfolio] ${data.get("subject") || "New message"}`,
      );
      const body = encodeURIComponent(
        `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`,
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message ?? "Something went wrong");
      }
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Network error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      subtitle="Full-time, remote, contract, or freelance — I reply to every serious inquiry within 24 hours."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Left: info */}
        <div className="lg:col-span-2 space-y-6">
          <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
          <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} />
          <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value={personalInfo.location} />
          <ContactRow icon={<Clock className="h-4 w-4" />} label="Response" value="Usually within 24h" />

          <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
            <IconLink href={personalInfo.socials.github} label="GitHub"><Github className="h-4 w-4" /></IconLink>
            <IconLink href={personalInfo.socials.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
            <IconLink href={personalInfo.socials.medium} label="Medium"><PenTool className="h-4 w-4" /></IconLink>
            <IconLink href={personalInfo.socials.leetcode} label="LeetCode"><FileCode2 className="h-4 w-4" /></IconLink>
            <IconLink href={personalInfo.socials.fiverr} label="Fiverr"><Briefcase className="h-4 w-4" /></IconLink>
            <IconLink href={personalInfo.socials.huggingface} label="HuggingFace">🤗</IconLink>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={onSubmit} className="lg:col-span-3 card-elevated space-y-4 p-6 md:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" required />
            <Field name="email" label="Email" type="email" required />
          </div>
          <div>
            <label className="mono mb-2 block text-[11px] uppercase tracking-wider text-muted-foreground">
              Subject
            </label>
            <select
              name="subject"
              required
              className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
            >
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Freelance Project">Freelance Project</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="mono mb-2 block text-[11px] uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full resize-none rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
          >
            {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "sent" && <Check className="h-4 w-4" />}
            {status === "idle" && <Send className="h-4 w-4" />}
            {status === "error" && <Send className="h-4 w-4" />}
            {status === "sent" ? "Message sent" : status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-success">Thanks — I'll be in touch shortly.</p>
          )}
          {status === "error" && error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </form>
      </div>
    </Section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-1 text-primary">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {inner}
    </a>
  ) : (
    inner
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-1 text-muted-foreground transition-all hover:border-primary/40 hover:text-accent-glow"
    >
      {children}
    </a>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mono mb-2 block text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
      />
    </div>
  );
}
