import "./App.css";
import { Route, Routes } from "react-router-dom";
import Artists from "./components/Artists/Artists";
import About from "./components/about/About";
import Categories from "./components/categories/Categories";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Store from "./components/store/Store";
import { useState } from "react";

function App() {
  // const AppRef = useRef<HTMLInputElement>(null);
  const [navTop, setNavTop] = useState(100);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<
    "" | "mug" | "decoupage" | "key" | "car"
  >("");
  return (
    <div className="App">
      <Navbar
        limit={navTop}
        search={[search, setSearch]}
        setCategory={setCategory}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <About setNav={setNavTop} />
              <Categories setCategory={setCategory} />
              <Artists />
            </>
          }
        />
        <Route
          path="/store/*"
          element={
            <Store setNav={setNavTop} search={search} category={category} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
