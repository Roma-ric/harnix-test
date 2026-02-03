"use client";

import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import PulsAILogo from "@/components/domain/pulsai-logo";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-linear-to-tr from-pulsai-gray-dark to-pulsai-gray-light p-5">
      <div className="text-center space-y-6 max-w-md">
        <a href={"/overview"}>
          <PulsAILogo className="text-5xl mb-7" />
        </a>

        {/* 404 */}
        <div className="space-y-2">
          <h2 className="text-9xl font-bold text-white">404</h2>
          <h3 className="text-2xl font-semibold text-white">
            Page non trouvée
          </h3>
          <p className="text-gray-300">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button
            variant="default"
            className="bg-pulsai-secondary hover:bg-pulsai-secondary/90 text-black"
          >
            <a href="/overview" className="flex items-center gap-2">
              <Home className="size-4" />
              Retour au tableau de bord
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-white gap-2 hover:bg-white/10"
            onClick={() => router.back()}
          >
            <ArrowLeft className="size-4" />
            Page précédente
          </Button>
        </div>
      </div>
    </div>
  );
}
