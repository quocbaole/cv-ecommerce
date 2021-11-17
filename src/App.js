import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import { Footer } from "./components";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products" exact element={<Products />} />
      </Routes>
      <Routes>
        <Route path="/services" exact element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
