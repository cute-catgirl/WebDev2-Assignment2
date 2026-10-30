const mainStyle: React.CSSProperties={
  width: "60%",
  height: "70%",
  background: "white",
  padding: "1.5rem",
  boxSizing: "border-box",
  overflowY: "auto",
  borderRadius: "10px",
  borderStyle: "solid",
  borderColor: "#ffd6a7",
  borderWidth: "1px",
};

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center overflow-hidden bg-[#fff7ed]">
      <div style={mainStyle}><p>Placeholder</p></div>
    </main>
  );
}
