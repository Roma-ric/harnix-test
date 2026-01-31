import { MonitorSmartphone } from "lucide-react";

const MobileRestriction = () => {
  return (
    <div className="flex sm:hidden min-h-screen w-full items-center justify-center p-5 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-pulsai-primary/10 rounded-full p-4">
            <MonitorSmartphone className="size-12 text-pulsai-primary" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Écran plus grand requis
        </h2>
        <p className="text-gray-600 text-sm">
          Pour une meilleure expérience, veuillez accéder à cette page depuis un
          ordinateur ou une tablette.
        </p>
      </div>
    </div>
  );
};

export default MobileRestriction;
