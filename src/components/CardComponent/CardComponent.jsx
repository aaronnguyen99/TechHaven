import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperPriceText, WrapperReportText, WrapperStyleCard } from './styles'
import {
    StarFilled
  } from '@ant-design/icons';
const CardComponent = () => {
  return (
    <WrapperStyleCard
    hoverable
    bodyStyle={{padding:'10px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <StyleNameProduct>Iphone</StyleNameProduct>
    <WrapperReportText>
        <span>4.5<StarFilled  style={{color:'yellow'}} /></span>
        <span> | Sell over 100+</span>
    </WrapperReportText>
    <WrapperPriceText>1000CAD</WrapperPriceText>
  </WrapperStyleCard>
  )
}

export default CardComponent