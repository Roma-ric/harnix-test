import React, { useState } from 'react';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const KpiCharts = () => {
  // Données pour les interventions par type (Humaine vs IA)
  const interventionTypeData = [
    { type: 'Jan', humaine: 145, ia: 89 },
    { type: 'Fév', humaine: 132, ia: 112 },
    { type: 'Mar', humaine: 128, ia: 145 },
    { type: 'Avr', humaine: 115, ia: 178 },
    { type: 'Mai', humaine: 98, ia: 203 },
    { type: 'Jun', humaine: 87, ia: 234 },
  ];

  // Données pour les tickets par mois
  const ticketsData = [
    { mois: 'Jan', total: 234, resolus: 198, enCours: 36 },
    { mois: 'Fév', total: 244, resolus: 215, enCours: 29 },
    { mois: 'Mar', total: 273, resolus: 241, enCours: 32 },
    { mois: 'Avr', total: 293, resolus: 267, enCours: 26 },
    { mois: 'Mai', total: 301, resolus: 278, enCours: 23 },
    { mois: 'Jun', total: 321, resolus: 298, enCours: 23 },
  ];

  // Données pour le taux de résolution
  const resolutionData = [
    { mois: 'Jan', taux: 84.6 },
    { mois: 'Fév', taux: 88.1 },
    { mois: 'Mar', taux: 88.3 },
    { mois: 'Avr', taux: 91.1 },
    { mois: 'Mai', taux: 92.4 },
    { mois: 'Jun', taux: 92.8 },
  ];

  // Données pour la satisfaction client
  const satisfactionData = [
    { category: 'Rapidité', score: 92 },
    { category: 'Qualité', score: 88 },
    { category: 'Communication', score: 85 },
    { category: 'Résolution', score: 91 },
    { category: 'Professionnalisme', score: 94 },
  ];

  // Données radiales pour la satisfaction globale
  const satisfactionRadialData = [
    { name: 'Satisfaction', value: 89.5, fill: '#10b981' },
  ];

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
    <div className="w-full min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Tableau de Bord des Interventions
          </h1>
          <p className="text-slate-600">
            Analyse des performances et satisfaction client
          </p>
        </div>

        {/* Area Chart - Interventions Humaine vs IA */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Interventions par Type</CardTitle>
            <CardDescription>
              Évolution des interventions humaines et IA au fil du temps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <AreaChart data={interventionTypeData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
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
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Tickets par Mois</CardTitle>
            <CardDescription>
              Répartition des tickets totaux, résolus et en cours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart data={ticketsData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
                <XAxis dataKey="mois" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="total" fill="#06b6d4" name="Total" radius={[8, 8, 0, 0]} />
                <Bar dataKey="resolus" fill="#10b981" name="Résolus" radius={[8, 8, 0, 0]} />
                <Bar dataKey="enCours" fill="#f59e0b" name="En cours" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Line Chart - Taux de résolution */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Taux de Résolution</CardTitle>
            <CardDescription>
              Évolution du pourcentage de tickets résolus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={resolutionData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Radar Chart - Satisfaction client */}
          <Card className="shadow-lg">
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
                  <PolarAngleAxis dataKey="category" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#64748b' }} />
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

          {/* Radial Chart - Satisfaction globale */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Satisfaction Globale</CardTitle>
              <CardDescription>
                Score moyen de satisfaction client
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <RadialBarChart
                  data={satisfactionRadialData}
                  startAngle={90}
                  endAngle={-270}
                  innerRadius="40%"
                  outerRadius="100%"
                >
                  <PolarGrid gridType="circle" stroke="#e2e8f0" />
                  <RadialBar
                    dataKey="value"
                    cornerRadius={10}
                    fill="#10b981"
                    background={{ fill: '#f1f5f9' }}
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-slate-900 text-4xl font-bold"
                  >
                    {satisfactionRadialData[0].value}%
                  </text>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Statistiques résumées */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-lg bg-blue-50 border-blue-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-blue-600">Total Tickets</CardDescription>
              <CardTitle className="text-3xl text-blue-700">1,666</CardTitle>
            </CardHeader>
          </Card>
          <Card className="shadow-lg bg-green-50 border-green-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-green-600">Taux Résolution</CardDescription>
              <CardTitle className="text-3xl text-green-700">89.5%</CardTitle>
            </CardHeader>
          </Card>
          <Card className="shadow-lg bg-purple-50 border-purple-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-purple-600">IA Adoptée</CardDescription>
              <CardTitle className="text-3xl text-purple-700">+162%</CardTitle>
            </CardHeader>
          </Card>
          <Card className="shadow-lg bg-pink-50 border-pink-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-pink-600">Satisfaction</CardDescription>
              <CardTitle className="text-3xl text-pink-700">89.5%</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KpiCharts;