import axios from 'axios'
import React, { Fragment, useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {routes} from './routes'
import HomePage from './pages/HomePage/HomePage'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import 'antd/dist/reset.css';
import { useQuery } from '@tanstack/react-query'

export default function App() {

  // useEffect(()=>{
  //   fetchApi()
  // },[])

  const fetchApi=async()=>{
    const res=await axios.get(`${process.env.REACT_APP_API_KEY}/product/get-all`)
    return res.data
  }
    const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  console.log('query',query)
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