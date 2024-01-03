
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Picture from './components/Picture'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
 const routers =createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element: <ProtectedRoute><Home/></ProtectedRoute> },
    {path:'about',element: <ProtectedRoute><About/></ProtectedRoute> },
    {path:'myProjects',element:<ProtectedRoute><MyProjects/></ProtectedRoute> },
    {path:'contact',element: <ProtectedRoute><Contact/></ProtectedRoute>},
    {path:'picture',element: <ProtectedRoute><Picture/></ProtectedRoute>},
    {path:'*',element:<NotFound/>},
  ]}
 ])
  return <RouterProvider router={routers} ></RouterProvider>
}

export default App
