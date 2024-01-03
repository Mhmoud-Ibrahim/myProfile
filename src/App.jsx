
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Picture from './components/Picture'


function App() {
 const routers =createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'myProjects',element:<MyProjects/>},
    {path:'contact',element:<Contact/>},
    {path:'picture',element:<Picture/>},
    {path:'*',element:<NotFound/>},
  ]}
 ])
  return <RouterProvider router={routers} ></RouterProvider>
}

export default App
