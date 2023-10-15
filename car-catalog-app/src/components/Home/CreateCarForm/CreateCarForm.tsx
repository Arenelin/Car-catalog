import { useState } from "react"
import styled from "styled-components"


type CreateCarFormPropsType = {
   setCar?: any
}

export function CreateCarForm(props: CreateCarFormPropsType) {

   const clearData = {name: '', price: '', image: ''}

   const [dataCar, setDataCar] = useState(clearData)


   function onClickHandler(event: any) {
      event.preventDefault();
      props.setCar((prev: any) => [...prev, { id: prev.length + 1, ...dataCar }]);
      setDataCar(clearData);
   }


   return (
      <StyledCreateCarForm>
         <input onChange={(event) => setDataCar({ ...dataCar, name: event.target.value})} value={dataCar.name} placeholder="Name" />
         <input onChange={(event) => setDataCar({ ...dataCar, price: event.target.value})} value={dataCar.price} placeholder="Price" />
         <input onChange={(event) => setDataCar({ ...dataCar, image: event.target.value })} value={dataCar.image} placeholder="Image" />
         <button onClick={onClickHandler}>Create</button>
      </StyledCreateCarForm>
   )
}


const StyledCreateCarForm = styled.form`
   margin: 9px auto 28px;
   & input{
      padding: 8px 13px;
      transition: all .3s;
      border: 2px solid transparent;
      margin: 0px auto 10px;
      display: block;
      &:focus{
        border-color: #f16c6c;
      }
   }
`