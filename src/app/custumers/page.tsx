"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Client } from "@/types/clients.types";
import { clientsData } from "@/utils/clients-utils";

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
import { MoreHorizontal } from "lucide-react";

const clientColumns: ColumnDef<Client>[] = [
  {
    accessorKey: "fullName",
    header: "Client",
    filterFn: "includesString",
  },
  {
    accessorKey: "company",
    header: "Entreprise",
    filterFn: "includesString",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) =>
      row.original.email ? (
        <span>{row.original.email}</span>
      ) : (
        <p className="text-muted-foreground text-center">—</p>
      ),
  },
  {
    accessorKey: "phone",
    header: "Téléphone",
    cell: ({ row }) =>
      row.original.phone ? (
        <span>{row.original.phone}</span>
      ) : (
        <p className="text-muted-foreground text-center">—</p>
      ),
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1">
        {row.original.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    ),
    filterFn: (row, id, value) => {
      if (!value) return true;
      return (row.getValue(id) as string[]).includes(value);
    },
  },
  {
    accessorKey: "createdAt",
    header: "Créé le",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="border">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Client</DropdownMenuLabel>
            <DropdownMenuItem>Voir le profil</DropdownMenuItem>
            <DropdownMenuItem>Voir les tickets</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>Modifier</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-red-600 focus:text-red-600">
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function ClientsTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: clientsData,
    columns: clientColumns,
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4">
      {/* Filtres */}
      <div className="flex gap-3 flex-wrap">
        <Input
          placeholder="Rechercher un client..."
          value={(table.getColumn("fullName")?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn("fullName")?.setFilterValue(e.target.value)
          }
          className="max-w-sm"
        />

        <Input
          placeholder="Entreprise..."
          value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn("company")?.setFilterValue(e.target.value)
          }
          className="max-w-sm"
        />
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
                <TableCell colSpan={clientColumns.length} className="text-center">
                  Aucun client trouvé
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
