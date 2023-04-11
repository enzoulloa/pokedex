import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id='main' className=' mt-24 min-h-screen '>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
