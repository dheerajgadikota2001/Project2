import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Home from "@/pages/Home";
import { LegalPage } from "@/pages/LegalPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/privacy-policy"
            element={
              <LegalPage title="Privacy Policy" testId="privacy-policy-page" />
            }
          />
          <Route
            path="/cookie-policy"
            element={
              <LegalPage title="Cookie Policy" testId="cookie-policy-page" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
