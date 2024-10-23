import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/Tab";
import Link from "next/link";

export default function Home({ children }) {
  return (
    <div>
      <div className="flex justify-center my-5">
        <Tabs defaultValue="">
          <TabsList>
            <Link href={"Students"}>
              <TabsTrigger value="Students">Students</TabsTrigger>
            </Link>
            <Link href={"Trainers"}>
              <TabsTrigger value="Trainers">Trainers</TabsTrigger>
            </Link>
            <Link href={"Batches"}>
              <TabsTrigger value="Batches">Batches</TabsTrigger>
            </Link>
            <Link href={"Dashboard"}>
              <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
            </Link>
            <Link href={"Courses"}>
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
