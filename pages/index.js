import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Button, Row, Col, ListGroup, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("full-name")); // watch input value by passing the name of it

  return (
    <div>
      <Head>
        <title>Home | Frederick Mutual Aid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Navbar bg="light">
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Navbar>
      </Container>
      <Container className={styles.head} fluid>
        <h1>A new way to support people in Frederick</h1>
        <p className={styles.subheader}>Introducing Frederick Mutual Aid, a collection of all of the best community resources in Frederick, Maryland.</p>
        <Button variant="info">Get in Contact</Button>{' '}
      </Container>
      <Container className={styles.section} fluid>
        <Row>
          <Col>
            <h2>Keeping community at the center</h2>
            <p className={styles.subheader}>Frederick Mutual Aid intends to help all populations within Frederick. We serve the following purposes:</p>
            <ListGroup>
              <ListGroup.Item>
                  <h3>📚 Resource Repository</h3>
                  <p>Collecting important resources for citizens in Frederick!</p>
              </ListGroup.Item>
              <br />
              <ListGroup.Item>
                  <h3>﹖ Request Form + Dashboard</h3>
                  <p>A place where people in Frederick can leave and fulfill community requests!</p>
              </ListGroup.Item>
              <br />
              <ListGroup.Item>
                  <h3>💵 Collective Fund</h3>
                  <p>For dire personal needs within the community</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      <Container className={styles.head}>
        <h1>Got a Request? Fill out the Form.</h1>
        <p className={styles.subheader}>We'll ensure that your form request gets fulfilled ASAP.</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className={styles.fieldName} controlId="full-name">
            <Form.Label >Full Name</Form.Label>
            <Form.Control name="full-name" ref={register({ required: true })} placeholder="Enter Full Name" />
          </Form.Group>
          <Form.Group className={styles.fieldName} controlId="email">
            <Form.Label >Email</Form.Label>
            <Form.Control name="email" type="email" ref={register({ required: true })} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className={styles.fieldName} controlId="request-text">
            <Form.Label>Request</Form.Label>
            <Form.Control name="request" ref={register({ required: true })} placeholder="Enter as much or as little as you'd like" as="textarea" rows={3} />
          </Form.Group>
          {errors.exampleRequired && <p>This field is required!</p>}
          <br />
          <Form.Group className={styles.fieldName} controlId="button-submit">
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}