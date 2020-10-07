import React from 'react';
import Card from './Card';
import Form from './Form';

const CardList = (props) => (
  <div>
    {props.profiles.map((profile, index) => <Card key={profile.id} {...profile} />)}
  </div>
);

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  }
  
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
