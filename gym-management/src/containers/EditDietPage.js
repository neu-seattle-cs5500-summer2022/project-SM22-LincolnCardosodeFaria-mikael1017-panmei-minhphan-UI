import React, { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";
import styled from "styled-components";
import AdminDiet from "../components/AdminDiet";
import { useParams, Link } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import { Button } from "react-bootstrap";

function EditDietPage(props) {
  let { id } = useParams();

  return (
    <div>
      <MyNavbar />
      <AdminDiet id={id} />
      <Link to={`/user/${id}`}>
        <Button variant="warning" onClick={() => {}}>
          Back
        </Button>
      </Link>
    </div>
  );
}

export default EditDietPage;
