import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.jfif'
import slider2 from '../../assets/images/slider2.jfif'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'


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
        <div className='body' style={{width:'100%',backgroundColor:'#efefef'}}>
      <div id="container" style={{padding:'0 120px',height:'1500px',margin:'0 auto'}}>      
        <SliderComponent arrImages={[slider1,slider2]}/>
        <WrapperProduct>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
        </WrapperProduct>
        <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'10px'}}>
          <WrapperButtonMore textButton={'more'} type='outline' style={{
            border:'1px solid rgb(11,116,229)',
            color:'rgb(11,116,229)',
            width:'240px',
            height:'35px',
            borderRadius:'4px'
          }}
          styleTextButton={{fontWeight:500}}/>
        </div>
        <div>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default HomePage