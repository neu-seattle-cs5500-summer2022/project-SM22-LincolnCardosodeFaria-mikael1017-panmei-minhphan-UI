import "../style/App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

import ClientPage from "./ClientPage";
import AdminPage from "./AdminPage";
import EditDietPage from "./EditDietPage";
import DietLargePage from "../components/Diet-Large";
import EditClientPage from "../containers/EditClientPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path={"client/:id"} element={<ClientPage />} />

        <Route path={"admin/:id"} element={<AdminPage />} />
        <Route path={"user/:id"} element={<EditClientPage />} />
        <Route path={"user/diet/:id"} element={<EditDietPage />} />
        <Route path={"client/:id/diet"} element={<DietLargePage />} />
      </Routes>
    </div>
  );
}

export default App;
