import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/index'
import MainBoard from './components/Dashboard/MainBoard'
import Order from "./components/Order"
import Product from "./components/Product"
import Profile from "./components/Profile"
import Sales from "./components/SalesReport"
import Sidebar from "./components/Sidebar"
import Error from './components/Error'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar= ()=> setIsOpen(!isOpen)

  return (
    <div className='bg-primary1'>
      <div className='container  bg-primary1 flex mx-auto min-h-screen'>
        <div className={`absolute top-0 transition-all duration-200 ${isOpen ?  "left-[0%]" : "left-[-100%]"} md:static`}>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </div>

        <Routes>
            <Route path='/' element={<MainBoard toggleSidebar={toggleSidebar}/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='profile'  element={<Profile/>}/>
                <Route path='order' element={<Order/>}/>
                <Route path='product'  element={<Product/>}/>
                <Route path='sales' element={<Sales/>}/>
                <Route path='*' element={<Error/>}/>
            </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
