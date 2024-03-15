import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Autentication() {

  const data = {
    login: "admin",
    password: "pass"
};

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
    /*fetch('http://localhost:3001/login', {
    method: 'POST',
    body: JSON.stringify(formValues)
    }).then(response => response.json())
      .then(data => {
        if (data.status === "sucess") {
            setError(false);
            navigate("/list");
        } else {
            setError(true);
        }
      })
    */
    if (data.login === formValues.username && data.password === formValues.password) {
        setError(false);
        navigate("/list");
    } else {
        setError(true);
    }

  }

  return (
    <div className="centerdedDiv">
        <Form className="formContainer">
            <h3><strong>Inicio de Sesión</strong></h3>
            <Form.Group className="mb-3 mt-3" controlId="formBasicUser">
            <Form.Label className="formLabel">Nombre de Usuario</Form.Label>
            <Form.Control 
                value={formValues.username} 
                onChange={handleUsername}
                type="username" 
                />
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="formBasicPass">
            <Form.Label  className="formLabel">Contraseña</Form.Label>
            <Form.Control 
                value={formValues.password} 
                onChange={handlePassword}
                type="password" 
                />
            </Form.Group>
            <div className="buttonContainer2 mt-4">
              <Button 
                  onClick={clickHandler}
                  variant="primary">
                  Guardar Cambios
              </Button>
              <Button 
                  onClick={cancelHandler}
                  variant="danger">
                  Cancelar
              </Button>
              { error && <p className="text-danger">Error de autenticación. Revise sus credenciales</p> }
            </div>
        </Form>
    </div>
  )
}
