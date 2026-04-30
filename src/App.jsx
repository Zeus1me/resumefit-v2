import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ minHeight: "100vh", background: "#08090E", color: "#E4E8F1", fontFamily: "system-ui", padding: 40 }}>
      <h1>ResumeFit Deploy Test</h1>
      <p>If you see this, React is working.</p>
      <button onClick={() => setCount(c => c + 1)} style={{ padding: "10px 20px", background: "#4F8EF7", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 16 }}>
        Clicked {count} times
      </button>
    </div>
  );
}
