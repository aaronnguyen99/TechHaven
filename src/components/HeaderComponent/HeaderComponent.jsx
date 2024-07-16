import React from 'react'
import {Row,Col} from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './styles'
import Search from 'antd/es/transfer/search'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
      <Col span={6}>
        <WrapperTextHeader>TechHaven</WrapperTextHeader>
      </Col>
      <Col span={12}>
        <Search
        placeholder="input search text"
        // allowClear
        enterButton="Search"
        size="large"
        // onSearch={onSearch}
    /></Col>
      <Col span={6} style={{  display:'flex',gap:'20px'}}>
      <WrapperHeaderAccount>
          <div >
              <UserOutlined style={{  fontSize:'30px'}}/>
          </div>
          <div style={{  display:'grid'}}>

              <WrapperTextHeaderSmall>Sign in/Sign up</WrapperTextHeaderSmall>
              <WrapperTextHeaderSmall>
                  Account
                  <CaretDownOutlined/>
              </WrapperTextHeaderSmall>   
          </div>
        </WrapperHeaderAccount>
        <div>
          <ShoppingCartOutlined style={{  fontSize:'30px',color:'white'}}/>
          <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
        </div>
      </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent