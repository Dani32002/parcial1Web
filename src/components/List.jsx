import React, { useEffect, useState } from 'react'
import Detail from './Detail';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default function List() {

  const [show, setShow] = useState(false);

  const [selectedId, setSelectedId] = useState(0);

  const [cars, setCars] = useState([]);

  useEffect(()=> {
    const listUrl = 'http://localhost:3001/cars';
    fetch(listUrl)
        .then(response => response.json())
        .then(data => {
            setCars(data);
        });
  },[]);

  const clickHandler = (carId) => {
    setSelectedId(carId);
    setShow(true);
  }

  return (
    <div className="listSection">
        <Row className="listSection">
            <Col xs={7} className="tableArea">
                <table className="table">
                    <thead className="tableHead">
                        <tr>
                            <th className="tableHead id">#</th>
                            <th className="tableHead marca"><FormattedMessage id='Marca'/></th>
                            <th className="tableHead linea"><FormattedMessage id='Línea'/></th>
                            <th className="tableHead"><FormattedMessage id='Modelo'/></th>
                        </tr>
                    </thead>
                    <tbody>
                        { cars.map((car) => (
                            <tr className="clickableRow" key={car.id} onClick={() => clickHandler(car.id)}>
                                <td className="id"><span className="contentSpan"><strong>{car.id}</strong></span></td>
                                <td className="marca"><span className="contentSpan">{ car.marca }</span></td>
                                <td className="linea"><span className="contentSpan">{ car.linea }</span></td>
                                <td><span className="contentSpan">{ car.modelo }</span></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Col>
            <Col xs={5} className="detailContainer">
                { show && <Detail carId={selectedId}/>}
            </Col>
        </Row>
    </div>
  )
}
