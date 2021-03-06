import React, { Component } from 'react';
import PokeForm from './PokeForm';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  state = { showForm: false } 

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  render() {
    const { name, location, level, move, id } = this.props
    const { showForm } = this.state 
    return(
      <>  
        {
          showForm ?
            <PokeForm {...this.props} toggleForm={this.toggleForm} />
          :
          <div>
            <h1>Name: 
              <Link to={{
                pathname: `/pokemon/${id}`,
                state: { name, location, level, move, id, greeting: 'hello' }
              }}>
                {name}
              </Link>
            </h1>
            <p>Location: {location}</p>
            <p>Level: {level}</p>
            <p>Move: {move}</p>
            <Button onClick={this.toggleForm}>
              Edit
            </Button>
            <Button>
              Delete
            </Button>
          </div>
        }
      </>
    )
  }
}

export default Pokemon;