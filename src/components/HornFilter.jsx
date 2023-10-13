import React from 'react';
import Form from 'react-bootstrap/Form';

class HornFilter extends React.Component {
  render() {
    return (
      <Form.Select onChange={this.props.handleFilterChange}>
        <option value="all">Show All</option>
        <option value="1">One Horn</option>
        <option value="2">Two Horns</option>
        <option value="3">Three Horns</option>
      </Form.Select>
    );
  }
}

export default HornFilter;