import { Row,Col, Image } from 'antd'
import React from 'react'
import imageProduct2 from '../../assets/images/book1.jfif'
import imageProduct1 from '../../assets/images/book2.jpg'
import { WrapperStyleImageSmall,WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceItem, WrapperPriceTextItem, WrapperAddressItem, WrapperQuantityProduct, WrapperButtonQuantityProduct, WrapperInputNumber } from './style'
import {
    StarFilled,
    PlusOutlined,
    MinusOutlined
  } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () => {
    const onChange=()=>{};
  return (
    
    <Row style={{padding:'16px',background:'#fff'}}>
        <Col span={10} style={{borderRight:'1px solid #e5e5e5',paddingRight:'8px'}}>
            <Image src={imageProduct1} alt="image product" preview='false'/>
            <Row style={{paddingTop:'10px',justifyContent:'space-between'}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProduct2} alt="image product" preview='false'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProduct2} alt="image product" preview='false'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProduct2} alt="image product" preview='false'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProduct2} alt="image product" preview='false'/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProduct2} alt="image product" preview='false'/>
                </WrapperStyleColImage>
            </Row>
        </Col>    
        <Col span={14} style={{paddingLeft:'10px'}}>
            <WrapperStyleNameProduct>The sun always rise</WrapperStyleNameProduct>
            <div>
                <StarFilled  style={{fontSize:'12px',color:'yellow'}} />
                <StarFilled  style={{fontSize:'12px',color:'yellow'}} />
                <StarFilled  style={{fontSize:'12px',color:'yellow'}} />
                <WrapperStyleTextSell> | Sell over 1000+</WrapperStyleTextSell>
            </div>
            <WrapperPriceItem>
                <WrapperPriceTextItem>99.99</WrapperPriceTextItem>
            </WrapperPriceItem>
            <WrapperAddressItem>
                <span>Delivery to </span>
                <span className='address'>945 Crane Avenue, Winninpeg, MB </span>
                <span className='changeAddress'> - Change address</span>
            </WrapperAddressItem>
            <div style={{padding:'10px',borderTop:'1px solid #e5e5e5',borderBottom:'1px solid #e5e5e5'}}>
                <div>Quantity</div>
                <WrapperQuantityProduct>
                    <button style={{bortder:'none',background:'transparent'}}>
                        <MinusOutlined style={{color:'#000',fontSize:'20px'}}/>
                    </button>
                    <WrapperInputNumber defaultValue={1} onChange={onChange} size="small"/> 
                    <button style={{bortder:'none',background:'transparent'}}>
                        <PlusOutlined style={{color:'#000',fontSize:'20px'}}/>
                    </button>
                </WrapperQuantityProduct>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',padding:'10px'}}>
                <ButtonComponent
                    border={false}
                    size={40}
                    textButton={'Buy'}
                    style={{
                        background:'rgb(255,57,69)',
                        height:'48px',
                        width:'220px',
                        border:'none',
                        borderRadius:'4px',
                        color:'#fff',
                        fontSize:'15px',
                        fontWeight:'700'
                    }}
                >

                </ButtonComponent>
            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent