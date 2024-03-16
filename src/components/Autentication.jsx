import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default function Autentication() {

  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const [formValues, setFormValues] = useState({username:"", password:""});

  const handleUsername = (e) => {
    setFormValues({...formValues, username: e.target.value});
  }

  const handlePassword = (e) => {
    setFormValues({...formValues, password: e.target.value});
  }

  const cancelHandler = () => {
    setFormValues({username:"", password:""});
  }

  const clickHandler = () => {
    const loginUrl = 'http://localhost:3001/login';

    fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"login": formValues.username, "password": formValues.password})
    }).then(response => response.json())
      .then(data => {
        checkResponse(data);
      })
  }

  const checkResponse = (data) => {
    if (data.status === "success" && data.message === "The provided credentials are correct. User authenticated.") {
      setError(false);
      navigate("/list");
    } else {
      setError(true);
    }
  }

  return (
    <div className="centerdedDiv">
        <Form className="formContainer">
            <h3><strong><FormattedMessage id='Inicio de Sesión'/></strong></h3>
            <Form.Group className="formBasicUser" controlId="formBasicUser">
              <Form.Label className="formLabelUser"><FormattedMessage id='Nombre de usuario'/></Form.Label>
              <Form.Control 
                  value={formValues.username} 
                  onChange={handleUsername}
                  type="username" 
                  isInvalid={error}
                  />
            </Form.Group>
            <Form.Group className="formBasicPass" controlId="formBasicPass">
            <Form.Label  className="formLabelPass"><FormattedMessage id='Contraseña'/></Form.Label>
            <Form.Control 
                value={formValues.password} 
                onChange={handlePassword}
                type="password" 
                isInvalid = {error}
                />
            </Form.Group>
            <div className="buttonContainer">
              <Button 
                  onClick={clickHandler}
                  className="ingresar"
                  >
                  <FormattedMessage id='Ingresar'/>
              </Button>
              <Button 
                  onClick={cancelHandler}
                  className="cancelar"
                  >
                  <FormattedMessage id='Cancelar'/>
              </Button>
              { error && <p className="errorMessage"><FormattedMessage id='error'/></p> }
            </div>
        </Form>
    </div>
  )
}
