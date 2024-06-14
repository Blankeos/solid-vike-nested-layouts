import { createSignal, FlowProps } from "solid-js";

export default function RootLayout(props: FlowProps) {
  return (
    <div>
      <nav style={{ background: "yellow" }}>
        <h1>Root Layout</h1>
        <a href="/">Home</a> <br />
        <a href="/dashboard">Dashboard</a> <br />
        <Counter />
      </nav>
      {props.children}
    </div>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Root Layout Counter: {count()}
    </button>
  );
}
