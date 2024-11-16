import { Routes, Route } from "react-router-dom";
import App from "../App";
import Todo from "../Todo";
import { IBanking } from "../IBanking";
import { Login } from "../Login";
import { ProtectRoutes } from "./privateRoutes";

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<App />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectRoutes />}>
          <Route path="/ibanking" element={<IBanking />} />
        </Route>
      </Route>
    </Routes>
  );
}
