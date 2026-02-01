"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Campaign } from "@/types/campaigns.types";
import {
  campaignsData,
  mapCampaignChannel,
  mapCampaignStatus,
} from "@/utils/campaigns-utils";

import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoreHorizontal } from "lucide-react";

const campaignColumns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "name",
    header: "Campagne",
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }) => {
      const { label, color } = mapCampaignStatus(row.original.status);
      return <Badge className={color}>{label}</Badge>;
    },
    filterFn: (row, id, value) => (!value ? true : row.getValue(id) === value),
  },
  {
    accessorKey: "channel",
    header: "Canal",
    cell: ({ row }) => {
      const { label, color } = mapCampaignChannel(row.original.channel);
      return <Badge className={color}>{label}</Badge>;
    },
    filterFn: (row, id, value) => (!value ? true : row.getValue(id) === value),
  },
  {
    id: "trigger",
    header: "Ciblage",
    accessorFn: (row) => row.segment.trigger,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.segment.description}
      </span>
    ),
    filterFn: (row, id, value) => (!value ? true : row.getValue(id) === value),
  },
  {
    id: "performance",
    header: "Performance",
    cell: ({ row }) => {
      const metrics = row.original.metrics;

      if (!metrics) return <span className="text-muted-foreground">—</span>;

      return (
        <div className="text-sm">
          <p>Open: {metrics.openRate}%</p>
          <p>CTR: {metrics.ctr}%</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const campaign = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="h-8 w-8 p-0 border">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Éditer</DropdownMenuItem>
            <DropdownMenuItem>
              {campaign.status === "active" ? "Mettre en pause" : "Activer"}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Dupliquer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function CampaignsTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: campaignsData,
    columns: campaignColumns,
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4 mb-5">
      {/* Filtre */}
      <div className="flex flex-wrap gap-3 mb-4">
        {/* Recherche par nom */}
        <Input
          placeholder="Rechercher une campagne..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn("name")?.setFilterValue(e.target.value)
          }
          className="max-w-sm"
        />

        {/* Filtre statut */}
        <Select
          onValueChange={(value) =>
            table
              .getColumn("status")
              ?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="draft">Brouillon</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="paused">En pause</SelectItem>
          </SelectContent>
        </Select>

        {/* Filtre canal */}
        <Select
          onValueChange={(value) =>
            table
              .getColumn("channel")
              ?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Canal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="chat">Chat</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
          </SelectContent>
        </Select>

        {/* Filtre trigger */}
        <Select
          onValueChange={(value) =>
            table
              .getColumn("trigger")
              ?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Type de campagne" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="inactive_users">Inactivité</SelectItem>
            <SelectItem value="ticket_resolved">Ticket résolu</SelectItem>
            <SelectItem value="onboarding">Onboarding</SelectItem>
            <SelectItem value="incident_alert">Incident / SLA</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-pulsai-gray-dark/10">
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead key={header.id} className="px-5">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={campaignColumns.length}
                  className="text-center"
                >
                  Aucune campagne
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
