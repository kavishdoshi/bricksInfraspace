"use client";

import { useCallback } from "react";

export function Contact() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const message = (data.get("message") as string) || "";

    const to = "bricksinfraspace@gmail.com"; // updated real email
    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, "", message].join("\n")
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="contact" className="section-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Contact</h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-prose">
            Tell us about your project. We typically respond within 1 business day.
          </p>

          <div className="mt-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <div>
              <span className="font-medium">Email:</span> <a href="mailto:bricksinfraspace@gmail.com" className="underline underline-offset-2">bricksinfraspace@gmail.com</a>
            </div>
            <div>
              <span className="font-medium">Phone:</span> <a href="tel:+918980037007" className="underline underline-offset-2">+91 8980037007</a>
            </div>
            <div>
              <span className="font-medium">Location:</span> Ahmedabad, Gujarat
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card card-base p-6">
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm">Name</label>
              <input id="name" name="name" required className="h-10 rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-transparent px-3 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" />
            </div>
            <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" name="email" type="email" required className="h-10 rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-transparent px-3 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="phone" className="text-sm">Phone</label>
                <input id="phone" name="phone" type="tel" className="h-10 rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-transparent px-3 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" />
              </div>
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea id="message" name="message" rows={5} required className="rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" />
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn btn-brand rounded-full px-5 py-2.5 text-sm font-medium">
                Send enquiry
              </button>
              <a href="mailto:bricksinfraspace@gmail.com" className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium">
                Email us directly
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
