import React, { Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProduct } from './style'

const TypeProductPage = () => {
    const onChange=()=>{}
  return (
        <div style={{width:'100%',background:'#efefef'}}>
            <div style={{margin:'0 auto',width:'1300px'}}>
        <Row style={{flexWrap:'nowrap',paddingTop:'10px'}}>
            <WrapperNavbar span={4}>
                <NavbarComponent/>
            </WrapperNavbar>
            <Col span={20}>
                <WrapperProduct>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </WrapperProduct>     
                <Pagination defaultCurrent={1} total={10} onChange={onChange} style={{textAlign:'center',marginTop:'10px',justifyContent:'center'}}/>
            </Col>
        </Row>
        </div>
        </div>
  )
}

export default TypeProductPage