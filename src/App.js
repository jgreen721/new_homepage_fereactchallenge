import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, PathPlaceholder } from "./components";
import Navbar from "./components/Navbar/Navbar";
import Transition from "./Transition";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/new"
            element={
              <Transition>
                <PathPlaceholder />
              </Transition>
            }
          />
          <Route
            path="/popular"
            element={
              <Transition>
                <PathPlaceholder />
              </Transition>
            }
          />
          <Route
            path="/trending"
            element={
              <Transition>
                <PathPlaceholder />
              </Transition>
            }
          />
          <Route
            path="/categories"
            element={
              <Transition>
                <PathPlaceholder />
              </Transition>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
