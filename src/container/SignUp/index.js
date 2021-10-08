import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Input from '../../Components/UI/Input';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../action';


/**
* @author
* @function SignUp
**/

const SignUp = (props) => {


  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  if (auth.authenticate) {
    return <Redirect to={'/'} />
  }
  if (user.loading) {
    return <p>Loading.....</p>
  }


  const userSignup = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password }
    dispatch(signup(user));
  }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '70px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="first Name"
                    value={firstName}
                    type="text"
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="primary" type="submit"  style={{marginTop:'15px'}}>
                Submit
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

export default SignUp