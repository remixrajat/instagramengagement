import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-child1">
        <p style={{ fontSize: "2rem", margin: "10px", color: "#3ff2d7" }}>
          <strong>Whizco</strong>
        </p>
      </div>
      <div className="Navbar-child">
        <p style={{ fontSize: "1.2rem" }}>
          <strong>
            <Link style={{ textDecoration: "none", color: "gray" }} to="./home">
              Home
            </Link>
          </strong>
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          <strong>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="./creators"
            >
              Creators
            </Link>
          </strong>
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          <strong>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="./campaign"
            >
              My Campaign
            </Link>
          </strong>
        </p>
        <div className="Profile">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://avatarfiles.alphacoders.com/117/117402.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
