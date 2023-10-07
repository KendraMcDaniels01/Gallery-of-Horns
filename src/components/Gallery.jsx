import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import HornedBeast from './HornedBeast';
import hornedBeastValues from '../assets/data.json'



class Gallery extends React.Component {
  render() {
    return (
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {hornedBeastValues.map((beast, index) => 
        <Col key={index}>
        <HornedBeast 
        key={index} 
        title={beast.title} 
        image_url={beast.image_url} 
        horns={beast.horns} 
        description={beast.description} 
        />
        </Col>
        )}
        </Row>
      </Container>
    );
  }
}

export default Gallery;