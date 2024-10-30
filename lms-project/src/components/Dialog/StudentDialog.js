"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function StudentDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Student</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Student</DialogTitle>
            {/* <DialogDescription>

            </DialogDescription> */}
          </DialogHeader>
          <StudentForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Student</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Student</DrawerTitle>
          <DrawerDescription>You can add New Student here.</DrawerDescription>
        </DrawerHeader>
        <StudentForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function StudentForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="FullName">FullName</Label>
        <Input required type="text" id="FullName" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="Gender">Gender</Label>
        <Input required id="Gender" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="Email">Email</Label>
        <Input required id="Email" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="Education">Education</Label>
        <Input required id="Education" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="Address">Address</Label>
        <Input required id="Address" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="CNIC">CNIC</Label>
        <Input required id="CNIC" defaultValue="" />
      </div>

      <Button type="submit">Add Student</Button>
    </form>
  );
}
