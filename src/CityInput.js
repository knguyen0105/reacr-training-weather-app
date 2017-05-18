import React, { Component } from 'react';


class CityInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        var value=event.target.value;
        this.setState(function() {
            return {
                city: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = '/forecast?city=' + this.state.city;
        location.href = url;
    }

    render() {
        
        return (
            <form className='cityinput' onSubmit={this.handleSubmit} >
                <input 
                    type='text' 
                    placeholder='St. George, Utah' 
                    value={this.state.city}
                    onChange={this.handleChange}
                />
                <button 
                    type='submit'
                    disabled={!this.state.city}                    
                >
                Get weather </button>
            </form>
        )
    }
}

module.exports = CityInput;