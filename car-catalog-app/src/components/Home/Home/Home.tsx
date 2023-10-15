import React from 'react';
import logo from './logo.svg';
import { CarItem } from '../CarItem/CarItem';
import { cars } from '../../../dataBase/data';
import { HeaderComponent } from './Header';


function Home() {
  return (
    <div className='wrapper'>
      <div className='main'>
        <HeaderComponent/>
      {cars ? (cars.map(car => <CarItem car={car} key={car.id}/>))
        : <p>There are no car</p>}
      </div>
    </div>
    
  )
}

export default Home;
