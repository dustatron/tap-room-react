import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function KegDetails(props) {
  function handleAddNewKegClick() {
    props.onAddKegClick();
  }

  function handleEditClick() {
    props.onEditClick();
  }

  function handleDeleteClick() {
    props.onDeleteClick();
  }

  return (
    <div className="KegDetails top-margin-med">
      <h1 className="text-center tap-header"> Keg Details </h1>
      <Card>
        <Card.Header className="text-center">{props.keg.beer}</Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Brewery: {props.keg.brewery}</ListGroup.Item>
            <ListGroup.Item>Price: ${props.keg.price}</ListGroup.Item>
            <ListGroup.Item>Alcohol Content: {props.keg.aContent}%</ListGroup.Item>
            <ListGroup.Item>Pints Remaining: {props.keg.pints}</ListGroup.Item>
            <ListGroup.Item>Created at: {new Date(props.keg.createAt).toLocaleString()}</ListGroup.Item>
            <ListGroup.Item>SKU: {props.keg.id}</ListGroup.Item>
          </ListGroup>
          <Button className="btn-block top-margin--med" variant="warning" onClick={handleEditClick}>
            Edit
          </Button>
          <Button variant="danger" className="btn-block" onClick={handleDeleteClick}>
            Delete Keg
          </Button>
          <Button onClick={handleAddNewKegClick} className="btn-block" variant="secondary">
            Add New Keg
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onAddKegClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func
};

export default KegDetails;
