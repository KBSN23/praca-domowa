import { fireEvent, render, waitFor } from '@testing-library/react';
import LampPower from './LampPower';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { type RenderResult } from '@testing-library/react';
import * as hooks from '../../hooks/hooks';

const power = 10;
const errorClassName = 'lamp-power__button--error';
const mockUseAppSelector = jest.spyOn(hooks, 'useAppSelector');
let wrapper: RenderResult;
let handleIncreasePower: jest.Mock;
let handleDecreasePower: jest.Mock;

describe('<LampPower/>', () => {
    beforeEach(() => {
        handleIncreasePower = jest.fn();
        handleDecreasePower = jest.fn();

        // To check for the occurrence of an error
        mockUseAppSelector.mockImplementationOnce(() => 'increasePower'); // LastCommand : increasePower
        mockUseAppSelector.mockImplementationOnce(() => true); // Error : true

        wrapper = render(
            <Provider store={store}>
                <LampPower
                    decreasePower={handleDecreasePower}
                    increasePower={handleIncreasePower}
                    power={power}
                />
            </Provider>
        );
    });

    it('Renders power percentage text correctly', async () => {
        const textNode = await wrapper.findByText(`${power}%`);
        expect(textNode).toBeInTheDocument();
    });

    it('Calls the increasePower function on "power up" button click', async () => {
        const changePowerButton = await wrapper.findAllByRole('button');
        const powerUpButton = changePowerButton[0];

        fireEvent.click(powerUpButton);

        await waitFor(() => {
            expect(handleIncreasePower).toHaveBeenCalledTimes(1);
        });
    });

    it('Calls the decreasePower function on "power down" button click', async () => {
        const changePowerButton = await wrapper.findAllByRole('button');
        const powerDownButton = changePowerButton[1];

        fireEvent.click(powerDownButton);

        await waitFor(() => {
            expect(handleDecreasePower).toHaveBeenCalledTimes(1);
        });
    });

    it('Assigns the error class to the button', async () => {
        const changePowerButton = await wrapper.findAllByRole('button');
        const powerUpButton = changePowerButton[0];

        expect(powerUpButton).toHaveClass(errorClassName);
    });
});
