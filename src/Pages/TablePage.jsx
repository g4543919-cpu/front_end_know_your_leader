import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function TablePage() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Severity Level</TableHead>
          <TableHead>Case Description</TableHead>
         
        </TableRow>
      </TableHeader>

      <TableBody>
       <TableRow>
  <TableCell>1</TableCell>
  <TableCell>HIGH</TableCell>
  <TableCell>Fraud Case</TableCell>
</TableRow>
      </TableBody>

    </Table>
  );
}

export default TablePage;

