import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateExpenses , calculateIncomes } from '../../redux/balance/balance.actions';

import './CalculateBalance.scss';

class CalculateBalance extends Component {
    constructor(props){
        super(props);

        this.state = {
            incomes: 0,
            expenses: 0,
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { calculateExpenses, calculateIncomes } = this.props; 

        return (
        <div className="group">
            <form onSubmit={() => calculateExpenses(this.state.expenses)}>
                <input 
                    onChange={this.handleChange}
                    type="text" 
                    value={this.state.expenses}
                    name="expenses" />
                <button>+</button>
            </form>
            <form onSubmit={() => calculateIncomes(this.state.incomes)}>
                <input 
                    onChange={this.handleChange}
                    type="text" 
                    value={this.state.incomes}
                    name="incomes" />
                <button>-</button>
            </form>
        </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    calculateExpenses: value => dispatch(calculateExpenses(value)),
    calculateIncomes: value => dispatch(calculateIncomes(value)),
})

export default connect(null, mapDispatchToProps)(CalculateBalance);