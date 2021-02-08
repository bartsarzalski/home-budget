import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateExpenses , calculateIncomes, addIncome } from '../../redux/balance/balance.actions';

import './CalculateBalance.scss';

class CalculateBalance extends Component {
    constructor(props){
        super(props);

        this.state = {
            incomes: '',
            expenses: '',
        }
    }
    
    handleExpenses = event => {
        event.preventDefault();

        const { expenses } = this.state;
        const { calculateExpenses } = this.props;

        calculateExpenses(parseInt(expenses));
        this.setState({ expenses: '' })
    }

    handleIncomes = event => {
        event.preventDefault();

        const { incomes } = this.state;
        const { calculateIncomes } = this.props;

        calculateIncomes(parseInt(incomes));
        this.setState({ incomes: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        console.log([name] +" "+ value)
    }

    render() {
        const { addIncome } = this.props;
        const object = {
            id: 0,
            amount: 0,
            name: "",
        }
        return (
        <div className="group">
            <div className="add-incomes">
                <input 
                    onChange={this.handleChange}
                    type="text" 
                    value={this.state.incomes}
                    name="incomes"
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            this.handleIncomes(event);
                        }
                    }} />
                <div className="add-incomes-button" onClick={this.handleIncomes}></div>
            </div>
            <div className="add-expenses">
                <input 
                    onChange={this.handleChange}
                    type="text" 
                    value={this.state.expenses}
                    name="expenses" 
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            this.handleExpenses(event);
                        }
                    }}/>
                <div className="add-expenses-button" onClick={this.handleExpenses} />
            </div>
            <div onClick={() => addIncome(object)}>Add object</div>
        </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    calculateExpenses: value => dispatch(calculateExpenses(value)),
    calculateIncomes: value => dispatch(calculateIncomes(value)),
    addIncome: value => dispatch(addIncome(value)),
})

export default connect(null, mapDispatchToProps)(CalculateBalance);