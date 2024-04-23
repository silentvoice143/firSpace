import "./App.css";
import Login from "./components/Auth/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Clients from "./components/Clients/Clients";
import Groups from "./components/Groups/Groups";
import Template from "./components/Templates/Template";
import Calendar from "./components/Calendar/Calendar";
import Chats from "./components/Chats/Chats";
import Help from "./components/Helps/Help";
import Settings from "./components/Settings/Settings";
import Nonav from "./components/Routes/Nonav";
import Withnav from "./components/Routes/Withnav";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Nonav />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<Withnav />}>
            <Route
              path="/"
              element={<ProtectedRoute Component={Dashboard} />}
            />
            <Route
              path="/clients"
              element={<ProtectedRoute Component={Clients} />}
            />
            <Route
              path="/groups"
              element={<ProtectedRoute Component={Groups} />}
            />
            <Route
              path="/templates"
              element={<ProtectedRoute Component={Template} />}
            />
            <Route
              path="/calendar"
              element={<ProtectedRoute Component={Calendar} />}
            />
            <Route
              path="/chats"
              element={<ProtectedRoute Component={Chats} />}
            />
            <Route path="/help" element={<ProtectedRoute Component={Help} />} />
            <Route
              path="/settings"
              element={<ProtectedRoute Component={Settings} />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
