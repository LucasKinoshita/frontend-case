import { Routes, Route } from "react-router-dom";
import App from "./App";
import Todo from "./Todo";
import { IBanking } from "./IBanking";

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<App />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/ibanking" element={<IBanking />} />
      </Route>
    </Routes>
  );
}
