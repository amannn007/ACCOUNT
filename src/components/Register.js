import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Validation schema
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #555;
`;

const StyledField = styled(Field)`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875em;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const LoginLink = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #333;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // Simulate registration logic
    console.log('Registration data:', values);
    navigate('/login');
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Register</Title>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <StyledField name="name" />
                {errors.name && touched.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <StyledField name="email" type="email" />
                {errors.email && touched.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <StyledField name="password" type="password" />
                {errors.password && touched.password ? <ErrorMessage>{errors.password}</ErrorMessage> : null}
              </FormGroup>
              <SubmitButton type="submit">Register</SubmitButton>
            </StyledForm>
          )}
        </Formik>
        <LoginLink>
          Already have an account? <Link to="/login">Login here</Link>
        </LoginLink>
      </FormWrapper>
    </Container>
  );
};

export default Register;
