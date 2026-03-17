// React Components  >  Auth Components > Privacy policy modal overlay

import React from "react";
import { X, Shield } from "lucide-react";

const PrivacyPolicyModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/10   flex justify-center items-center z-50   ">
      {/* Backdrop click */}
      <button
        type="button"
        aria-label="Close privacy policy"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default"
      />

      {/* Modal card – leave a bit of space so scrollbar ends are visible */}
      <div className="relative z-10 w-full max-w-3xl min-h-[55vh] max-h-[88vh] overflow-hidden rounded-[28px] border border-white/10 bg-black/80 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 ring-1 ring-violet-400/40">
              <Shield
                className="h-4.5 w-4.5 text-violet-200"
                strokeWidth={1.7}
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-zinc-50">
                VYBE Privacy Policy
              </h2>
              <p className="text-[11px] text-zinc-500">
                Last updated: March 7, 2026
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400 shadow-sm transition hover:bg-white/10 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80"
          >
            <X className="h-4 w-4" strokeWidth={1.6} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="max-h-[calc(88vh-72px)] overflow-y-auto px-6 py-5 text-sm leading-relaxed text-zinc-300">
          <p className="mb-4 text-xs font-medium uppercase tracking-wide text-violet-300">
            Please read this Privacy Policy carefully before using VYBE.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            1. Introduction
          </h3>
          <p className="mb-3">
            Welcome to VYBE. Your privacy is important to us. This Privacy
            Policy explains how VYBE collects, uses, and protects information
            when you use our application and services.
          </p>
          <p className="mb-3">
            VYBE is currently operating as a prototype and demonstration
            platform designed to showcase the concept of an AI-powered
            restaurant discovery and ordering application.
          </p>
          <p className="mb-4">
            By accessing or using the VYBE application, you agree to the terms
            outlined in this Privacy Policy.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            2. Prototype and Mock Data Notice
          </h3>
          <p className="mb-3">
            VYBE is currently in a testing and demonstration phase. All
            restaurant listings, menu items, prices, images, and other
            information displayed in the application may be mock or sample data
            created for demonstration purposes only.
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-zinc-400">
            <li>
              Some restaurant names, menus, pricing, and images may not
              represent real businesses.
            </li>
            <li>
              Orders placed through the prototype will not result in real food
              orders.
            </li>
            <li>
              The data displayed is used solely to demonstrate the functionality
              and concept of the platform.
            </li>
            <li>
              Users should understand that the app is not currently providing
              live commercial services.
            </li>
          </ul>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            3. Information We May Collect
          </h3>
          <p className="mb-2">
            During the prototype phase, VYBE may collect limited information
            including:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-zinc-400">
            <li>Basic user information such as name or username</li>
            <li>Messages sent to restaurants through the chat feature</li>
            <li>Reviews or feedback submitted by users</li>
            <li>Search queries entered into the VYBE AI assistant</li>
            <li>
              Device and usage information for testing and performance
              improvements
            </li>
          </ul>
          <p className="mb-4">
            This information is collected solely to help evaluate and improve
            the prototype.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            4. How We Use Information
          </h3>
          <p className="mb-2">Information collected may be used for:</p>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-zinc-400">
            <li>Testing and improving the application&apos;s features</li>
            <li>Evaluating user interaction with AI-powered food discovery</li>
            <li>Improving user experience and functionality</li>
            <li>Debugging technical issues</li>
            <li>Demonstrating the concept of the VYBE platform</li>
          </ul>
          <p className="mb-4">
            Information collected during this phase will not be sold to third
            parties.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            5. AI Assistant and Search Queries
          </h3>
          <p className="mb-3">
            VYBE includes an AI-powered food discovery assistant that allows
            users to search for food using natural language queries such as
            &quot;Cheap food near me,&quot; &quot;High protein meals,&quot;
            &quot;Something cheesy,&quot; or &quot;Food for a party of 50
            people.&quot;
          </p>
          <p className="mb-4">
            Search queries may be processed using third-party artificial
            intelligence services to generate responses and recommendations
            within the application.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            6. User Reviews and Messages
          </h3>
          <p className="mb-4">
            Users may have the ability to leave reviews, rate restaurants, and
            send messages through the restaurant chat feature. Because the
            application is a prototype, these interactions are for testing and
            demonstration purposes only. Users should avoid sharing sensitive
            personal information when using these features.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            7. Data Security
          </h3>
          <p className="mb-4">
            We take reasonable steps to protect information within the VYBE
            application. However, as this platform is currently a prototype and
            testing environment, users should understand that the system may not
            yet include all security features that will exist in a full
            production release.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            8. Third-Party Services
          </h3>
          <p className="mb-4">
            VYBE may integrate third-party services such as AI processing tools,
            cloud hosting services, and analytics tools. These services may
            process limited information necessary to operate and test the
            platform.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            9. Children&apos;s Privacy
          </h3>
          <p className="mb-4">
            VYBE is not intended for individuals under the age of 13. We do not
            knowingly collect personal information from children.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            10. Future Changes
          </h3>
          <p className="mb-4">
            As VYBE evolves from a prototype into a full platform, this Privacy
            Policy may be updated to reflect new features, services, and data
            practices. Any updates will be posted within the application or on
            the VYBE website.
          </p>

          <h3 className="mb-1 text-sm font-semibold text-zinc-100">
            11. Contact Us
          </h3>
          <p className="mb-2">
            If you have any questions about this Privacy Policy or the VYBE
            platform, please contact us at:
          </p>
          <p className="mb-4 text-zinc-300">Email: vybe6ix.info@gmail.com</p>

          <p className="mt-2 text-xs text-zinc-500">
            By using the VYBE prototype application, you acknowledge that the
            platform is currently in a testing and demonstration stage and that
            certain data within the app may be mock or simulated for trial
            purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
