import './LampPower.css';
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/minus-icon.svg';
import { useAppSelector } from '../../hooks/hooks';

type Props = {
    power: number;
    increasePower: () => void;
    decreasePower: () => void;
};

const LampPower = ({ power, increasePower, decreasePower }: Props) => {
    const lastCommand = useAppSelector((state) => state.power.lastCommand);
    const error = useAppSelector((state) => state.power.errorOccurred);

    const powerUpButtonClassList = `lamp-power__button ${
        lastCommand === 'increasePower' && error ? 'lamp-power__button--error' : ''
    }`;
    const powerDownButtonClassList = `lamp-power__button ${
        lastCommand === 'decreasePower' && error ? 'lamp-power__button--error' : ''
    }`;

    const isPowerUpDisabled = power >= 100;
    const isPowerDownDisabled = power <= 1;

    return (
        <div className="lamp-power">
            <button
                type="button"
                className={powerUpButtonClassList}
                disabled={isPowerUpDisabled}
                onClick={increasePower}>
                <PlusIcon />
            </button>

            <p className="lamp-power__power-display">{power}%</p>

            <button
                type="button"
                className={powerDownButtonClassList}
                disabled={isPowerDownDisabled}
                onClick={decreasePower}>
                <MinusIcon />
            </button>
        </div>
    );
};

export default LampPower;
