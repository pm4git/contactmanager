import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const TextInputGroup = (props) => {
    const {label, type, name, placeHolder, value, onChange, error} = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} className={classnames('form-control', {'is-invalid': error})}
                   placeholder={placeHolder} value={value} onChange={onChange}/>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextInputGroup.defaultProps = {
    type: "text"
};

export default TextInputGroup;
