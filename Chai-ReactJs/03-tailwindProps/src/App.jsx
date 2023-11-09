import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card name="Umar" study="BSSE" />
      <br />
      <br />
      <Card name="Faisal" />
    </>
  );
}

export default App;
