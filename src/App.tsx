import { Route, Routes } from "react-router-dom";
import Todos from "./components/Todos";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}
