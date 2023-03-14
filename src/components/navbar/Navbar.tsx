import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import list from "./list.svg";
import close from "./close.svg";
import "./navbar.css";
type propsType = {
  limit: number;
  setCategory: (input: CategoriesTypes) => void;
  search: [string, Dispatch<SetStateAction<string>>];
};
type CategoriesTypes = "" | "mug" | "decoupage" | "key" | "car";
function Navbar(props: propsType) {
  const [navBG, setNavBG] = useState(0);
  const [space, setSpace] = useState(0);
  const [search, setSearch] = props.search;
  const [linksVisible, setLinksVisible] = useState(false);
  const location = useLocation();
  function handleNav() {
    let ratio = window.scrollY / props.limit;
    if (props.limit === 0) {
      ratio = 1;
    }
    setNavBG(ratio);
    if (ratio * 3 < 1) {
      setSpace(3 - ratio * 9);
    } else {
      setSpace(0);
    }
  }
  useEffect(() => {
    handleNav();
    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  }, [props.limit]);
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: `rgba(0,0,0,${navBG * 1.25})`,
        marginTop: `${space}rem`,
        paddingTop: `${2 - 3 * navBG > 1 ? 2 - 3 * navBG : 1}rem`,
        paddingBottom: `${2 - 3 * navBG > 1 ? 2 - 3 * navBG : 1}rem`,
      }}
    >
      <ul className="left-side">
        <NavLink to={"/"} className="nav-item">
          <h3 className="nav-item">Shery Art Craft</h3>
        </NavLink>
      </ul>
      {/* Search Bar only visible on store page view */}
      {location.pathname.includes("/store") ? (
        <ul className="middle">
          <input
            className="nav-item"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="What are you searching for?"
          />
        </ul>
      ) : null}
      <ul
        className={"right-side " + (linksVisible ? "" : "d-none")}
        onClick={() => {
          setLinksVisible(false);
        }}
      >
        {/* Close button only visible on mobile view */}
        <img
          src={close}
          alt="close"
          className="close-button pc-none"
          onClick={() => {
            setLinksVisible(false);
          }}
        />
        {/* Links Section */}
        <NavLink
          to={"/"}
          onClick={() => {
            setTimeout(() => {
              document.getElementById("about")?.scrollIntoView();
            }, 0);
          }}
          className="nav-item"
        >
          About
        </NavLink>
        <NavLink
          to={"/"}
          onClick={() => {
            setTimeout(() => {
              document.getElementById("artists")?.scrollIntoView();
            }, 0);
          }}
          className="nav-item"
        >
          Artists
        </NavLink>
        {/* <NavLink
          to={"/"}
          onClick={() => {
            setTimeout(() => {
              document.getElementById("contact")?.scrollIntoView();
            }, 0);
          }}
          className="nav-item"
        >
          Contact
        </NavLink> */}
        <NavLink
          to={"/store"}
          className="nav-item"
          onClick={() => {
            props.setCategory("");
          }}
        >
          Store
        </NavLink>
      </ul>
      {/* Mobile view open navbar button */}
      <ul className="open-nav-icon pc-none">
        <img
          src={list}
          alt="openList"
          onClick={() => {
            setLinksVisible(!linksVisible);
          }}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
