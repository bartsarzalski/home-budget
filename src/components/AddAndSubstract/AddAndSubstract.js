import React from 'react';
import { connect } from 'react-redux';
import { addToBalance ,substractFromBalance } from '../../redux/balance/balance.actions';

import './AddAndSubstract.scss';

const AddAndSubstract = ({ addToBalance, substractFromBalance }) => {

    return (
        <div className="group">
            <form onSubmit={() => addToBalance(10)}>
                <input type="text" id="add" name="add" />
                <button>+</button>
            </form>
            <form onSubmit={() => substractFromBalance(10)}>
                <input type="text" id="substract" name="substract" />
                <button>-</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addToBalance: value => dispatch(addToBalance(value)),
    substractFromBalance: value => dispatch(substractFromBalance(value)),
})

export default connect(null, mapDispatchToProps)(AddAndSubstract);