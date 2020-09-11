import React from "react";
import { Container } from "react-bootstrap";

import { useAuth0 } from '@auth0/auth0-react';

import { Row, Col } from 'react-bootstrap';
import Highlight from '../components/highlight'


export const Profile = () => {
  const { user } = useAuth0();

  console.log(user);

  return (
    <Container className="mb-5">
      <h1>Profile</h1>
      <Row className='align-items-center profile-header mb5 text-center text-mb-left'>
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
          />
        </Col>

        <Col md>
          <h2>{user.name}</h2>
          <p className='lead text-muted'>{user.email}</p>
        </Col>
      </Row>

      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
      <Row>
        <p>Your user.sub value is: {user.sub}</p>
      </Row>
    </Container>
  );
};

export default Profile;
