import { Card } from 'antd'
import {styled} from 'styled-components'

export const StyleNameProduct=styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height:16px;
    color:rgb(56,56,61);
`

export const WrapperReportText=styled.div`
    font-weight: 400;
    font-size: 12px;
    display:flex;
    align-items:center;
    color:rgb(128,128,157);
    margin:6px 0;

`

export const WrapperPriceText=styled.div`
    margin:8px 0;
    font-weight: 500;
    font-size: 16px;
    display:flex;
    align-items:center;
    color:rgb(256,66,78);
`

export const WrapperStyleCard=styled(Card)`
    width:200px;
    & img{
        width:200px;
        height:200px;
    }
    position:relative;
`