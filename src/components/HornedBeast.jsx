import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      showModal: false,
    };
  }

  handleClick = () => {
    this.setState((currentFavorites) => ({
      favorites: currentFavorites.favorites +1,
    }))
  };

  handleShow = () => {
    this.setState({ showModal: true});
  };

  handleClose = () => {
    this.setState({ showModal: false});
  };

  render () {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.image_url} onClick={this.handleShow} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{'Favorite card: '+this.state.favorites}</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{'number of horns '+this.props.horns}</Card.Text>
          <Button variant="primary" onClick ={this.handleClick}>💕 Favorite</Button>
        </Card.Body>
        <SelectedBeast
          show={this.state.showModal}
          handleClose={this.handleClose}
          data={this.props.data}
        />
      </Card>
    );
  }
}

export default HornedBeast;