import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full mx-auto'>
      <ul className='w-full ml-4 flex items-center justify-between font-semibold px-3 md:justify-center'>
        <li className=' md:mr-16 lg:mr-28'>
          <NavLink
            to='/' className=' focus:border-b-2 focus:border-black'
          >Home
          </NavLink>
        </li>
        <li className=' md:ml-16 mr-4 lg:ml-28'>
          <NavLink to='/legendaries' className=' focus:border-b-2 focus:border-black'>Legendaries</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
