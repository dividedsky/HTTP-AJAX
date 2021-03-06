import React from 'react';
import {StyledFriendForm} from './FriendForm';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      id: '',
    };
  }

  componentDidMount() {
    const friend = this.props.friends.find(
      f => `${f.id}` === this.props.match.params.id,
    );
    this.setState({name: friend.name, age: friend.age, email: friend.email, id: friend.id});
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  editFriend = (e) => {
    e.preventDefault();
    this.props.updateFriend(this.state);
    this.props.history.push('/');
    

  }

  //const friend = props.friends.find(f => `${f.id}` === props.match.params.id);
  render() {
    return (
      <StyledFriendForm
        onSubmit={this.editFriend}>
        <input
          type="text"
          value={this.state.name || ''}
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          value={this.state.age || ''}
          name="age"
          onChange={this.handleChange}
        />
        <input
          type="email"
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
        />
        <input type="submit" />
      </StyledFriendForm>
    );
  }
}

export default EditForm;
