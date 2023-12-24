import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout />
      <ToastContainer />
    </>
  );
}

export default App;
