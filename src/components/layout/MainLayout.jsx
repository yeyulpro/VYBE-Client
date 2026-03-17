// Layout: TopNav + conditional Sidebar (home only) + main content area

import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import TopNav from "@components/layout/TopNav";
import Sidebar from "@components/layout/Sidebar";

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <TopNav />
      <div className="flex min-h-[calc(100vh-4rem)]">
        {isHome && (
          <aside className="hidden w-72 shrink-0 border-r border-white/5 bg-black/40 lg:block">
            <Sidebar />
          </aside>
        )}

        <main className="relative min-w-0 flex-1 overflow-auto bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.34),transparent_55%),radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_65%),#020016]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(56,189,248,0.18),transparent_55%)] opacity-70 mix-blend-screen" />
          <div className="relative flex min-h-full items-center justify-center px-4 sm:px-8">
            <div className="w-full max-w-4xl text-center">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
