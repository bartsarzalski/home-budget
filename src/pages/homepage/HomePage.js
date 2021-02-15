import { connect } from 'react-redux';

import Items from '../../components/Items/Items';
import { selectIncomesTotal, selectExpensesTotal, selectItemsBalance } from '../../redux/items/items.selectors';

import './HomePage.scss';

const HomePage = ({ expensesTotal, incomesTotal, itemsBalance }) => {
    return (
        <div className="main">
            <div className="main-display">
            <h1>Manage my budget</h1>
                <div className="balance">
                    { itemsBalance
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                    }
                </div>
                <div className="income">
                    Income: { incomesTotal
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') 
                            }
                </div>
                <div className="expenses">
                    Expenses: { expensesTotal
                                    .toFixed(2)
                                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') 
                                }
                </div>
                <Items />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        expensesTotal: selectExpensesTotal(state),
        incomesTotal: selectIncomesTotal(state),
        itemsBalance: selectItemsBalance(state),
    };
  };

export default connect(mapStateToProps)(HomePage);