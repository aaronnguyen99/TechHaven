import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {routes} from './routes'
import HomePage from './pages/HomePage/HomePage'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'


export default function App() {
  return (
    <div>
      <HeaderComponent/>
      <Router>
        <Routes>
          {routes.map((route)=>{
            const Page=route.page
            return(
              <Route path={route.path} element={<Page/>}></Route>
            )
          })}

        </Routes>
      </Router>
    </div>
  )
}