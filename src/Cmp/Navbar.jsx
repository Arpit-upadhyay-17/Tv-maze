import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </nav>
  )
}

export default Navbar