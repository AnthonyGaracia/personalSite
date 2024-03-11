import { Link, useMatch,useResolvedPath } from 'react-router-dom'
import './App.css'



const NavBar = () => {
 

  return (
      <nav className="nav">
          <Link to="/" className="site_title">Anthony Garcia</Link>
          <ul>
             <CustomLink to="/about">About</CustomLink>
             <CustomLink to="/contact">Contact</CustomLink>
          </ul>
      </nav>
       )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
      
        <li className={isActive ? "active" : "" }>
         <Link to={to} {...props}>
          {children}
         </Link>
         </li>
       )  
    
}


export default NavBar