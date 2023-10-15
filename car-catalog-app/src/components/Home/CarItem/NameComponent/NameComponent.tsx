import styled from "styled-components"

type NameComponentPropsType = {
   name: string
}

export function NameComponent(props: NameComponentPropsType) {
   return (
      <StyledNameComponent>{props.name}</StyledNameComponent>
   )
}

const StyledNameComponent = styled.p`
padding-top: 10px;
font-size: 40px;
margin-bottom: 10px;
font-weight: 700;
color: snow;
`