import React from 'react'
import pikachuImage from '/picachu.png';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Inicio = () => {
  const navigate = useNavigate();
  const redirectPokemones = () => {
    navigate(`/pokemones`);
    };

  return (
    <div>
      <Row className="justify-content-md-center">
      <Col xs={12} md={3} className='cont-pikachu,md-auto'>
            <img src={pikachuImage} alt="Pikachu" className='pikachu' />
            <Button variant="info" onClick={redirectPokemones}>Llevame a los pokemones</Button>
        </Col>
      </Row>
    </div>
  )
}
