import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import LampBattery from './LampBattery';

describe('<LampBattery/>', () => {
    it("Renders 'Time left' text correctly", async () => {
        const { findByText } = render(
            <Provider store={store}>
                <LampBattery />
            </Provider>
        );

        const textNode = await findByText('Time left');

        expect(textNode).toBeInTheDocument();
    });
});
