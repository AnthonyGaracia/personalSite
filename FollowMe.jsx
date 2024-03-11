import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const FollowMe = () => {
  

  return (
    <div className="socialMedia">
    <h4>follow me</h4>
    <Link className="linkMe" to="https://www.linkedin.com/in/anthony-m-garcia-jr">linkedin</Link>
    <p>instagram</p>
    <p>tic tock</p>
    <Link className="linkMe" to="https://www.youtube.com/channel/UCJDBbfxL9IowHKoq3903gIw">you tube</Link>
    </div>
  )
}

export default FollowMe