import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home({ children }) {
  return (
    <div>
      <div className="flex justify-center">
        <Tabs>
          <TabsList className="w-dvw ">
            <Link href={"/admin/Dashboard"}>
              <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
            </Link>
            <Link href={"/admin/Students"}>
              <TabsTrigger value="Students">Students</TabsTrigger>
            </Link>
            <Link href={"/admin/Trainers"}>
              <TabsTrigger value="Trainers">Trainers</TabsTrigger>
            </Link>
            <Link href={"/admin/Batches"}>
              <TabsTrigger value="Batches">Batches</TabsTrigger>
            </Link>
            <Link href={"/admin/Courses"}>
              <TabsTrigger value="Courses">Courses</TabsTrigger>
            </Link>
          </TabsList>
          <TabsContent value="Trainers">{children}</TabsContent>
          <TabsContent value="Batches">{children}</TabsContent>
          <TabsContent value="Students">{children}</TabsContent>
          <TabsContent value="Dashboard">{children}</TabsContent>
          <TabsContent value="Courses">{children}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
