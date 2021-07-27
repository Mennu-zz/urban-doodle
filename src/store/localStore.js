import React, { useCallback } from "react";

function useLocalStore(defaultValue, key) {
    const [value, setValue] = React.useState(
        () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    const setState = useCallback((value) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }, [key]);

    return [value, setState];
}

export default useLocalStore;