import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddMovie = () => {
  const [formValues, setFormValues] = useState({});
  const history = useHistory();

  const onChangeFormField = (event) => {
    const { value, name, type } = event.target;

    setFormValues({
      ...formValues,
      [name]: type == "number" ? Number(value) : value,
    });
  };

  const onClickSubmit = async () => {
    try {
      await axios({
        url: "http://localhost:4000/api/movies",
        method: "POST",
        data: formValues,
      });
      history.push("/");
    } catch (err) {
      alert("Add Movie Failed!".err);
    }
  };

  return (
    <Card>
      <Card.Header className="p-3">
        <h4>Add Movie</h4>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter Movie Title"
            onChange={onChangeFormField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Movie Rating</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            placeholder="Enter Movie Rating"
            onChange={onChangeFormField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="poster">
          <Form.Label>Movie Poster</Form.Label>
          <Form.Control
            type="text"
            name="poster"
            placeholder="Enter Movie poster URL"
            onChange={onChangeFormField}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={onClickSubmit}>
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddMovie;
