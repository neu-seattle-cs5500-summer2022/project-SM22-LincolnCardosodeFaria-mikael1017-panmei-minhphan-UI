import React, { useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";
import styled from "styled-components";
import AdminDiet from "../components/AdminDiet";
import { useParams, Link } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import { Button, Card } from "react-bootstrap";

const AdminContainer = styled.div`
  margin: 25px;
`;
const UsersContainer = styled.div`
  max-width: 25%;
  max-height: 80vh;
  overflow-y: scroll;
`;

function EditClientPage(props) {
  let { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const instance = axios.create({
    baseURL: "https://gymmanagement.cropfix.ca",
  });

  const getUser = () => {
    instance
      .get("/User/GetUserById", {
        params: {
          id: id,
        },
      })
      .then(function (response) {
        setUserInfo(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <MyNavbar />
      <Card className="m-5 border-0" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title>Edit Diet for {userInfo.fullname}</Card.Title>
          <Link to={`/user/diet/${id}`}>
            <Button variant="primary" className="mb-3" onClick={() => {}}>
              Edit Diet
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="m-5 border-0" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title>Edit Workout for {userInfo.fullname}</Card.Title>
          <Link to={`/user/workout/${id}`}>
            <Button variant="primary" className="mb-3" onClick={() => {}}>
              Edit Workout
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="m-5 border-0" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title>Edit Schedule for {userInfo.fullname}</Card.Title>
          <Link to={`/user/schedule/${id}`}>
            <Button variant="primary" className="mb-3" onClick={() => {}}>
              Edit Schedule
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EditClientPage;
