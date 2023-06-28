import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'v', 'a', 'n']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    
    // That type of code didnt work for me...
    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])


    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => clearTimeout(timeout);
      }, []);
          
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray}
                    idx={18}
                    />                

                </h1>
                <h2>Software Developer: JavaScript | React | Python | Flask</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="square-spin" />
        </>
    )
}

export default Home