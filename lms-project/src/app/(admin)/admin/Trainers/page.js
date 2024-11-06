import TrainersTable from "@/components/DataTable/TrainersTable";
import { TrainersDialog } from "@/components/Dialog/TrainersDialog";

export default function Courses() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Trainers</h1>
        <TrainersDialog />
      </div>
      <TrainersTable />
    </div>
  );
}
