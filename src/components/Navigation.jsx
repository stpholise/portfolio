 import { Link } from 'react-router-dom'
 import { PropTypes } from 'prop-types'
//  import { useEffect } from 'react'
 import CloseIcon from '/icons/closeLight.svg'
 import 'animate.css'

const Navigation = ({ setShowMenu , showMenu = false  }) => {
  const pages = [
    {value: '/about', label: 'About'},
    {value: '/projects', label:'Projects'},
    {value: '/skills', label:'Skills'},
    // {value: '/resume', label:'Resume'},
    // {value: '/contact', label:'Contact'}
  ]

  

  return (
    <> 
      <nav className={'navigation' + (showMenu ? ' open animate__animated animate__bounceInDown' : '')}>
        <button  className="closeMenuBtn" onClick={() => setShowMenu(false)}>
          <img src={CloseIcon}    alt="" />
        </button>
        {
          pages.map((item, index)=> (
            <Link key={index} to={item.value} className={'navItem'}>
              {item.label }
            </Link>
          ))
        }
      </nav>
      
    </>
  )
}

Navigation.propTypes = {
  setShowMenu: PropTypes.function,
  showMenu: PropTypes.bool
}
export default Navigation