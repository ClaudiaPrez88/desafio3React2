
import { Container, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Row  from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import { FaPlay } from 'react-icons/fa';


export const DetallesPokemon = () => {
    const { id} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [photo, setPhoto] = useState()
    const [photoIndex, setPhotoIndex] = useState(0);
    const [audio, setAudio] = useState(null);
    const navigate = useNavigate();
    const redirectPokemones = () => {
      navigate(`/pokemones`);
      };
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon(response.data);
            setPhoto([
                response.data.sprites.front_default,
                response.data.sprites.back_default,
                response.data.sprites.front_shiny,
                response.data.sprites.back_shiny,
              ]);
              // Cargar audio
              const audioResponse = await axios.get(response.data.cries.latest, { responseType: 'blob' });
              const audioBlob = new Blob([audioResponse.data], { type: 'audio/ogg' });
              setAudio(URL.createObjectURL(audioBlob));

          } catch (error) {
            console.error('Error fetching Pokemon details:', error);
          }
        };
    
        fetchData();
      }, [id]);

      const handleNextPhoto = () => {
        setPhotoIndex((prevIndex) => (prevIndex + 1) % photo.length);
    };
    const playAudio = () => {
        if (audio) {
            const audioElement = new Audio(audio);
            audioElement.play();
        }
    }
    console.log(pokemon)

  return (
    <div>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={3} className='md-auto '>
                {pokemon && (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={photo?.[photoIndex]} />
                        <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                            <strong>ID:</strong> {pokemon.id} <br />
                            <strong>Altura:</strong> {pokemon.height} <br />
                            <strong>Peso:</strong> {pokemon.weight} 
                        </Card.Text>
                        <div className="botones-card">
                            <Button variant="primary" onClick={handleNextPhoto}>Cambiar foto</Button>
                            <Button variant="success" onClick={playAudio}><FaPlay /></Button>
                            <Button variant="info" onClick={redirectPokemones}>Volver</Button>
                        </div>
                        </Card.Body>
                    </Card>
                    )}
                </Col>
            </Row>
      </Container>
    </div>
  )
}
