import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap'
import HornedBeast from './HornedBeast';
import hornedBeastValues from '../assets/data.json'
import HornFilter from './HornFilter'

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
    };
  }
  
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  }

  render() {
    // filter implemention I got from chatgpt
    const { filter } = this.state;

    const filteredBeasts = hornedBeastValues.filter((beast) => {
      if (filter === 'all') {
        return true;
      } else {
        return beast.horns === parseInt(filter);
      }
    });

    return (
      <Container>
        <HornFilter handleFilterChange={this.handleFilterChange} />
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredBeasts.map((beast, index) => 
        <Col key={index}>
        <HornedBeast 
        key={index} 
        data={beast}
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