import { connect } from 'react-redux';

import Items from '../../components/Items/Items';

import './HomePage.scss';

const HomePage = ({ income, expenses }) => {
    return (
        <div className="main">
            <div className="main-display">
            <h1>Manage my budget</h1>
                <div className="balance">+ 3, 000.00</div>
                <div className="income">Income: 1, 000.00</div>
                <div className="expenses">Expenses: 400.00</div>
                <Items />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    const { expenses, income } = state.data
    return {
        expenses,
        income,
    };
  };

export default connect(mapStateToProps)(HomePage);