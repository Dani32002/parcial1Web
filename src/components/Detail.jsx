import React, { useEffect } from 'react'
import { Card, Image } from 'react-bootstrap'
import { useState } from 'react';

export default function Detail({ cars, carId }) {

  const [car, setCar] = useState({});

  useEffect(()=> {
    setCar(cars.find((car) => car.id === carId));
  },[carId, cars]);

  return (
    <div>
        <Card>
            <Card.Title>{ car.marca + " " + car.linea }</Card.Title>
            <Image src={car.imagen} alt={car.linea} />
            <Card.Text>Kilometraje: {car.kilometraje}</Card.Text>
            <Card.Text>Color: {car.color}</Card.Text>
            <Card.Text>Referencia: {car.referencia}</Card.Text>
        </Card>
    </div>
  )
}
