const main = document.getElementById('main');



const data = [
    // For Shoe 1
    {
        name:'Nike Air VaporMax 2021 FK',
        image: './img/air-vapormax-2021-fk-mens-shoes-NpTfFz.jpg',
        category: "Men's Shoes",
        price:'200',
    },
    // 
    {
        name:'Nike Air Max 2021',
        image: './img/air-max-2021-mens-shoes-8F4Sk5.jpg',
        category: "Men's Shoes",
        price:'160',

    },
    //
    {
        name:'Nike Pegasus Trail 3',
        image: './img/pegasus-trail-3-mens-trail-running-shoes-QPcRqp.jpg',
        category: "Men's Shoes",
        price:'130',
    },
    // 
    {
        name:'Nike Air Monarch IV',
        image: './img/air-monarch-iv-mens-training-shoes-lPtRrS.jpg',
        category: "Men's Shoes",
        price:'75',
    },
    // 
    {
        name:'Jordan Point Lane',
        image: './img/jordan-point-lane-mens-shoes-PPMHdC.jpg',
        category: "Men's Shoes",
        price:'140',
    },
    // 
    {
        name:'Nike Air Max 270',
        image: './img/air-max-270-mens-shoes-KkLcGR.jpg',
        category: "Men's Shoes",
        price:'150',
    },
    // 
    {
        name:'Nike Air Zoom Pegasus 38',
        image: './img/air-zoom-pegasus-38-mens-running-shoe-jQfFVs.jpg',
        category: "Men's Shoes",
        price:'180',
    },
    // 
    {
        name:'Nike Air Max 95 Essential',
        image: './img/air-max-95-essential-mens-shoes-V8wCh2.jpg',
        category: "Men's Shoes",
        price:'170',
    },
    // 
    {
        name:'Zion 1',
        image: './img/zion-1-basketball-shoes-bJ0hLJ.jpg',
        category: "Men's Shoes",
        price:'120',
    },
    // 
    {
        name:'Air Max BW',
        image: './img/air-max-bw-los-angeles-release-date.jpg',
        category: "Men's Shoes",
        price:'140',
    },
    // 
    {
        name:'Nike Air Max 96 II',
        image: './img/air-max-96-ii-mens-shoes-CGqLnr.jpg',
        category: "Men's Shoes",
        price:'160',
    },
    // 
    {
        name:"Nike Air Force 1 High '07",
        image: './img/air-force-1-high-07-mens-shoes-CGjvNW.jpg',
        category: "Men's Shoes",
        price:'100',
    },
];

// Function to create UI elements for pre-defined text to speech
function createUIElement(predefinedObject) {
    const { name, image, category,price } = predefinedObject;
    // Create the DOM Element
    const div = document.createElement('div');
    // Apply CSS to the div
    div.classList.add('card');
    // Add HTML content in the div
    div.innerHTML = `
        
        <img src="${image}" alt=${category} />
        <p class="product-name">${name} </p>
        <p class="category">${category}</p>
        <span class="price">$${price}</span>
    `;
    
    // Render in the UI
    main.appendChild(div);
};

// Run a loop on the data array to display the images in the UI
data.forEach(createUIElement);
