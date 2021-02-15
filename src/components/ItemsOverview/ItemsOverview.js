import { connect } from 'react-redux';

import { selectIncomes, selectExpenses } from '../../redux/items/items.selectors';

import './ItemsOverview.scss';

const ItemsOverview = ({ incomes, expenses }) => (
    <div className="display__container">
        <div className="display__income">Incomes
            <div className="item__income">{ incomes.map(item => 
                <span key={item.id}>{ item.description }</span>) }
            </div>
        </div>
        <div className="display__expenses">Expenses
            <div className="item__expense">{ expenses.map(item => 
                <span key={item.id}>{ item.description }</span>) }
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    incomes: selectIncomes(state),
    expenses: selectExpenses(state),
});

export default connect(mapStateToProps)(ItemsOverview);