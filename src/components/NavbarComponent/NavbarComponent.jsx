import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

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
            case 'star':
                return options.map((option)=>{  
                        return (
                            <Rate style={{fontSize:'12px'}} disabled defaultValue={option}/>
                        )
                    })
                    
            case 'price':
                return options.map((option)=>{  
                        return (
                            <div style={{borderRadius:'12px',backgroundColor:'grey',width:'fit-content',padding:'4px'}}>{option}</div>
                        )
                    })
                                   
            default:
                return {}
                
        }
    }
  return (
    <div style={{backgroundColor:'white'}}>
        <WrapperLableText>Lable</WrapperLableText>
        <WrapperContent>
            {renderContent('text',['macbook','laptop','pc'])}
            {renderContent('checkbox',[
                {value:'a',lable:'A'},
                {value:'b',lable:'B'},
                ])}

        </WrapperContent>
        <WrapperContent>
            {renderContent('star',[3,4,5])}

        </WrapperContent>
        <WrapperContent>
            {renderContent('price',['<100','<500','>1000'])}

        </WrapperContent>
    </div>
  )
}

export default NavbarComponent