import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import GroupDashboard from "./pages/GroupDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/group" element={<GroupDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;