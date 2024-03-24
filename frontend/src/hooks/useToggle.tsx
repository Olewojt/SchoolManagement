import { useState } from 'react';

export const useToggle = (initialState: boolean): [boolean, () => void] => {
    const [checked, setChecked] = useState<boolean>(initialState);

    const handleChange = () => {
        setChecked(prevState => !prevState);
    };

    return [checked, handleChange];
};


//przyjmuje dwie wartości checked<boolean> oraz handleChange(funkcja onChange)