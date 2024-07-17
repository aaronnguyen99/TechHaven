import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size,style,textButton,...rests}) => {
  return (
    <Button 
        size={size} 
        {...rests}  
        style={style}>
        <span>{textButton}</span>
    </Button>
  )
}

export default ButtonComponent