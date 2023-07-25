import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./App.css";

function MovieCard({title,description,posterURL,rating}) {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <img src={posterURL} width={288} className='image'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">{rating}</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;