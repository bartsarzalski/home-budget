import { connect } from 'react-redux';

import AddAndSubstract from '../../components/AddAndSubstract/AddAndSubstract';

const HomePage = ({ balance }) => {
    return (
        <div className="main">
            <h1>Manage my budget</h1>
            <span>Balance: { balance } PLN</span>
            <AddAndSubstract />
        </div>
    );
};

const mapStateToProps = (state) => {
    const { balance } = state;
    return balance;
  };

export default connect(mapStateToProps)(HomePage);