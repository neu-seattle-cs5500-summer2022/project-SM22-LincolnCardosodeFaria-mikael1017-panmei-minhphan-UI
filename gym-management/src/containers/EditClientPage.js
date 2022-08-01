import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import { Button, Card } from "react-bootstrap";

function EditClientPage(props) {
  let { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const instance = axios.create({
    baseURL: "https://gymmanagement.azurewebsites.net",
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
      <h1> Edit for {userInfo.fullname} </h1>
      <Card className="m-5 border-0" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title>Create a Diet</Card.Title>
          <Link to={`/user/diet/${id}`}>
            <Button variant="primary" className="mb-3" onClick={() => {}}>
              Create
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="m-5 border-0" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title>Create a Workout</Card.Title>
          <Link to={`/user/workout/${id}`}>
            <Button variant="primary" className="mb-3" onClick={() => {}}>
              Create
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="m-5 border-0" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title>Create a Schedule</Card.Title>
          <Link to={`/user/schedule/${id}`}>
            <Button variant="primary" className="mb-3" onClick={() => {}}>
              Create
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div>
        <Link to={`/admin/${id}`}>
          <Button variant="warning" onClick={() => {}}>
            Back to see all clients
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default EditClientPage;
