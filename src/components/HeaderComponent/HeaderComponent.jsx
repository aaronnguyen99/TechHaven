import React from 'react'
import {Row,Col, Badge} from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './styles'
import Search from 'antd/es/transfer/search'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
const HeaderComponent = () => {
  const navigate=useNavigate()
  const handleNavigateLogin=()=>{
    navigate('/signin')
  }
  return (
    <div>
      <WrapperHeader >
      <Col span={6}>
        <WrapperTextHeader>TechHaven</WrapperTextHeader>
      </Col>
      <Col span={12}>
        <ButtonInputSearch
        size='large'
        textButton='Search'
        placeholder="input search text"
        /></Col>
      <Col span={6} style={{  display:'flex',gap:'20px',alignItems:'center'}}>
      <WrapperHeaderAccount>
          <div >
              <UserOutlined style={{  fontSize:'30px'}}/>
          </div>
          <div onClick={handleNavigateLogin} style={{cursor:'pointer',display:'grid'}} >

              <WrapperTextHeaderSmall>Sign in/Sign up</WrapperTextHeaderSmall>
              <WrapperTextHeaderSmall>
                  Account
                  <CaretDownOutlined/>
              </WrapperTextHeaderSmall>   
          </div>
        </WrapperHeaderAccount>
        <div>
          <Badge count={4} size='small'>
            <ShoppingCartOutlined style={{  fontSize:'30px',color:'white'}}/>
          </Badge>
          <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
        </div>
      </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent