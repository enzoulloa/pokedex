import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import Pokedex from '../pages/Pokedex'
import Details from '../pages/Details'
import Legendaries from '../pages/Legendaries'
import NotFound from '../pages/NotFound'

function Router () {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Pokedex />} />
            <Route path='/:id' element={<Details />} />
            <Route exact path='/' element={<Navigate to='/rotomdex' />} />
            <Route exact path='/legendaries' element={<Legendaries />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default Router
