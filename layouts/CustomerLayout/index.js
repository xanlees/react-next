import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function index({ children }) {
  return (
    <>
      <div class="min-h-screen flex">
        <div class="w-56 flex-none">
          <Sidebar />
        </div>

        <main class="flex-1 min-w-0 overflow-auto">
          <Navbar />
          {children}
        </main>
      </div>
    </>
  );
}
