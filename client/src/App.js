import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingalPost from "./components/singlePost/SinglePost";

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route
          path="/register"
          element={currentUser ? <Homepage /> : <Register />}
        />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />

        <Route path="/post/:id" element={<Single />} />

        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
        <Route path="/singalpost" element={<SingalPost />} />
      </Routes>
    </Router>
  );
}

export default App;
