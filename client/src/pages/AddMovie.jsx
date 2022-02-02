import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
      alert("Error! Add Movie failed.");
    }
  };

  return (
    <Card>
      <Card.Header className="p-3">
        <h4>Add Movies</h4>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3" controlId="MovieTitle">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Movie Title"
            name="MovieTitle"
            onChange={onChangeFormField}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="CastNames">
          <Form.Label>Casts</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter cast's Names"
            name="CastNames"
            onChange={onChangeFormField}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="DirectorName">
          <Form.Label>Directors</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Director's Names"
            name="DirectorName"
            onChange={onChangeFormField}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ImdbRatings">
          <Form.Label>Ratings</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Imdb Ratings"
            name="ImdbRatings"
            onChange={onChangeFormField}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Poster">
          <Form.Label>Poster</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the poster link"
            name="Poster"
            onChange={onChangeFormField}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onClickSubmit}>
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddMovie;
