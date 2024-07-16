import React, { Fragment } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {routes} from './routes'
import HomePage from './pages/HomePage/HomePage'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route)=>{
            const Page=route.page
            const Layout=route.isShowHeader ? DefaultComponent:Fragment
            return(
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page/>
                  </Layout>}>

              </Route>
            )
          })}

        </Routes>
      </Router>
    </div>
  )
}