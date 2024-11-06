import StudentTable from "@/components/DataTable/StudentTable";
import { StudentDialog } from "@/components/Dialog/StudentDialog";

export default function Courses() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Students</h1>
        <StudentDialog />
      </div>
      <StudentTable />
    </div>
  );
}
