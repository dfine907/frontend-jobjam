import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobjam" className="logo" />
      </nav>
      <div className="container page">

        <div className="info">

          <h1>Job <span>tracking</span> App </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error unde quia molestiae corrupti ab consequatur adipisci tempore enim, dicta voluptatem id blanditiis, distinctio, inventore nam pariatur ullam quod voluptate quis.
          </p>
          <Link to="/register" className="btn register-link">Register</Link>
          <Link to="/login" className="btn">Login / Demo User</Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
