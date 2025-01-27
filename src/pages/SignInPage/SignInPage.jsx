import React from 'react'
import { WrapperContainernerLeft, WrapperContainernerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/login.jpg'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
const SignInPage = () => {
  const navigate=useNavigate()
  const handleNavigateSignup=()=>{
    navigate('/signup')
  }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#ccc',height:'100vh'}}>
      <div style={{display:'flex',width:'800px',height:'450px',borderRadius:'6px',background:'#fff'}}>
        <WrapperContainernerLeft>
          <h1>Hello</h1>
          <p>Sign in or create account</p>
          <InputForm style={{marginBottom:'10px'}} placeholder='abc@gmail.com'/>
          <InputForm placeholder='password'/>

          <ButtonComponent
                    border={false}
                    size={40}
                    textButton={'Sign in'}
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
                <p><WrapperTextLight>Forget password?</WrapperTextLight></p>
                <p>Haven't got an account? <WrapperTextLight onClick={handleNavigateSignup} style={{cursor:'pointer'}}>Create new account</WrapperTextLight></p>
        </WrapperContainernerLeft>
        <WrapperContainernerRight>
          <Image src={imageLogo} preview={false} height={450} width={400}/>
        </WrapperContainernerRight>
      </div>
    </div>
  )
}

export default SignInPage