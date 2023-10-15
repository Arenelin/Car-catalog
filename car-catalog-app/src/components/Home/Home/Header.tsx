import styled from "styled-components"


export function HeaderComponent() {
   return (
      <StyledHeaderComponent>Cars Catalog</StyledHeaderComponent>
   )
}


const StyledHeaderComponent = styled.h1`
padding-top: 20px;
font-size: 40px;
color: snow;
margin-bottom: 20px;
`