"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProfileCard from "./profile-card";
import Notifications from "./notifications";
import KpiCharts from "./kpi-charts";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      {/* Info */}
      <div className="max-w-[24rem] mt-5">
        <span className="font-semibold text-xl">Bienvenue, Romaric!</span>
        <br />
        <span className="text-sm">
          Consulter la vue d'ensemble de vos activités
        </span>
      </div>

      <div className="flex items-center space-x-3 -mt-5">
        {/* Add Element */}
        <Button variant={"secondary"} className="border rounded-full w-12 h-12">
          <Plus className="size-5 strok" />
        </Button>

        {/* Notifications */}
        <Notifications />

        {/* Profile Card */}
        <ProfileCard />
      </div>

      {/* KPI Charts */}
      <KpiCharts />
    </div>
  );
};

export default Header;
