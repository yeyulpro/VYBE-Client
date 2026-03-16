// React Components  >  Layout Components > Wrapper with TopNav + Outlet

import React from "react";
import TopNav from "./TopNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <TopNav />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <aside
          className="hidden w-72 shrink-0 border-r border-white/5
          bg-black/40
         lg:block "
        >
          {/* Sidebar content goes here */}
        </aside>

        {/* 오른쪽 메인 – 스크롤 가능한 영역 */}
        <main className="min-w-0 flex-1 overflow-auto">
          <div className="flex min-h-full items-center justify-center px-4 sm:px-8">
            <div className="w-full max-w-4xl text-center bg-amber-50 text-black">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
