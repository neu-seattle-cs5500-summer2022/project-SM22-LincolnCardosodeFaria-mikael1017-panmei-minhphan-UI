import React, { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";
import styled from "styled-components";
import AdminDiet from "../components/AdminDiet";
import { useParams, Link } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import { Button } from "react-bootstrap";

const AdminContainer = styled.div`
  margin: 25px;
`;
const UsersContainer = styled.div`
  max-width: 25%;
  max-height: 80vh;
  overflow-y: scroll;
`;

function EditWorkoutPage(props) {
  let { id } = useParams();

  return (
    <div>
      <h1>Edit workout page</h1>
      <MyNavbar />
      <Link to={`/user/${id}`}>
        <Button variant="warning" onClick={() => {}}>
          Back
        </Button>
      </Link>
    </div>
  );
}

export default EditWorkoutPage;
