import { Badge } from "@/components/ui/badge";
import { Check, CircleCheck } from "lucide-react";
import React from "react";

export default function PricingCRM() {
  return (
    <div className="relative h-full overflow-y-auto scrollbar-hide rounded-lg isolate bg-gray-900 px-6 py-12 xl:py-20 2xl:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-pulsai-gray-dark to-pulsai-secondary opacity-20"></div>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-pulsai-primary">
          Facturation
        </h2>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-balance text-white xl:text-4xl">
          Choisissez le plan adapté à vos besoins
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 xl:text-xl/8">
        Choisissez un plan abordable qui regroupe les meilleures fonctionnalités
        pour engager votre audience, fidéliser vos clients et stimuler vos
        ventes.
      </p>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 xl:mt-20 xl:gap-y-0 2xl:max-w-4xl 2xl:grid-cols-2">
        <div className="rounded-3xl rounded-t-3xl bg-white/2.5 p-8 ring-1 ring-white/10 xl:mx-8 xl:p-10 2xl:mx-0 2xl:pr-20 2xl:-mr-10 2xl:rounded-bl-3xl">
          <h3
            id="tier-essentiel"
            className="text-base/7 font-semibold text-pulsai-primary"
          >
            Essentiel
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-white">
              29€
            </span>
            <span className="text-base text-gray-400">/mois</span>
          </p>
          <p className="mt-6 text-base/7 text-gray-300">
            Le plan parfait si vous débutez avec notre plateforme CRM
            intelligente.
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10"
          >
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Jusqu'à 5 000 contacts
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Chat IA conversationnel (500 messages/mois)
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Gestion de tickets (200/mois)
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />3 campagnes marketing
              automatisées
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Analyses avancées
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Support en 24 heures
            </li>
          </ul>
          <a
            href="#"
            aria-describedby="tier-essentiel"
            className="mt-8 block rounded-md bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 xl:mt-10"
          >
            Choisir ce plan
          </a>
        </div>
        <div className="relative rounded-3xl bg-gray-800 p-8 ring-1 ring-white/10 xl:p-10">
          <Badge className=" absolute right-2 top-2 bg-pulsai-secondary text-black flex justify-center items-center">
            <CircleCheck /> <span className="mt-0.5">Active</span>
          </Badge>
          <h3
            id="tier-professionnel"
            className="text-base/7 font-semibold text-pulsai-primary"
          >
            Professionnel
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-white">
              99€
            </span>
            <span className="text-base text-gray-400">/mois</span>
          </p>
          <p className="mt-6 text-base/7 text-gray-300">
            Support dédié et infrastructure pour votre entreprise.
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10"
          >
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Contacts illimités
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Chat IA conversationnel illimité
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Gestion de tickets illimitée
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Campagnes marketing illimitées
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Analyses avancées
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Représentant de support dédié
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Automatisations marketing
            </li>
            <li className="flex gap-x-3">
              <Check className="text-pulsai-primary" />
              Intégrations personnalisées
            </li>
          </ul>
          {/* <a
            href="#"
            aria-describedby="tier-professionnel"
            className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 xl:mt-10"
          >
            Choisir ce plan
          </a> */}
        </div>
      </div>
    </div>
  );
}
