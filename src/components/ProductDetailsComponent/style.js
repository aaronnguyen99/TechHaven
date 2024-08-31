import { Image,Col, InputNumber } from 'antd';
import {styled} from 'styled-components';



export const WrapperStyleImageSmall=styled(Image)`
    height:64px;
    width:64px;
`

export const WrapperStyleColImage=styled(Col)`
    flex-basis:unset;
    display:flex;
`

export const WrapperStyleNameProduct=styled.h1`
    color:rgb(36,36,36);
    font-size:24px;
    font-weight:300;
    line-height:32px;
    word-break:break_word;

`

export const WrapperStyleTextSell=styled.span`
    font-size:15px;
    line-height:24px;
    color:rgb(120,120,120);
`

export const WrapperPriceItem=styled.div`
    background:rgb(250,250,250);
    border-radius:4px;
`
export const WrapperPriceTextItem=styled.div`
    font-size:32px;
    line-height:40px;
    margin-right:8px;
    font-weight:500;
    padding:10px;
    margin-top:10px;
`
export const WrapperAddressItem=styled.div`
    padding:10px;
    span.address{
        text-decoration:underline;
        font-size:15px;
        line-height:24px;
        font-weight:500;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsisl
    },
    span.changeAddress{
        color:rgb(11,116,229);
        font-size:16px;
        line-height:24px;
        font-weight:500;
    }
`

export const WrapperQuantityProduct=styled.h1`
    display:flex;
    gap:4px;
    align-items:center;
    width:120px;
    border:1px solid #ccc;
    border-radius:4px;

`

export const WrapperInputNumber=styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm{
        width:60px;
        border-top:none;
        border-bottom:none;
        &.ant-input-number-handler-wrap{
            display:none !important
        }
    }
    
`