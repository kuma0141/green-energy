// creating shortcut for printing
const p = console.log;

// get the references to interactive HTML elements
const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

// create array that will store the data
let pages = [
    {
        heading: "Solar Power",
        bodyText: "Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics, indirectly using concentrated solar power, or a combination. Concentrated solar power systems uselenses or mirrors and solar tracking systems to focus a large area of sunlight into a small beam",
        thumb: "img/solar-3338296_1920.png",
        alt: "1"
    },
    {
        heading: "Water Power",
        bodyText: "Hydropower or water power (from Greek: ὕδωρ, water) is power derived from the energy of falling or fast-running water, which may be harnessed for useful purposes. Since ancient times, hydropower from many kinds of watermills has been used as a renewable energy source for irrigation and the operation of various mechanical devices, such as gristmills, sawmills, textile mills, trip hammers, dock cranes, domestic lifts, and ore mills. A trompe, which produces compressed air from falling water, is sometimes used to power other machinery at a distance.",
        thumb: "img/water-4391341.svg",
        alt: "2"
    },
    {
        heading: "Wind Power",
        bodyText: "Wind power or wind energy is the use of wind to provide the mechanical power through wind turbines to turn electric generators and traditionally to do other work, like milling or pumping. Wind power is a sustainable and renewable energy, and has a much smaller impact on the environment compared to burning fossil fuels.Wind farms consist of many individual wind turbines,which are connected to the electric power transmission network.",
        thumb: "img/windmill-2516700.svg",
        alt: "3"
    }
];
// create function that handles click-event
function clickBtn(ev) {

    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton);
    p(index);

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
    p(clickedButton.id);
    // handle moving id-active to the currently clicked button 

    // remove currently present id="active"
    for (let i = 0; i < ctrlBtns.length; i++) {
        // claiming that current element in the loop containe attribute
        if (ctrlBtns[i].id) {
            // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            ctrlBtns[i].removeAttribute('id');
        }
    }

    // assign id="active" to the currently clicked button
    clickedButton.id = 'active';

    // load the corresponding data into <div class="container"></div>
    cntnr.innerHTML = `
        <h2>${pages[index].heading}</h2>
	<img src="${pages[index].thumb}" alt="${pages[index].alt}">
        <p>${pages[index].bodyText}</p>
    `;
}
// register your buttons for click event
for (let i = 0; i < ctrlBtns.length; i++) {
    ctrlBtns[i].addEventListener('click', clickBtn);
}

ctrlBtns[0].setAttribute("id", "active");
cntnr.innerHTML = `
        <h2>${pages[0].heading}</h2>
	<img src="${pages[0].thumb}" alt="${pages[0].alt}">
        <p>${pages[0].bodyText}</p>
    `;
