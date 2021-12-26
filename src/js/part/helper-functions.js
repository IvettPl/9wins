/*
open popup function
*/
export function addClassElement(elem, className) {
    if(!elem.classList.contains(className)) {
        elem.classList.add(className);
    }
}


/*
remove class elemet function
*/
export function removeClassElement(elem, className) {
    if(elem.classList.contains(className)) {
        elem.classList.remove(className);
    }
}