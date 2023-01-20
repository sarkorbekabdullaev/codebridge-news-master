import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import ArticlePage from "./components/article-page/article-page";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
