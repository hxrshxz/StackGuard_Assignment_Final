import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "../ui/badge";

type DataRecord = {
  header: string;
  type: string;
  status: "In Process" | "Done";
  reviewer: string;
};

export const columns: ColumnDef<DataRecord>[] = [
  { accessorKey: "header", header: "Header" },
  { accessorKey: "type", header: "Type" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <Badge variant={status === "Done" ? "default" : "secondary"} className={status === "Done" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}>{status}</Badge>;
    },
  },
  { accessorKey: "reviewer", header: "Reviewer" },
];

export function DataTable({ data }: { data: DataRecord[] }) {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className="rounded-md border border-dark-border-subtle mx-4 lg:mx-6 bg-dark-bg-secondary shadow-glow-sm">
      <Table>
        <TableHeader className="bg-dark-bg-primary">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-b-dark-border-subtle hover:bg-dark-bg-primary">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="text-dark-text-muted">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-dark-text-light">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="border-b-dark-border-subtle hover:bg-dark-bg-primary">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-dark-text-muted">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}