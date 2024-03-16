import React, { useEffect } from 'react'
import { Card, Image } from 'react-bootstrap'
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

export default function Detail({ carId }) {

  const [car, setCar] = useState({});

  useEffect(()=> {
    const carUrl = 'http://localhost:3001/cars/' + carId;
    fetch(carUrl)
      .then(response => response.json())
      .then(data => {
        setCar(data);
      })
    //setCar(cars.find((car) => car.id === carId));
  },[carId]);

  return (
    <div>
        <Card>
            <Card.Title>{ car.marca + " " + car.linea }</Card.Title>
            <Image src={car.imagen} alt={car.linea} />
            <Card.Text>{'->'}<FormattedMessage id='Kilometraje'/>: {car.kilometraje}</Card.Text>
            <Card.Text>{'->'}<FormattedMessage id='Color'/>: {car.color}</Card.Text>
            <Card.Text>{'->'}<FormattedMessage id='Referencia'/>: {car.referencia}</Card.Text>
        </Card>
    </div>
  )
}
