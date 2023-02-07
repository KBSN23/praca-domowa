import './RadioButton.css';

type Props = {
    isError: boolean;
    isToggled: boolean;
    onClick: () => void;
} & typeof defaultProps;

const defaultProps = {
    isError: false
};

const RadioButton = ({ onClick, isError, isToggled }: Props) => {
    const handleOnKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            onClick();
        }
    };
    return (
        <div
            className="radio-button"
            onClick={onClick}
            onKeyDown={handleOnKeyDown}
            role="button"
            tabIndex={0}>
            <div
                className={`radio-button__switch ${
                    isToggled ? 'radio-button__switch--toggled' : ''
                } ${isError ? 'radio-button__switch--error' : ''}`}
            />
        </div>
    );
};

RadioButton.defaultProps = defaultProps;

export default RadioButton;
