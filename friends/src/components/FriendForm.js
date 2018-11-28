import React from 'react';
import styled from 'styled-components';

const StyledFriendForm = styled.form`
  max-width: 60%;
  border: 1px solid black;
  border-radius: 4px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input {
    padding: 5px;
  }
`;

const FriendForm = (props) => {
  return (
    <StyledFriendForm onSubmit={props.addFriend}>
        <input type="text" placeholder="name" name="name" />
      <input type="text" placeholder="age" name="age" />
      <input type="text" placeholder="email" name="email" />
      <input type="submit"  />
    </StyledFriendForm>
  );
};

export default FriendForm;