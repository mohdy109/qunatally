import React from 'react'
import "../assets/css/navbar.css"
<<<<<<< HEAD
import Group10 from "../assets/images/Group10.png"
=======
import Main from "../assets/images/Main.svg"
>>>>>>> dbdd570... last commit

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
<<<<<<< HEAD
  <a class="navbar-brand" href="/"><img src = {Group10} className='logo' /></a>
=======
  <a class="navbar-brand" href="/"><img src = {Main} className='logo' /></a>
>>>>>>> dbdd570... last commit
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">About <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/how-works">How it Works <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/use-cases">Use Cases <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/enterprise-application">Enterprise Application <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/team">Team <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar
