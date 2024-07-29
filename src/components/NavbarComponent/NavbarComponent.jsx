import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextValue } from './style'
import { Checkbox } from 'antd'

const NavbarComponent = () => {
    const onChange=()=>{}
    const renderContent=(type,options)=>{
        switch(type){
            case 'text':
                return options.map((option)=>{  
                    return <WrapperTextValue>{option}</WrapperTextValue>
                })
            case 'checkbox':
                return(
                <Checkbox.Group style={{ width: '100%',display:'flex',flexDirection:'column',gap:'12px' }} onChange={onChange}>
                    {options.map((option)=>{  
                        return <Checkbox value={option.value}>{option.lable}</Checkbox>
                        })
                    }
                </Checkbox.Group>
                )
            default:
                return {}
                
        }
    }
  return (
    <div>
        <WrapperLableText>Lable</WrapperLableText>
        <WrapperContent>
            {renderContent('text',['macbook','laptop','pc'])}
            {renderContent('checkbox',[
                {value:'a',lable:'A'},
                {value:'b',lable:'B'},
                ])}

        </WrapperContent>
        
    </div>
  )
}

export default NavbarComponent