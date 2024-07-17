import { Input ,Button} from 'antd'
import React from 'react'
import {
    SearchOutlined
  } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
const ButtonInputSearch = (props) => {
    const {size,placeholder,textButton}=props
  return (
    <div style={{  display:'flex'}}>
        <InputComponent 
            size={size} 
            placeholder={placeholder} 
            style={{background:'white',borderRadius: '0',borderStyle: 'none'}} />
        <ButtonComponent 
            size={size} 
            icon={<SearchOutlined />}  
            style={{borderRadius: '0',borderStyle: 'none',background:'rgb(13,92,182)',color:'white'}}
            textButton={textButton}
            >
        </ButtonComponent>
    </div>
  )
}

export default ButtonInputSearch