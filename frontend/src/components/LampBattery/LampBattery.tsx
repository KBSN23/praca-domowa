import './LampBattery.css';
import { ReactComponent as BatteryIcon } from '../../assets/battery-icon.svg';
import { useAppSelector } from '../../hooks/hooks';

const LampBattery = () => {
    const battery = useAppSelector((state) => state.battery.value);
    return (
        <div className="lamp-battery">
            <div style={{ width: `${battery}%` }} className="lamp-battery__progress" />
            <BatteryIcon />
            <p>Time left</p>
        </div>
    );
};
export default LampBattery;
