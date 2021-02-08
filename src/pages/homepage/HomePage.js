import { connect } from 'react-redux';

import CalculateBalance from '../../components/CalculateBalance/CalculateBalance';

import './HomePage.scss';

const HomePage = ({ balance, incomes, expenses, incomes_items }) => {
    return (
        <div className="main">
            <h1>Manage my budget</h1>
            <div className="balance">
                <span>Balance: { balance } PLN</span>
                <span>Incomes: { incomes } PLN</span>
                <span>Expenses: { expenses } PLN</span>
                <div>
                    {incomes_items.id}
                </div>
            </div>
            <CalculateBalance />
        </div>
    );
};

const mapStateToProps = state => {
    const { balance, expenses, incomes, incomes_items } = state.calculations
    return {
        balance,
        expenses,
        incomes,
        incomes_items,
    };
  };

export default connect(mapStateToProps)(HomePage);