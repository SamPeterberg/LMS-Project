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

export function BatchDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Batch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Batch</DialogTitle>
            {/* <DialogDescription>

            </DialogDescription> */}
          </DialogHeader>
          <BatchForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batch</DrawerTitle>
          <DrawerDescription>You can add Batch here.</DrawerDescription>
        </DrawerHeader>
        <BatchForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function BatchForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="Batch">Batch Name</Label>
        <Input required type="text" id="Batch" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="Batch">Number of Students</Label>
        <Input required type="Number" id="NumberOfStudents" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Batch Status</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="pending - Completed" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="On-Going">On-Going</SelectItem>
            <SelectItem value="Merged">Merged</SelectItem>
            <SelectItem value="Completed">Merged</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Trainers</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select-Trainer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Sameer Ahmed">Sameer Ahmed</SelectItem>
            <SelectItem value="Abu Bakar">Abu Bakar</SelectItem>
            <SelectItem value="Abdul Ahad">Abdul Ahad</SelectItem>
            <SelectItem value="Salal Saleem">Salal Saleem</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Course</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="pending - Completed" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Web and Mobile App development">
              Web and Mobile App development
            </SelectItem>
            <SelectItem value="Graphic Designing">Graphic Designing</SelectItem>
            <SelectItem value="Python  Development">
              Python Development
            </SelectItem>
            <SelectItem value="Local E-commerce">Local E-commerce</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Add Batch</Button>
    </form>
  );
}
