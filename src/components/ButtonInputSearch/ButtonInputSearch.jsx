import { Input ,Button} from 'antd'
import React from 'react'
import {
    SearchOutlined
  } from '@ant-design/icons'
const ButtonInputSearch = (props) => {
    const {size,placeholder,textButton}=props
  return (
    <div style={{  display:'flex'}}>
        <Input 
            size={size} 
            placeholder={placeholder} 
            style={{background:'white',borderRadius: '0',borderStyle: 'none'}} />
        <Button 
            size={size} 
            icon={<SearchOutlined />}  
            style={{borderRadius: '0',borderStyle: 'none',background:'rgb(13,92,182)',color:'white'}}>
            <span>{textButton}</span>    
        </Button>
    </div>
  )
}

export default ButtonInputSearch