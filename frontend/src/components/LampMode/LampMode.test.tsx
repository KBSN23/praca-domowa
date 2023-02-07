import { render } from '@testing-library/react';
import LampMode from './LampMode';
import { type RenderResult } from '@testing-library/react';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

const modeName = 'Flashing';
const errorClassName = 'lamp-mode__error';
let wrapper: RenderResult;

describe('<LampMode/>', () => {
    beforeEach(() => {
        wrapper = render(
            <Provider store={store}>
                <LampMode name={modeName} value={true} error={true} />
            </Provider>
        );
    });
    it('Renders mode name', async () => {
        const textNode = await wrapper.findByText(modeName);

        expect(textNode).toBeInTheDocument();
    });

    it('Assigns error class to mode name', async () => {
        const textNode = await wrapper.findByText(modeName);

        expect(textNode).toHaveClass(errorClassName);
    });

    it('Renders <RadioButton/> child component', async () => {
        const radioButton = await wrapper.findByRole('button');

        expect(radioButton).toBeInTheDocument();
    });
});
