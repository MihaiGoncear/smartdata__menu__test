export function GetKeyFromLocalStorage() {
    return JSON.parse(localStorage.getItem('fav'))
}