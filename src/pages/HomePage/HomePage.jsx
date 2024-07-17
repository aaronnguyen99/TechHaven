import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.jfif'
import slider2 from '../../assets/images/slider2.jfif'
import CardComponent from '../../components/CardComponent/CardComponent'


const HomePage = () => {
  const arr =['TV','Macbook','PC']
  return (
    <>
    <div style={{padding:'0 120px'}}>
      <WrapperTypeProduct>      
          {arr.map((item)=>{
          return(
            <TypeProduct name={item} key={item}/>
          )
            
        })}
      </WrapperTypeProduct>
      </div>

      <div id="container" style={{backgroundColor:'#efefef',padding:'0 120px'}}>      
        <SliderComponent arrImages={[slider1,slider2]}/>
        <div style={{marginTop:'20px',display:'flex',alignItems:'center',gap:'20px'}}>
          <CardComponent/>

        </div>
    </div>
    </>
  )
}

export default HomePage