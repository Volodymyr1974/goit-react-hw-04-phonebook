
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ filterValue, onChangeFilter }) => (

    <label  >
        <p className={style.filter_label}> Find Contact by name</p>

        <input className={style.filter_input}
            type="text"
            value={filterValue}
            onChange={onChangeFilter}
        />
    </label >

);

Filter.prototype = {
    filterValue: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;