import { Card } from "@/components/ui/card";
import { OverviewKPIs } from "@/lib/overview-utils";

export default function Overview() {
  return (
    <div className="w-full pt-5">
      <div className="flex space-x-4">

        {/* KPIs */}
        {OverviewKPIs.map((kpi, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden w-full 2xl:w-[20rem] font-mono p-5 bg-linear-to-tr from-pulsai-gray-light to-white`}
          >
            <div className="flex items-center space-x-2 -mt-1">
              <kpi.icon className={`text-${kpi.className} w-5`} />
              <span className="font-extralight mt-1"> {kpi.label} </span>
            </div>
            <div className="font-bold text-4xl -mt-4">{kpi.count}</div>
            <kpi.icon
              className={`absolute -bottom-4 -right-4 text-${kpi.className} size-20 opacity-10`}
            />
            {kpi.description && <div className="text-xs -mt-4 truncate"> {kpi.description} </div>}
          </Card>
        ))}

        {/* Charts */}
        
      </div>
    </div>
  );
}

/**
 * Intervention (Humaine | IA)
 * Tickets par mois
 * 
Area Chart
Bar Chart
Line Chart
Radial Chart
Radar Chart
 */