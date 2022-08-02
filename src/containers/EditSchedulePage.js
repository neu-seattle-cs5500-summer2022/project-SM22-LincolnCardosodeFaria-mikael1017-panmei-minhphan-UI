import React, { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import { Button } from "react-bootstrap";

function EditSchedulePage(props) {
  let { id } = useParams();

  return (
    <div>
      <h1>Edit schedule page</h1>
      <MyNavbar />
      <Link to={`/user/${id}`}>
        <Button variant="warning" onClick={() => {}}>
          Back
        </Button>
      </Link>
    </div>
  );
}

export default EditSchedulePage;
