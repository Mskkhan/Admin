import React,{useState} from 'react'
import Layout from '../../Components/Layout'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
import Input from '../../Components/UI/Input';
import { login } from '../../action';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
/**
* @author
* @function SignIn
**/

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const auth=useSelector(state=>state.auth);
  const dispatch = useDispatch();

 
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    dispatch(login(user));
  };
  if(auth.authenticate){
    return <Redirect to={"/"}/>
  }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '70px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
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


              <Button variant="primary" type="submit" style={{marginTop:'15px'}}>
                Submit
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

export default SignIn