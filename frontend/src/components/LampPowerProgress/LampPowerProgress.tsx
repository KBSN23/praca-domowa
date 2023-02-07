import './LampPowerProgress.css';

type Props = {
    power: number;
};

const LampPowerProgress = ({ power }: Props) => {
    const createProgressAtValue = (value: number) => {
        if (power >= value) {
            return <div className="lamp-power-progress__value" />;
        }

        return null;
    };

    return (
        <div className="lamp-power-progress">
            <div className="lamp-power-progress__container">{createProgressAtValue(1)}</div>
            <div className="lamp-power-progress__container">{createProgressAtValue(3)}</div>
            <div className="lamp-power-progress__container">{createProgressAtValue(10)}</div>
            <div className="lamp-power-progress__container">{createProgressAtValue(30)}</div>
            <div className="lamp-power-progress__container">{createProgressAtValue(100)}</div>
        </div>
    );
};

export default LampPowerProgress;
