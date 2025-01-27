import React from 'react'
import { WrapperContainernerLeft, WrapperContainernerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/login.jpg'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const navigate=useNavigate()
    const handleNavigateSignin=()=>{
      navigate('/signin')
    }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#ccc',height:'100vh'}}>
      <div style={{display:'flex',width:'800px',height:'450px',borderRadius:'6px',background:'#fff'}}>
        <WrapperContainernerLeft>
          <h1>Hello</h1>
          <p>Sign in or create account</p>
          <InputForm style={{marginBottom:'10px'}} placeholder='abc@gmail.com'/>
          <InputForm style={{marginBottom:'10px'}} placeholder='password'/>
          <InputForm placeholder='confirm password'/>

          <ButtonComponent
                    border={false}
                    size={40}
                    textButton={'Sign up'}
                    style={{
                        background:'rgb(255,57,69)',
                        height:'48px',
                        width:'220px',
                        border:'none',
                        borderRadius:'4px',
                        color:'#fff',
                        fontSize:'15px',
                        fontWeight:'700',
                        margin:'26px 0 10px'
                    }}
                >
                </ButtonComponent>
                <p>Already got an account <WrapperTextLight onClick={handleNavigateSignin} style={{cursor:'pointer'}}>Sign in</WrapperTextLight></p>
        </WrapperContainernerLeft>
        <WrapperContainernerRight>
          <Image src={imageLogo} preview={false} height={450} width={400}/>
        </WrapperContainernerRight>
      </div>
    </div>
  )
}

export default SignUpPage