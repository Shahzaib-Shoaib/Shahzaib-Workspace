const main = document.getElementById('main');



const data = [
    {
        name:'Nike Air VaporMax 2021 FK',
        image: './products/product-img/air-vapormax-2021-fk-mens-shoes-NpTfFz.jpg',
        category: "Men's Shoes",
        price:'200',
        link:'./products/product list/product-1.html'
    },
    // 
    {
        name:'Nike Air Max 2021',
        image: './products/product-img/air-max-2021-mens-shoes-8F4Sk5.jpg',
        category: "Men's Shoes",
        price:'160',
        link:'./products/product list/product-2.html'

    },
    //
    {
        name:'Nike Pegasus Trail 3',
        image: './products/product-img/pegasus-trail-3-mens-trail-running-shoes-QPcRqp.jpg',
        category: "Men's Shoes",
        price:'130',
        link:'./products/product list/product-3.html'
    },
    // 
    {
        name:'Nike Air Monarch IV',
        image: './products/product-img/air-monarch-iv-mens-training-shoes-lPtRrS.jpg',
        category: "Men's Shoes",
        price:'75', 
        link:'./products/product list/product-4.html'

    },
    // 
    {
        name:'Jordan Point Lane',
        image: './products/product-img/jordan-point-lane-mens-shoes-PPMHdC.jpg',
        category: "Men's Shoes",
        price:'140',
        link:'./products/product list/product-5.html'
    },
    // 
    {
        name:'Nike Air Max 270',
        image: './products/product-img/air-max-270-mens-shoes-KkLcGR.jpg',
        category: "Men's Shoes",
        price:'150',
        link:'./products/product list/product-6.html'
    },
    // 
    {
        name:'Nike Air Zoom Pegasus 38',
        image: './products/product-img/air-zoom-pegasus-38-mens-running-shoe-jQfFVs.jpg',
        category: "Men's Shoes",
        price:'180',
        link:'./products/product list/product-7.html'
    },
    // 
    {
        name:'Nike Air Max 95 Essential',
        image: './products/product-img/air-max-95-essential-mens-shoes-V8wCh2.jpg',
        category: "Men's Shoes",
        price:'170',
        link:'./products/product list/product-8.html'
    },
    // 
    {
        name:'Zion 1',
        image: './products/product-img/zion-1-basketball-shoes-bJ0hLJ.jpg',
        category: "Men's Shoes",
        price:'120',
        link:'./products/product list/product-9.html'
    },
    // 
    {
        name:'Air Max BW',
        image: './products/product-img/air-max-bw-los-angeles-release-date.jpg',
        category: "Men's Shoes",
        price:'140',
        link:'./products/product list/product-10.html'
    },
    // 
    {
        name:'Nike Air Max 96 II',
        image: './products/product-img/air-max-96-ii-mens-shoes-CGqLnr.jpg',
        category: "Men's Shoes",
        price:'160',
        link:'./products/product list/product-11.html'
    },
    // 
    {
        name:"Nike Air Force 1 High '07",
        image: './products/product-img/air-force-1-high-07-mens-shoes-CGjvNW.jpg',
        category: "Men's Shoes",
        price:'100',
        link:'./products/product list/product-12.html'
    },
];

// Function to create UI elements for pre-defined text to speech
function createUIElement(predefinedObject) {
    const { name, image, category,price,link } = predefinedObject;
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
     <a class="addproduct" href="${link}"><button class="addbtn">Add to Bag</button></a>
    `;
    
    // Render in the UI
    main.appendChild(div);
    
};

// Run a loop on the data array to display the content in the UI
data.forEach(createUIElement);



