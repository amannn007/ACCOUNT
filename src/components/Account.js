import React, { useState } from 'react';
import styled from 'styled-components';
import { useUser } from '../context/UserContext';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
`;

const Card = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Info = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  color: #555;
`;

const Value = styled.div`
  color: #333;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: calc(100% - 24px);
  margin-bottom: 10px;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
`;

const Account = () => {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <Container>
      <Card>
        <Title>Account Information</Title>
        {isEditing ? (
          <>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </>
        ) : (
          <>
            <Info>
              <Label>Name:</Label>
              <Value>{user.name}</Value>
            </Info>
            <Info>
              <Label>Email:</Label>
              <Value>{user.email}</Value>
            </Info>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Account;
