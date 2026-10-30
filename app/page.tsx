/*
    Written by: Phoebe Atuchina
    Date: 2026-10-30

    This is the main page layout, which contains the backdrop, the frame for the main content, and the placeholder
    for the main content. The main content is scrollable in both directions, in case of overflowing.

    Inputs: currently none
*/

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center overflow-hidden bg-orange-50">
      <div className="h-[70%] w-[60%] box-border overflow-y-auto rounded-[10px] border border-orange-200 bg-white p-6">
        <p>Placeholder</p>
      </div>
    </main>
  );
}
