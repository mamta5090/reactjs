import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/Header/Header.jsx'
import Footer from './component/Footer/Footer.jsx'
import Layout from './Layout.jsx'
import {Route, routerProvider, createBrowserRouter,createRoutedFromElements, RouterProvider} from 'react-router-dom'

const router=createBrowserRouter(
  createRoutedFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>,)
