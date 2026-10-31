import Image from "next/image";
import StudentPortal from "../components/StudentPortal";

/*
    Written by: Phoebe Atuchina
    Date: 2026-10-30

    This is the main page layout, which contains the backdrop, the frame for the main content, and the placeholder
    for the main content. The main content is scrollable in both directions, in case of overflowing.

    Inputs: currently none
*/

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-orange-50">
      <div className="w-[80%] rounded-[10px] p-6 border border-orange-200 bg-white">
        <StudentPortal />
      </div>
    </main>
  );
}
