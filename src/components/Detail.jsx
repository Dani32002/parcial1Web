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
      <Card className="detailCard">
          <Card.Title className="cardTitle">{ car.marca + " " + car.linea }</Card.Title>
          <Image src={car.imagen} alt={car.linea} />
          <div className="dataDetailContainer">
            <Card.Text>{'-> '}<FormattedMessage id='Kilometraje'/>: {car.kilometraje}<br />
              {'-> '}<FormattedMessage id='Color'/>: {car.color} <br />
              {'-> '}<FormattedMessage id='Referencia'/>: {car.referencia}</Card.Text>
          </div>
      </Card>
  )
}
