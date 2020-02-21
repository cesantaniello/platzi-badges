import React from 'react'

class BadgeForm extends React.Component {
  state = {
    jobTitle: 'Designer',
  };
  handleChange = e => {
  /*  console.log({
      name: e.target.name,
      value: e.target.value,
    });*/

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };
  
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };  

  render () {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div classname="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} 
            className="form-control" 
            type="text" 
            name="firstName" 
            value={this.state.firstName}
            />            
          </div>

          <div classname="form-group">
            <label>Last Name</label>
            <input onChange={this.handleChange} 
            className="form-control" 
            type="text" 
            name="lastName" 
            value={this.state.lastName}
            />            
          </div>
          
          <div classname="form-group">
            <label>Email</label>
            <input onChange={this.handleChange} 
            className="form-control" 
            type="email" 
            name="email" 
            value={this.state.email}
            />            
          </div>

          <div classname="form-group">
            <label>Job Title</label>
            <input onChange={this.handleChange} 
            className="form-control" 
            type="text" 
            name="jobTitle" 
            value={this.state.jobTitle}
            />            
          </div>      

          <div classname="form-group">
            <label>Twitter</label>
            <input onChange={this.handleChange} 
            className="form-control" 
            type="text" 
            name="twitter" 
            value={this.state.twitter}
            />            
          </div>                                  

          <button  
          onClick={this.handleClick} 
          className="btn btn-primary">Save</button>
        </form>
      </div>

    )
  }
}

export default BadgeForm;