// store the thmes in LocalStorage
export const setToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

// retrieve the themes from LocalStorage
export const getFromLS = key => {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}