import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navcontainer'>
        <div className='navcol'>
          <span className='branding'><h4><a className='menulink' href="/">API GENERATOR</a></h4></span>
          <ul className='menulist'>
            <li className='menuitem'><a className='menulink' href="/project">Project</a></li>
            <li className='menuitem'><a className='menulink' href="/model">Model</a></li>
            <li className='menuitem'><a className='menulink' href="/view">View</a></li>
            <li className='menuitem'><a className='menulink' href="/controller">Controller</a></li>
          </ul>
        </div>
        <div className='navcol'>

        </div>
      </div>
    </nav>
  )
}

export default NavBar
