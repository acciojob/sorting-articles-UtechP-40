//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort()
let container = document.querySelector("#bands");

for (let band of bands) {
    let li = document.createElement("li");
    li.innerText = band;
    container.append(li);
}