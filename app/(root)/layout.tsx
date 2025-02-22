import React from "react";
import Navbar from "@/components/navigation/Navbar";
import LeftSideBar from "@/components/navigation/SideBars/LeftSideBar";
import RightSideBar from "@/components/navigation/SideBars/RightSideBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex justify-between w-full">
        <LeftSideBar />
        {children}
        <RightSideBar />
      </div>
    </main>
  );
};

export default RootLayout;
