import { useState } from "react";

export default function StudentList() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
    </div>
  );
}
