import React, { useState } from "react";
import axios from "axios";
import { Button, Card, ListGroup, Form } from "react-bootstrap";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormContainer = styled.div`
  margin: auto;
  width: 25%;
`;

export default function AdminWorkout(props) {
  const [workoutName, setWorkoutName] = useState("");
  const [numberOfSets, setNumberOfSets] = useState(3);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const instance = axios.create({
    baseURL: "https://gymmanagement.azurewebsites.net",
  });

  const createWorkout = (e) => {
    e.preventDefault();
    instance
      .post(
        "/WorkOut/CreateWorkout",
        // headers: { "Access-Control-Allow-Origin": "*" },
        // withCredentials: true,
        {
          nameOfWorkout: workoutName,
          numberOfSets: numberOfSets,
          start: startDate,
          end: endDate,
          userId: props.id,
        }
      )
      .then(function (response) {
        console.log(response);
        setWorkoutName("");
        setNumberOfSets(3);
        setStartDate("");
        setEndDate("");
        alert("Workout has been created for selected user");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <FormContainer className="mb-3">
        <Form onSubmit={createWorkout}>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              type="diet"
              placeholder="Name of the workout"
              onChange={(e) => setWorkoutName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of sets</Form.Label>
            <Form.Control
              as="select"
              className="mb-3"
              defaultValue={3}
              onChange={(e) => setNumberOfSets(e.target.value)}
            >
              <option value={1}>1 </option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Control>
          </Form.Group>
          <>
            <div>Start date</div>
            <DatePicker
              name="startDate"
              selected={Date.parse(startDate)}
              dateFormat="yyyy-MM-dd"
              onChange={(date) => {
                const d = new Date(date).toLocaleDateString("sv-SE");
                setStartDate(d);
              }}
            />

            <div>End date</div>
            <DatePicker
              name="endDate"
              dateFormat="yyyy-MM-dd"
              selected={Date.parse(endDate)}
              onChange={(date) => {
                const d = new Date(date).toLocaleDateString("sv-SE");
                setEndDate(d);
              }}
            />
          </>
          <Button type="submit" variant="primary">
            Create
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
}
