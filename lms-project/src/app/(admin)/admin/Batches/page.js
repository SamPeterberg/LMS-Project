import BatchTable from "@/components/DataTable/BatchTable";
import { BatchDialog } from "@/components/Dialog/BatchDialog";

export default function Batches() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-5xl font-bold text-center">Batches</h1>
        <BatchDialog />
      </div>
      <BatchTable />
    </div>
  );
}
