//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort()
let container = document.querySelector("#band")
for(let t of bands){
    let x = document.createElement("li")
    x.innerText = t;
    container.append(x)
}