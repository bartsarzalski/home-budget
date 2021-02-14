import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIncome, addExpense } from '../../redux/items/items.actions';
import uniqid from 'uniqid';

import './Items.scss';

class Items extends Component {
    constructor(props){
        super(props);

        this.state = {
            item: {
                id: '',
                description: '',
                value: '',
            },
            selectedOption:'income',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { selectedOption, item } = this.state;
        const { addIncome, addExpense } = this.props;

        if (selectedOption === 'income') {
            addIncome({...item, id: uniqid()});
        } else if (selectedOption === 'expenses') {
            addExpense({...item, id: uniqid()});
        }

        this.setState({
            item: {
                id: '',
                description: '',
                value: '',
            },
        });
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
    };

    render() {
        const { description, value } = this.state.item;

        return (
        <div className="group">
                <div className="add-container">
                    <form
                        onSubmit={this.handleSubmit}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                this.handleSubmit();
                            }
                        }}
                    >
                        <select onChange={this.handleChange} defaultValue='income' className="add-type">
                            <option value="income">+</option>
                            <option value="expenses">-</option>
                        </select>
                        <input 
                            type="text"
                            name="description"
                            value={description}
                            placeholder="Description"
                            onChange={this.handleChange} 
                            required
                        />
                        <input 
                            type="text"
                            name="value"
                            value={value}
                            placeholder="Value"
                            onChange={this.handleChange} 
                            required
                        />
                        <input 
                            className="add-button"
                            type="submit"  
                            value="Save"
                        />
                    </form>
                </div>
                <div className="display__container">
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