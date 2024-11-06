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

export function TrainersDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Trainers</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Trainers</DialogTitle>
            {/* <DialogDescription>

            </DialogDescription> */}
          </DialogHeader>
          <TrainersForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Trainers</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Trainers</DrawerTitle>
          <DrawerDescription>You can add New Trainers here.</DrawerDescription>
        </DrawerHeader>
        <TrainersForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function TrainersForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="FullName">FullName</Label>
        <Input required type="text" id="FullName" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Gender</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Male - Female" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
          </SelectContent>
        </Select>
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

      <Button type="submit">Add Trainers</Button>
    </form>
  );
}
