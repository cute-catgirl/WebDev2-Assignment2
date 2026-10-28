const pageStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  background: "#fff7ed",
};

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
    <main style={pageStyle}>
      <div style={mainStyle}><p>Placeholder</p></div>
    </main>
  );
}
