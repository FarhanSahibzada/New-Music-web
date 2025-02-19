"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem,} from "./ui/navber-menu";
import { cn } from "@/lib/utlis";
import Link from "next/link";

function Navber({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl  mx-auto z-50", className)}
    >
      <Menu setActive={setActive} >
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item={"Home"} >
          </MenuItem>
        </Link>
          <MenuItem setActive={setActive} active={active} item={"Courses"} >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Courses">All Courses</HoveredLink>
            <HoveredLink href="/Courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/Courses">Advanced Compostion</HoveredLink>
            <HoveredLink href="/Courses">SongWriting</HoveredLink>
            <HoveredLink href="/Courses">Music Production</HoveredLink>
          </div>
          </MenuItem>
        <Link href={"Contact"}>
          <MenuItem setActive={setActive} active={active} item={"Contact US"} >
          </MenuItem>
        </Link>
      </Menu>

    </div>
  );
}

export default Navber;
