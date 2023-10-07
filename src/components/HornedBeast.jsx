import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  handleClick = () => {
    this.setState((currentFavorites) => ({
      favorites: currentFavorites.favorites +1,
    }))
  };

  render () {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{'Favorite card: '+this.state.favorites}</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{'number of horns '+this.props.horns}</Card.Text>
          <Button variant="primary" onClick ={this.handleClick}>💕 Favorite</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;