import { createSignal, FlowProps } from "solid-js";

export default function DashboardLayout(props: FlowProps) {
  return (
    <>
      <nav style={{ background: "lightgreen" }}>
        <h1>Dashboard Layout</h1>
        <a href="/">Home</a>
        <br />
        <a href="/dashboard">Dashboard</a>
        <br />
        <a href="/dashboard/settings">Settings</a>
        <br />
        <Counter />
      </nav>
      {props.children}
    </>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Dashboard Layout Counter: {count()}
    </button>
  );
}
