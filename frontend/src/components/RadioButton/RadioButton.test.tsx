import { fireEvent, render, waitFor } from '@testing-library/react';
import RadioButton from './RadioButton';

const onClick = jest.fn();

describe('<RadioButton/>', () => {
    it('Calls the onClick function', async () => {
        const wrapper = render(<RadioButton onClick={onClick} isToggled={false} isError={false} />);

        const { findByRole } = wrapper;
        const radioButton = await findByRole('button');
        fireEvent.click(radioButton);

        await waitFor(() => {
            expect(onClick.mock.calls).toHaveLength(1);
        });
    });

    it('Assigns a css class if isToggled prop is equal to true', async () => {
        const wrapper = render(<RadioButton onClick={onClick} isToggled isError={false} />);
        const { findByRole } = wrapper;

        const radioButton = await findByRole('button');
        const radioSwitch = radioButton.querySelector('div');

        fireEvent.click(radioButton);
        await waitFor(() => {
            expect(radioSwitch).toHaveClass('radio-button__switch--toggled');
        });
    });

    it('Assigns a css class if isError prop is equal to true', async () => {
        const wrapper = render(<RadioButton onClick={onClick} isToggled={false} isError />);
        const { findByRole } = wrapper;

        const radioButton = await findByRole('button');
        const radioSwitch = radioButton.querySelector('div');

        fireEvent.click(radioButton);
        await waitFor(() => {
            expect(radioSwitch).toHaveClass('radio-button__switch--error');
        });
    });
});
