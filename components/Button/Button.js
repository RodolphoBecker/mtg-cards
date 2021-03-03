import s from './Button.module.scss'

import PropTypes from 'prop-types';

const Button = ({ children, color, isLoading, onClick, size }) => {
    const defaultClasses = `${s.default} ${s[color]} ${s[size]}`

    return(
        <button 
            className={defaultClasses} 
            onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    color: PropTypes.oneOf(['purple','blue', 'red']),
    size: PropTypes.oneOf(['s', 'm', 'l'])
}

Button.defaultProps = {
    type: 'button',
    color: 'purple',
    size: 's',
    onClick: () => {}
}

export default Button