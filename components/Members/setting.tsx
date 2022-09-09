// Import Library
import React, { useState } from "react";
import { useRouter } from "next/router";

// Import Components
import SidebarNav from "./Sidebar";
import EditProfileForm from "./EditProfileForm";

export default function SettingsPage() {
  const [form, setForm] = useState({ name: "", email: "", phoneNumber: "" }),
    router = useRouter();

  // Handle Change
  const handleChange = () => {};

  // Handle Submit
  const handleSubmit = () => {
    router.push("/member/dashboard");
  };

  return (
    <section className="edit-profile overflow-auto">
      <SidebarNav />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            {/* Edit Profile Form */}
            <EditProfileForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </main>
    </section>
  );
}
