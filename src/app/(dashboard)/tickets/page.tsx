"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  getSlaRemaining,
  getSlaStatus,
  mapPriority,
  mapStatus,
  ticketsData,
} from "@/utils/tickets-utils";
import { Ticket } from "@/types/tickets.types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const ticketColumns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "customer",
    header: "Client",
    filterFn: "includesString",
  },
  {
    accessorKey: "subject",
    header: "Sujet",
    cell: ({ row }) => (
      <Link
        href={`/chats/${row.original.conversationId}`}
        className="underline text-primary"
      >
        {row.original.subject}
      </Link>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priorité",
    cell: ({ row }) => {
      const { label, color } = mapPriority(row.original.priority);
      return <Badge className={color}>{label}</Badge>;
    },
    filterFn: (row, id, value) => {
      if (!value) return true;
      return row.getValue(id) === value;
    },
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }) => {
      const { label, color } = mapStatus(row.original.status);
      return <Badge className={color}>{label}</Badge>;
    },
    filterFn: (row, id, value) => {
      if (!value) return true;
      return row.getValue(id) === value;
    },
  },
  {
    accessorKey: "slaHours",
    header: "SLA",
    cell: ({ row }) => {
      const remainingMs = getSlaRemaining(
        row.original.createdAt,
        row.original.slaHours,
      );

      const { label, color } = getSlaStatus(remainingMs);

      return (
        <Badge className={color} title="Temps restant avant dépassement SLA">
          {label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdBy",
    header: "Créé par",
    filterFn: (row, id, value) => {
      if (!value) return true;
      return row.getValue(id) === value;
    },
    cell: ({ row }) => {
      const createdBy = row.original.createdBy === "ai" ? "IA" : "Vous";

      return <p className="text-center"> {createdBy} </p>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const ticket = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="h-8 w-8 p-0 border">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Link href={`/chats/${ticket.conversationId}`}>
              <DropdownMenuItem>Voir la conversation</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Modifier le ticket</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function TicketsTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: ticketsData,
    columns: ticketColumns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4 mb-5">
      {/* Filtre */}
      <div className="flex overflow-x-auto scrollbar-lock-hide gap-3 mb-4">
        <Input
          placeholder="Filtrer par client..."
          value={
            (table.getColumn("customer")?.getFilterValue() as string) ?? ""
          }
          onChange={(e) =>
            table.getColumn("customer")?.setFilterValue(e.target.value)
          }
          className="min-w-60 w-sm"
        />

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
            <SelectItem value="open">Ouvert</SelectItem>
            <SelectItem value="pending">En attente</SelectItem>
            <SelectItem value="resolved">Résolu</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) =>
            table
              .getColumn("priority")
              ?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Priorité" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="low">Basse</SelectItem>
            <SelectItem value="medium">Moyenne</SelectItem>
            <SelectItem value="high">Haute</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) =>
            table
              .getColumn("createdBy")
              ?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Créé par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="ai">IA</SelectItem>
            <SelectItem value="human">Humain</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg! max-w-full! overflow-y-auto scrollbar-lock-hide">
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
                    <TableCell key={cell.id} className="px-5 py-4">
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
                  colSpan={ticketColumns.length}
                  className="text-center min-h-full!"
                >
                  Aucun ticket trouvé
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
