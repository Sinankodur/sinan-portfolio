import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className='container'>
        <nav>
          <ul>
            <li className='nav-link'><span>Home</span></li>
            <li className='nav-link'><span>About</span></li>
            <li className='nav-link'>Service</li>
            <li className='logo'><span>SK</span> SINAN</li>
            <li className='nav-link'>Resume</li>
            <li className='nav-link'>Project</li>
            <li className='nav-link'>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavBar