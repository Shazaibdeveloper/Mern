import img from '../logo.png'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
     <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
  <Link class="navbar-brand" to="/"> <img src={img}/> </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/home">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Register">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/signin">Signin</Link>
      </li>
    </ul>
  </div>
</nav>
     </>
  )
}

export default Navbar