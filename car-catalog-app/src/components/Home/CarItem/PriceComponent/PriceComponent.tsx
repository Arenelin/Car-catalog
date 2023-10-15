import styled from "styled-components"


type PriceComponentPropsType = {
   price: any
}

export function PriceComponent(props: PriceComponentPropsType) {
   return (
      <StyledPriceComponent>{new Intl.NumberFormat('ru-RU', {
         style: 'currency',
         currency: 'USD',
         currencyDisplay: 'narrowSymbol',
      }).format(props.price)}</StyledPriceComponent>
   )
}


const StyledPriceComponent = styled.p`
   font-size: 25px;
   margin-bottom: 10px;
   color: snow;
`