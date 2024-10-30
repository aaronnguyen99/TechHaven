import {styled} from 'styled-components'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'



export const WrapperTypeProduct=styled.div`
    display:flex;
    align-items:center;
    gap:16px;
    justify-content:flex-start;
    height:50px;
`

export const WrapperButtonMore=styled(ButtonComponent)`
    &:hover{
        background:rgb(12,92,182);
        span{
                    color:#fff;
        }

    }
    width:100%;
    text-align:center;
`


export const WrapperProduct=styled.div`
    display:flex;
    gap:16px;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:20px;
`