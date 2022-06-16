export function filterSearch(videoList, searchVal) {
    if (searchVal === "") return [...videoList];

    else return [...videoList].filter((video) => video?.title?.toLowerCase().includes(searchVal));
}

export function debounce(cb, t = 500) {
    let interval;

    return (...args) => {
        clearInterval(interval);
        interval = setTimeout(() => {
            cb(...args);
        }, t);
    }
}

export const filterSearchDebounced = debounce(filterSearch);