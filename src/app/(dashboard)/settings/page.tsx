"use client";

import { Card } from "@/components/ui/card";

export default function Settings() {
  const SectionTitle = ({ title }: { title: string }) => {
    return (
      <h2 className="py-2 px-4 sticky top-0 font-semibold bg-pulsai-gray-dark/15 border-l-6 border-l-pulsai-gray-dark w-min whitespace-nowrap">
        {" "}
        {title}{" "}
      </h2>
    );
  };

  return (
    <div className="flex min-h-full! max-h-full! relative">
      <div className="flex flex-col w-full min-h-full! max-h-full! relative overflow-y-auto scrollbar-hide">
        {/* Profile Card */}
        <SectionTitle title="Profile Utilisateur" />
        <Card className="lg:max-w-3xl w-full p-5 mt-5 min-h-100 mb-10"></Card>

        <SectionTitle title="Entreprises" />
        <Card className="lg:max-w-3xl w-full p-5 mt-5 min-h-80"></Card>
      </div>
    </div>
  );
}
