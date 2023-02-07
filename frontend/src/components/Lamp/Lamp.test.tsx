import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Lamp from './Lamp';

describe('<Lamp/>', () => {
    it('Renders group name correctly', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <Lamp groupName="THR 07" />
            </Provider>
        );

        const textNode = await findByText('THR 07');

        expect(textNode).toBeInTheDocument();
    });
});
