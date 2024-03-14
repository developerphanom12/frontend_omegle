import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./MainLayouts/Layout";
import Profile from "./Component/Profile";
import Subscription from "./Component/Subscription";
import Login from "./Component/Login";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
