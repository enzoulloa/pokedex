import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-[70%]'>
      <ul className='w-full ml-4 flex items-center justify-between font-semibold'>
        <li>
          <NavLink
            to='/' className=' focus:border-b-2 focus:border-black'
          >Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/legendaries' className=' focus:border-b-2 focus:border-black'>Legendaries</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
