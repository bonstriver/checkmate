import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { useNavigate} from 'react-router-dom'

export function NavBar() {
    const [click] = useState(false)
    const [button, setButton] = useState(true)

    const history = useNavigate()

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    
    return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                 <div className='nav-title'>CHECKMATE</div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Checkers (coming soon)
                        </Link>
                    </li>
                </ul>
                {button && <a className='a-btn' onClick={() => history('/game')}>PLAY</a>}
            </div>
        </nav>
    </>
    )
}

export default NavBar