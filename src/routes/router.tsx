import { Routes, Route } from "react-router-dom";
import App from "../App";
import { Todo } from "../pages/Todo";
import { IBanking } from "../pages/IBanking";
import { Login } from "../pages/Login";
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
