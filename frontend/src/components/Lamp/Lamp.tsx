import './Lamp.css';
import LampPowerProgress from '../LampPowerProgress/LampPowerProgress';
import LampPower from '../LampPower/LampPower';
import LampBattery from '../LampBattery/LampBattery';
import LampMode from '../LampMode/LampMode';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changePowerValue } from '../../store/powerSlice';

type Props = {
    groupName: string;
};

const Lamp = ({ groupName }: Props) => {
    const power = useAppSelector((state) => state.power.value);
    const dispatch = useAppDispatch();
    const powerRange = [1, 3, 10, 30, 100];
    const currentRangeStep = powerRange.indexOf(power);
    const modes = useAppSelector((state) => state.mode);

    const handlePowerIncrease = async () => {
        const value = powerRange[currentRangeStep + 1];
        await dispatch(changePowerValue({ type: 'increasePower', value }));
    };

    const handlePowerDecrease = async () => {
        const value = powerRange[currentRangeStep - 1];
        await dispatch(changePowerValue({ type: 'decreasePower', value }));
    };

    return (
        <article className="lamp">
            <h3 className="lamp__lamp-group-name">{groupName}</h3>
            <LampPowerProgress power={power} />
            <LampPower
                power={power}
                increasePower={handlePowerIncrease}
                decreasePower={handlePowerDecrease}
            />
            <LampBattery />
            <div className="lamp__mode-controls">
                {modes.map((mode, index) => (
                    <LampMode name={mode.name} value={mode.value} error={mode.error} key={index} />
                ))}
            </div>
        </article>
    );
};

export default Lamp;
