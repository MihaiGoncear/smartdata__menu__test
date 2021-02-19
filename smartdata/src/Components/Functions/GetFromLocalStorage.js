export function GetFavKeysFromLocalStorage() {
    return JSON.parse(localStorage.getItem('favKeys'))
}

export function GetFavSportsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('favSports'))
}