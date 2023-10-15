import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import { CarItem } from '../CarItem/CarItem';
import { carsData } from '../../../dataBase/data';
import { HeaderComponent } from './Header';
import { CreateCarForm } from '../CreateCarForm/CreateCarForm';

export function Home() {


  const [cars, setCar] = useState(carsData)


  return (
    <div className='wrapper'>
      <div className='main'>
        <HeaderComponent />
        <CreateCarForm setCar={setCar} />
        {cars ? (cars.map(car => <CarItem car={car} key={car.id} />))
          : <p>There are no car</p>}
      </div>
    </div>

  )
}


