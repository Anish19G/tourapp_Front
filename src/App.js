import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the child routes */}
      <Footer />
    </>
  );
}

export default App;