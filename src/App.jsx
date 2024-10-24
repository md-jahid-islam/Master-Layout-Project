
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Help from './Pages/Help'
import Contact from './Pages/Contact'
import LayoutOne from './Layouts/LayoutOne'
import LayoutTow from './Layouts/LayoutTow'
import Blog from './Pages/Blog'
import ProductSalses from './Pages/ProductSalses'
import SalsesMan from './Pages/SalsesMan'
import Services from './Pages/Services'

function App() {
  const mainroute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>}>
        <Route index element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/help' element = {<Help/>} />
        <Route path='/contact' element = {<Contact/>} />
        </Route>

        <Route path='/LayoutTow' element ={<LayoutTow/>} >
        <Route index element ={<Blog/>}/>
        <Route path='/LayoutTow/ProductSalses' element ={<ProductSalses/>}/>
        <Route path='/LayoutTow/SalsesMan' element ={<SalsesMan/>}/>
        <Route path='/LayoutTow/Services' element ={<Services/>}/>


        </Route>

      </Route>
    )
  )

  return (
    <>
   <RouterProvider router={mainroute}/>     
    </>
  )
}

export default App
