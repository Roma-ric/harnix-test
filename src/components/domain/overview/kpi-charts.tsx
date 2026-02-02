import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  interventionTypeData,
  ticketsData,
  resolutionData,
  satisfactionData,
} from "@/utils/kpi-charts-utils";
import { OverviewKPIs } from "@/utils/overview-utils";

const KpiCharts = () => {
  const chartConfig = {
    humaine: {
      label: "Humaine",
      color: "#3b82f6",
    },
    ia: {
      label: "IA",
      color: "#8b5cf6",
    },
    total: {
      label: "Total",
      color: "#06b6d4",
    },
    resolus: {
      label: "Résolus",
      color: "#10b981",
    },
    enCours: {
      label: "En cours",
      color: "#f59e0b",
    },
    taux: {
      label: "Taux (%)",
      color: "#ec4899",
    },
  };

  return (
    <div className="mt-3 lg:mt-5 pb-3">
      {/* Statistiques résumées */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-5 2xl:max-w-400">
        {OverviewKPIs.map((kpi, index) => {
          const colorClasses = {
            "blue-600": "text-blue-600",
            "green-700": "text-green-700",
            "purple-700": "text-purple-700",
            "pink-700": "text-pink-700",
          };

          const textColor =
            colorClasses[kpi.className as keyof typeof colorClasses] ||
            "text-gray-700";

          return (
            <Card
              key={index}
              className={`relative overflow-hidden w-full shadow font-mono p-5 ${kpi.bgClassName} ${kpi.borderClassName}`}
            >
              <div className="flex items-center space-x-2 -mt-1">
                <kpi.icon className={`${textColor} w-5`} />
                <span className={`font-extralight mt-1 ${textColor}`}>
                  {kpi.label}
                </span>
              </div>
              <div className={`font-bold text-2xl xs:text-4xl -mt-4 ${textColor}`}>
                {kpi.prefix}
                {typeof kpi.count === "number" && kpi.suffix === "%"
                  ? kpi.count.toFixed(1)
                  : kpi.count}
                {kpi.suffix}
              </div>
              <kpi.icon
                className={`absolute -bottom-4 -right-4 ${textColor} size-20 opacity-10`}
              />
              {kpi.description && (
                <div className="text-xs -mt-4 truncate text-gray-600">
                  {kpi.description}
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Area Chart - Interventions Humaine vs IA */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Interventions par Type</CardTitle>
            <CardDescription>
              Évolution des interventions humaines et IA au fil du temps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <AreaChart data={interventionTypeData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-slate-200"
                />
                <XAxis dataKey="type" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="humaine"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                  name="Interventions Humaines"
                />
                <Area
                  type="monotone"
                  dataKey="ia"
                  stackId="1"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                  name="Interventions IA"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Bar Chart - Tickets par mois */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Tickets par Mois</CardTitle>
            <CardDescription>
              Répartition des tickets totaux, résolus et en cours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart data={ticketsData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-slate-200"
                />
                <XAxis dataKey="mois" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar
                  dataKey="total"
                  fill="#06b6d4"
                  name="Total"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="resolus"
                  fill="#10b981"
                  name="Résolus"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="enCours"
                  fill="#f59e0b"
                  name="En cours"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Line Chart - Taux de résolution */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Taux de Résolution</CardTitle>
            <CardDescription>
              Évolution du pourcentage de tickets résolus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={resolutionData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-slate-200"
                />
                <XAxis dataKey="mois" />
                <YAxis domain={[80, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="taux"
                  stroke="#ec4899"
                  strokeWidth={3}
                  dot={{ r: 6, fill: "#ec4899" }}
                  activeDot={{ r: 8 }}
                  name="Taux de Résolution (%)"
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Radar Chart - Satisfaction client */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Satisfaction Client</CardTitle>
            <CardDescription>
              Évaluation multi-critères de la satisfaction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <RadarChart data={satisfactionData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: "#64748b" }}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.5}
                  strokeWidth={2}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KpiCharts;
