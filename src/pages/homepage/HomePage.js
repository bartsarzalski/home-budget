import { connect } from 'react-redux';

import CalculateBalance from '../../components/CalculateBalance/CalculateBalance';

import './HomePage.scss';

const HomePage = ({balance, incomes, expenses}) => {
    return (
        <div className="main">
            <h1>Manage my budget</h1>
            <div className="balance">
                <span>Balance: { balance } PLN</span>
                <span>Incomes: { incomes } PLN</span>
                <span>Expenses: { expenses } PLN</span>
            </div>
            <CalculateBalance />
        </div>
    );
};

const mapStateToProps = state => {
    const { balance, expenses, incomes } = state.calculations
    return {
        balance,
        expenses,
        incomes,
    };
  };

export default connect(mapStateToProps)(HomePage);