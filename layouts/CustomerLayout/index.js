import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function index({ children }) {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-56 flex-none">
          <Sidebar />
        </div>

        <main className="flex-1 min-w-0 overflow-auto">
          <Navbar />
          {children}
        </main>
      </div>
    </>
  );
}
