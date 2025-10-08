import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";


function App() {
  const { state, signIn, signOut } = useAuthContext();

  const ProtectedRoute = ({ children }) => {
    if (!state.isAuthenticated) {
      signIn();
      return <p style={{ textAlign: "center", marginTop: "2rem" }}>Redirecting to login...</p>;
    }
    return children;
  };

  return (
    <>
      <Router>
        <Header />

        <nav style={{ margin: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
          {!state.isAuthenticated ? (
            <button
              onClick={signIn}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={signOut}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/page2"
            element={
              <ProtectedRoute>
                <Page2 />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

