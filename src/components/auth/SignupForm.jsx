// React Components  >  Auth Components > Signup form; Glassmorphism signup card

import React, { useState } from "react";
import { Sparkles, Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.35),transparent_60%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.22),transparent_55%)] opacity-70 blur-2xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/60 px-8 pb-8 pt-9 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 ring-1 ring-violet-400/40">
          <Sparkles className="h-5 w-5 text-violet-100" strokeWidth={1.7} />
        </div>

        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-sky-100 md:text-2xl">
            Join VYBE
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Create your account and start earning rewards.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Full name */}
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="flex items-center justify-between text-xs font-medium text-zinc-300"
            >
              <span>Full name</span>
            </label>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-100 shadow-[0_0_0_1px_rgba(24,24,27,0.6)] focus-within:border-violet-400/70 focus-within:shadow-[0_0_0_1px_rgba(129,140,248,0.6)]">
              <User className="h-4 w-4 text-zinc-500" strokeWidth={1.7} />
              <input
                id="fullName"
                type="text"
                placeholder="Your full name"
                className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="flex items-center justify-between text-xs font-medium text-zinc-300"
            >
              <span>Email</span>
            </label>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-100 shadow-[0_0_0_1px_rgba(24,24,27,0.6)] focus-within:border-violet-400/70 focus-within:shadow-[0_0_0_1px_rgba(129,140,248,0.6)]">
              <Mail className="h-4 w-4 text-zinc-500" strokeWidth={1.7} />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="flex items-center justify-between text-xs font-medium text-zinc-300"
            >
              <span>Password</span>
            </label>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-100 shadow-[0_0_0_1px_rgba(24,24,27,0.6)] focus-within:border-violet-400/70 focus-within:shadow-[0_0_0_1px_rgba(129,140,248,0.6)]">
              <Lock className="h-4 w-4 text-zinc-500" strokeWidth={1.7} />
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-violet-500 via-fuchsia-500 to-sky-400 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(129,140,248,0.6)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80"
          >
            Create account
          </button>
        </form>

        {/* Footer text */}
        <div className="mt-5 space-y-1 text-center text-xs text-zinc-500">
          <p>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="font-medium text-violet-300 hover:text-violet-200"
            >
              Sign in
            </button>
          </p>
          <p className="text-[11px] text-zinc-600">
            By continuing you agree to our{" "}
            <button
              type="button"
              onClick={() => setIsPolicyOpen(true)}
              className="font-medium text-zinc-400 hover:text-zinc-300"
            >
              terms &amp; privacy
            </button>
            .
          </p>
        </div>
      </div>
      <PrivacyPolicyModal
        open={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </div>
  );
};

export default SignupForm;
