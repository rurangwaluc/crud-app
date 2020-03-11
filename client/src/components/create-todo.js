import React, { Component } from 'react';
import axios from 'axios'

export default class CreateTodo extends Component {
    constructor (props){
      super(props);

      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeResponsible = this.onChangeResponsible.bind(this);
      this.onChangePriority = this.onChangePriority.bind(this);

      this.onSubmit =this.onSubmit.bind(this)

      this.state = {
        description: '',
        responsible: '',
        priority: '',
        completed: false
      }
    }

    onChangeDescription ( e)  {
        this.setState ({
          description: e.target.value
        })
    }
    onChangeResponsible ( e)  {
        this.setState ({
          responsible: e.target.value
        })
    }
    onChangePriority ( e)  {
        this.setState ({
         priority: e.target.value
        })
    }
    onSubmit (e) {
      e.preventDefault();

      console.log(`Form Submitted:`);
      console.log(`Description: ${this.state.description}`);
      console.log(`Responsible: ${this.state.responsible}`);
      console.log(`Priority: ${this.state.priority}`);
      console.log(`Completed: ${this.state.completed}`);
      
      const newTodo = {
        description: this.state.description,
        responsible: this.state.responsible,
        prioty: this.state.prioty,
        completed: this.state.completed
      }

      axios.post('http://localhost:5000/todos/add', newTodo)
      .then(res => console.log(res.data));

      this.setState({
        description: '',
        responsible: '',
        priority: '',
        completed: false
      })
    }


  render() {
    return (
      <div style={{marginTop: 20}}>
          <h3>Create New Todo</h3>
          <form onSubmit={this.onSubmit}>
            
              <div className="form-group">
                <label>Description: </label>
                <input type="text"
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label>Responsible: </label>
                <input type="text"
                    className='form-control'
                    value={this.state.responsible}
                    onChange={this.onChangeResponsible}
                />
              </div>
              <div className="form-group">
                  <div className="form-check form-check-inline">
                    <input className='form-check-input'
                           type="radio"
                           name='priorityOptions'
                           id='priorityLow'
                           value='Low'
                           checked={this.state.priority==='Low'}
                           onChange={this.onChangePriority} 
                    />
                    <label className='form-check-lebal'>Low</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className='form-check-input'
                           type="radio"
                           name='priorityOptions'
                           id='priorityMedium'
                           value='Medium'
                           checked={this.state.priority==='Medium'}
                           onChange={this.onChangePriority} 
                    />
                    <label className='form-check-lebal'>Medium</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className='form-check-input'
                           type="radio"
                           name='priorityOptions'
                           id='priorityHigh'
                           value='High'
                           checked={this.state.priority==='High'}
                           onChange={this.onChangePriority} 
                    />
                    <label className='form-check-lebal'>High</label>
                  </div>
               
              </div>
              <div className="form-group">
                <input type='submit' value='Create todo' className='btn btn-primary'  />
              </div>
          </form>
      
      </div>
    )
  }
}
