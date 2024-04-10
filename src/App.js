import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./MainLayouts/Layout";
import Profile from "./Component/Profile";
import Subscription from "./Component/Subscription";
import Login from "./Component/Login";
import { ToastContainer } from "react-toastify";
import YourComponent from "./Component/YourComponent";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
        <Route path="/yourcomponent" element={< YourComponent/>} />
        <Route path="/" element={< Login/>} />
          <Route path="/subscription" element={< Subscription/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile />} />
          </Routes>
          <ToastContainer />
      </Layout>
    </div>
  );
}

export default App;
