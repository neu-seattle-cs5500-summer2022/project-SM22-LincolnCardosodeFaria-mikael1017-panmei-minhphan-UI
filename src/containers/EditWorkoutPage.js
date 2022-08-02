import React, { useEffect, useState } from "react";
import AdminDiet from "../components/AdminDiet";
import { useParams, Link } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import AdminWorkout from "../components/AdminWorkout";

function EditWorkoutPage(props) {
  let { id } = useParams();

  return (
    <div>
      <MyNavbar />
      <h1>Edit workout page</h1>
      <AdminWorkout id={id} />
      <Link to={`/user/${id}`}>
        <Button variant="warning" onClick={() => {}}>
          Back
        </Button>
      </Link>
    </div>
  );
}

export default EditWorkoutPage;
