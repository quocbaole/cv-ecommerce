import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
