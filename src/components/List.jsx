import React, { useEffect, useState } from 'react'
import Detail from './Detail';
import { Col, Row } from 'react-bootstrap';

export default function List() {

  const [show, setShow] = useState(false);

  const [selectedId, setSelectedId] = useState(0);

  const [cars, setCars] = useState([
    {
         "id": 1,
         "marca": "Renault",
         "linea": "Kangoo",
         "referencia": "VU Express",
         "modelo": 2017,
         "kilometraje": 93272,
         "color": "Blanco",
         "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/kangoo.jpeg?raw=true"
     },
     {
         "id": 2,
         "marca": "Chevrolet",
         "linea": "Spark",
         "referencia": "Life",
         "modelo": 2018,
         "kilometraje": 55926,
         "color": "Plata",
         "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/spark.jpeg?raw=true"
     }
 ]);

  useEffect(()=> {

  },[]);

  const clickHandler = (carId) => {
    setSelectedId(carId);
    setShow(true);
  }

  return (
    <div>
        <Row>
            <Col xs={7}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Marca</th>
                            <th>Línea</th>
                            <th>Modelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cars.map((car) => (
                            <tr key={car.id} onClick={() => clickHandler(car.id)}>
                                <td>{car.id}</td>
                                <td>{ car.marca }</td>
                                <td>{ car.linea }</td>
                                <td>{ car.modelo }</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Col>
            <Col xs={5}>
                { show && <Detail cars={cars} carId={selectedId}/>}
            </Col>
        </Row>
    </div>
  )
}
