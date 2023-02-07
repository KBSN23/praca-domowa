import { type ChangeSettingData, type ChangeSettingResponse } from '../types/types';

const changeSetting = async (
    url: string,
    data: ChangeSettingData
): Promise<ChangeSettingResponse> => {
    let flag = false;
    const abortController = new AbortController();
    setTimeout(() => {
        if (!flag) {
            abortController.abort();
        }
    }, 5000);
    const { signal } = abortController;
    const fetchOptions = {
        method: 'POST',
        signal,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(url, fetchOptions);
        const result = (await response.json()) as ChangeSettingResponse;

        if (result) {
            flag = true;
            return result;
        }

        throw new Error('Something went wrong');
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }

        return { type: data.type, value: data.value, ok: false };
    }
};

export default changeSetting;
