import React, {  useState } from 'react'
import Menu from '../assets/img/Menu.svg'
import Logo from '../assets/img/Logo.svg'
import { NavLink } from 'react-router-dom'
import Vector from '../assets/img/Vector.png'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsBasket3Fill } from "react-icons/bs";
import { FaBellConcierge } from "react-icons/fa6";
  
const Navbar = () => {
  let[burger,setBurger]=useState(false)
return (
  <nav className='font pt-[33px] w-full bg-white'>
   <div className="container">
      <div className='w-full flex items-center justify-between sm:justify-start sm:gap-[73.4px] md:gap-[103.12px] border-b pb-[30px]'>
          <img className='sm:w-[80px] sm:h-[30.09px]' src={Logo} alt="alt" />
          <button onClick={()=>setBurger(!burger)} className=' sm:hidden'>

          <img className='bx-menu text-[45px] font-normal' src={Menu} alt="" />
          </button>
          <div className='hidden  sm:flex justify-between items-center w-[1022px]'>
              <ul className='flex w-[115.03px] justify-between lg:w-[162.49px]'>
                  <NavLink to="/" className=' font-medium text-[12.68px] text-[#606060] hover:text-[#6C5FBC] lg:text-[17.83px]'>Home</NavLink>
                  <NavLink to="/dishes" className=' font-medium text-[12.68px] text-[#606060] hover:text-[#6C5FBC] lg:text-[17.83px]'>Dishes</NavLink>
              </ul>
                
              <div className='flex md:w-[208.74px] w-[200px] justify-between'>
                <NavLink to="/basket">
                 

                  <NavLink to="/basket">

<button className='w-[73.03px] h-[45.36px] text-[12.68px] font-semibold rounded-[12.68px] text-[#606060] hover:bg-[#6C5FBC] hover:text-white'><svg className='' width="70" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5621 15.6379H7.27891L8.09648 13.9727L21.6809 13.948C22.1402 13.948 22.534 13.6199 22.616 13.166L24.4973 2.63594C24.5465 2.35977 24.4727 2.07539 24.2922 1.85938C24.203 1.75306 24.0917 1.66743 23.9661 1.60841C23.8405 1.54939 23.7036 1.51839 23.5648 1.51758L6.28359 1.46016L6.13594 0.765625C6.04297 0.322656 5.64375 0 5.18984 0H0.965234C0.709238 0 0.463727 0.101694 0.282711 0.282711C0.101694 0.463727 0 0.709238 0 0.965235C0 1.22123 0.101694 1.46674 0.282711 1.64776C0.463727 1.82877 0.709238 1.93047 0.965234 1.93047H4.40781L5.05312 4.99844L6.6418 12.6902L4.59648 16.0289C4.49027 16.1723 4.42629 16.3425 4.4118 16.5203C4.3973 16.6981 4.43286 16.8765 4.51445 17.0352C4.67852 17.3605 5.00937 17.5656 5.37578 17.5656H7.09297C6.72689 18.0519 6.52915 18.6441 6.52969 19.2527C6.52969 20.8004 7.7875 22.0582 9.33516 22.0582C10.8828 22.0582 12.1406 20.8004 12.1406 19.2527C12.1406 18.643 11.9383 18.0496 11.5773 17.5656H15.9824C15.6163 18.0519 15.4186 18.6441 15.4191 19.2527C15.4191 20.8004 16.677 22.0582 18.2246 22.0582C19.7723 22.0582 21.0301 20.8004 21.0301 19.2527C21.0301 18.643 20.8277 18.0496 20.4668 17.5656H23.5648C24.0953 17.5656 24.5301 17.1336 24.5301 16.6004C24.5285 16.3447 24.4258 16.0999 24.2445 15.9196C24.0631 15.7393 23.8178 15.638 23.5621 15.6379ZM6.68555 3.36328L22.4301 3.41523L20.8879 12.0504L8.52031 12.0723L6.68555 3.36328ZM9.33516 20.1168C8.85937 20.1168 8.47109 19.7285 8.47109 19.2527C8.47109 18.777 8.85937 18.3887 9.33516 18.3887C9.81094 18.3887 10.1992 18.777 10.1992 19.2527C10.1992 19.4819 10.1082 19.7017 9.94614 19.8637C9.7841 20.0258 9.56432 20.1168 9.33516 20.1168ZM18.2246 20.1168C17.7488 20.1168 17.3605 19.7285 17.3605 19.2527C17.3605 18.777 17.7488 18.3887 18.2246 18.3887C18.7004 18.3887 19.0887 18.777 19.0887 19.2527C19.0887 19.4819 18.9976 19.7017 18.8356 19.8637C18.6735 20.0258 18.4538 20.1168 18.2246 20.1168Z" fill="#606060"/>
</svg></button>
  </NavLink>
                </NavLink>
                  <div className='flex justify-between w-[165.41px] '>
                    <NavLink to="/login">

                  <button className='w-[73.03px] h-[45.36px] text-[12.68px] font-semibold rounded-[12.68px] text-[#606060] hover:bg-[#6C5FBC] hover:text-white'>Login</button>
                    </NavLink>
                    <NavLink to="/sigin">

                  <button className='pl-[15.02px] pr-[15.02px] text-[12.68px] font-semibold  w-[106.03px] h-[45.36px] rounded-[12.68px] text-[#606060] hover:bg-[#6C5FBC] hover:text-white'>Sigin Up</button>
                    </NavLink>
                  </div>
              </div>
          </div>
      </div>
  </div> 
  <div className={burger?'isopen sm:hidden p-3':'close sm:hidden'}>
      <div className='flex flex-col gap-4 w-full '>
      <NavLink to="/basket" className='open flex w-full justify-between text-white border-b'>
          <p>Basket </p>
          <button className=''><BsBasket3Fill className='w-[60px] h-[22px] '/></button>
      </NavLink>
      <NavLink to="/" className='open flex w-full justify-between text-white border-b'>
          <p>Home </p>
          <button className=''><SiHomeassistantcommunitystore className='w-[60px] h-[22px] '/></button>
      </NavLink>
      <NavLink to="/dishes" className='open flex w-full justify-between text-white border-b'>
          <p>Dishes </p>
          <button className=''><FaBellConcierge className='w-[60px] h-[22px]'/></button>
      </NavLink>
      <NavLink to="/login">
      <button className='text-white bg-[#344e4e] w-[150px] h-[45px] rounded-lg hover:bg-gray-200 hover:text-blue-600'>Sigin Up</button>
      </NavLink>
      <NavLink to="/sigin">
      <button className='text-white bg-[#344e4e] h-[45px] w-[150px]  rounded-lg hover:bg-gray-200 hover:text-blue-600'>Login</button>
      </NavLink>
      </div>
  </div>
  </nav>
)
}


export default Navbar








