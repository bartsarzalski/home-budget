import { connect } from 'react-redux';

import { selectIncome, selectExpenses } from '../../redux/items/items.selectors';

import './ItemsOverview.scss';

const ItemsOverview = ({ income, expenses }) => (
    <div className="display__container">
        <div className="display__income">Income
            <div>{ income.map(item => 
                <span key={item.id}>{ item.description }</span>) }
            </div>
        </div>
        <div className="display__expenses">Expenses
            <div>{ expenses.map(item => 
                <span key={item.id}>{ item.description }</span>) }
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    income: selectIncome(state),
    expenses: selectExpenses(state),
});

export default connect(mapStateToProps)(ItemsOverview);