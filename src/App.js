import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTable from "./components/ViewTable";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/view" element={<ViewTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;