
import { Lista } from "./Lista";
import Row  from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';


const Pokemones = () => {

 

  return (
    <>
     <Row className="justify-content-md-center">
     <Col xs={12} md={3} className='md-auto '>
      <div className="form">
      <h1>Elige tu Pokémon</h1>
      <Lista/>
      </div>
     </Col>
    </Row>
    </>
  );
};

export default Pokemones;