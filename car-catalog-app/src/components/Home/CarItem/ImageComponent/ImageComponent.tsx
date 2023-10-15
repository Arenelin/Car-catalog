import styled from "styled-components"

type ImageComponentPropsType = {
   src?: string
}


export function ImageComponent(props: ImageComponentPropsType) {
   return (
      <StyledImageComponent src={props.src} alt="car-item"/>
   )
}

const StyledImageComponent = styled.img`
   height: 600px;
   width:100%;
   object-fit: cover;
`