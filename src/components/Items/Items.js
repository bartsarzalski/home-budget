import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIncome, addExpense } from '../../redux/items/items.actions';
import uniqid from 'uniqid';

import './Items.scss';

class Items extends Component {
    constructor(props){
        super(props);

        this.state = {
            income:[
            ],
            expenses:[],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = event => {
        const { name, value } = event.target;
        const { selectedOption } = this.state;

        if (selectedOption === "income") {
            this.setState({ 
                income: 
                    { 
                        id: uniqid(), 
                        description: [name], 
                        value: value 
                    } 
            })
        } else if (selectedOption === "expense") {
            this.setState({ 
                expenses: 
                    { 
                        id: uniqid(), 
                        description: [name], 
                        value: value 
                    } 
                })
        }
        console.log([name] + " " + value);
    };

    render() {
        return (
        <div className="group">
                <div className="add-container">
                    <select onChange={this.handleChange} defaultValue="income" className="add-type">
                        <option value="income">+</option>
                        <option value="expense">-</option>
                    </select>
                    <input 
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text"
                        name="value"
                        placeholder="Value"
                        onChange={this.handleChange} 
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                this.handleSubmit(event);
                            }
                        }}
                    />
                    <input 
                        className="add-button"
                        type="submit"  
                        onClick={() => this.handleSubmit(this.state)} 
                        value="Save"
                    />
                </div>
        </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    addIncome: value => dispatch(addIncome(value)),
    addExpense: value => dispatch(addExpense(value)),
})

export default connect(null, mapDispatchToProps)(Items);