import { BrowserRouter, Outlet } from "react-router-dom";
import { Router } from "./Router";

function App() {

  return (
    <BrowserRouter>
      <Router/>
      <Outlet />
    </BrowserRouter>
  )
}

export default App
