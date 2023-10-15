
import { ImageComponent } from "./ImageComponent/ImageComponent"
import { NameComponent } from "./NameComponent/NameComponent"
import { PriceComponent } from "./PriceComponent/PriceComponent"
import { ButtonReadComponent } from "./ButtonReadComponent/ButtonReadComponent"
type CarItemPropsType = {
   car?: any
}

export function CarItem(props: CarItemPropsType) {
   return (
         <div className="car-item">
            <div>
               <ImageComponent src={props.car.image} />
            </div>
         <div className="car-info">
            <NameComponent name={props.car.name} />
            <PriceComponent price={props.car.price}></PriceComponent>
            <ButtonReadComponent/>
            </div>
         </div>
   )
}

