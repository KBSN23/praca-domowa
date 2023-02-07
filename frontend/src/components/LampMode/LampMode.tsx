import './LampMode.css';
import RadioButton from '../RadioButton/RadioButton';
import { ChangeSettingData } from '../../types/types';
import { useAppDispatch } from '../../hooks/hooks';
import { changeMode } from '../../store/modeSlice';

type Props = {
    name: string;
    value: boolean;
    error: boolean;
};

const LampMode = ({ name, value, error }: Props) => {
    const dispatch = useAppDispatch();

    const handleOnClick = async () => {
        const payload: ChangeSettingData = {
            type: name,
            value: !value
        };

        dispatch(changeMode(payload));
    };

    return (
        <div className="lamp-mode">
            <p className={error ? 'lamp-mode__error' : ''}>{name}</p>
            <RadioButton isError={error} isToggled={value} onClick={handleOnClick} />
        </div>
    );
};

export default LampMode;
