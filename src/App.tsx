import { Route, Routes } from "react-router";
import "./App.css";
import IndexPage from "@/pages/index-page";
import SiginInPage from "@/pages/sign-in-page";
import SiginUpPage from "@/pages/sign-up-page";
import { Outlet } from "react-router";
import CounterPage from "@/pages/counter-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/counter" element={<CounterPage />}></Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SiginInPage />}></Route>
          <Route path="/sign-up" element={<SiginUpPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
