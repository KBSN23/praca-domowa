export type ModeName = 'Night Vision' | 'Dusk Till Dawn' | 'Flashing';

export type Mode = {
    name: ModeName;
    value: boolean;
    error: boolean;
};

export type ChangeSettingData = {
    value: number | boolean;
    type: string;
};

export type ChangeSettingResponse = {
    ok: boolean;
    type: string;
    value: number | boolean;
};

export type ErrorType = {
    type: undefined | string;
};
