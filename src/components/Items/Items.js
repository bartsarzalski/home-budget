import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIncome, addExpense } from '../../redux/items/items.actions';
import uniqid from 'uniqid';

import './Items.scss';

class Items extends Component {
    constructor(props){
        super(props);

        this.state = {
            income: [],
            expenses: [],
            item: {
                id: '',
                description: '',
                value: 0,
            },
            selectedOption:'income',
        }
    }

    handleSubmit = () => {
        const { selectedOption, income, expenses, item } = this.state;
        const { addIncome, addExpense } = this.props;

        if (selectedOption === 'income') {
            income.push({ ...item, id: uniqid() });
        } else if (selectedOption === 'expenses') {
            expenses.push({ ...item, id: uniqid() });
        }

        this.setState({
            item: {
                id: '',
                description: '',
                value: 0,
            },
        });

        console.log(this.state)

    }

    handleChange = event => {
        const { name, value } = event.target;
        
        if (event.target.type === 'select-one') {
            this.setState({ selectedOption: value });
        } else {
            this.setState(prevState => ({
                item: {
                    ...prevState.item,
                    [name]: value,
                }
            }));
        }
       //console.log(`${this.state.selectedOption} + ${this.state.item.description} + ${this.state.item.value}`)
    };

    render() {
        return (
        <div className="group">
                <div className="add-container">
                    <select onChange={this.handleChange} defaultValue='income' className="add-type">
                        <option value="income">+</option>
                        <option value="expenses">-</option>
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
                                this.handleSubmit();
                            }
                        }}
                    />
                    <input 
                        className="add-button"
                        type="submit"  
                        onClick={this.handleSubmit} 
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