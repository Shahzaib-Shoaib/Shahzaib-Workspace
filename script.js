function getWebsites() {
    return fetch("section1.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
  
  function showWebsites(websites) {
    let websitesContainer = document.querySelector(".websites-container");
    let websitesHTML = "";
    websites.forEach((website) => {
      websitesHTML += `
                <div class="row work-row"> 
                  <div class= ${website.imgClass} >
                      <img src=${website.imgSrc} alt="">
                  </div>
                  <div class=${website.detailsClass}>
                      <div class="details details-ftm">
                          <h3>${website.name}</h3>
                          <p class="platform">Web</p>
                          <p class="icons"><i class="fa-solid fa-desktop"></i><i class="fa-solid fa-tablet-screen-button"></i><i class="fa-solid fa-mobile-screen"></i></p>
                          <p>${website.detail}</p>
                          <a class="my-button" href=${website.linkUrl}>Visit Website</a>
                          
                      </div>
                  </div>
              </div>
          `;
    });
    websitesContainer.innerHTML = websitesHTML;
  }
  
  //   <p class="icons"><i class="fi-monitor"></i><i class="fa-solid fa-desktop"></i><i class="fi-tablet-portrait"></i><i class="fi-mobile"></i></p>

  // when the application is loaded
  getWebsites().then((data) => {
    showWebsites(data);
    console.log(data);
  });
  
  ////////////////////////////////////////////////////////////////
  function getWebsites2() {
    return fetch("section2.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
  
  function showWebsites2(websites) {
    let websitesContainer = document.querySelector(".websites-container2");
    let websitesHTML = "";
    websites.forEach((website) => {
      websitesHTML += `
                <div class="row work-row"> 
                  <div class= ${website.imgClass} >
                      <img src=${website.imgSrc} alt="">
                  </div>
                  <div class=${website.detailsClass}>
                      <div class="details details-ftm">
                          <h3>${website.name}</h3>
                          <p class="platform">Web</p>
                          <p class="icons"><i class="fa-solid fa-desktop"></i><i class="fa-solid fa-tablet-screen-button"></i><i class="fa-solid fa-mobile-screen"></i></p>
                          <p>${website.detail}</p>
                          <a class="my-button" href=${website.linkUrl}>Visit Website</a>
                      </div>
                  </div>
              </div>
          `;
    });
    websitesContainer.innerHTML = websitesHTML;
  }
  
  
  // when the application is loaded
  getWebsites2().then((data) => {
    showWebsites2(data);
    console.log(data);
  });
  
  
  
  ////////////////////////////////////////////////////////////
  
  function getWebsites3() {
    return fetch("section3.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
  
  function showWebsites3(websites) {
    let websitesContainer = document.querySelector(".websites-container3");
    let websitesHTML = "";
    websites.forEach((website) => {
      websitesHTML += `
                <div class="row work-row"> 
                  <div class= ${website.imgClass} >
                      <img src=${website.imgSrc} alt="">
                  </div>
                  <div class=${website.detailsClass}>
                      <div class="details details-ftm">
                          <h3>${website.name}</h3>
                          <p class="platform">Web</p>
                          <p class="icons"><i class="fa-solid fa-desktop"></i><i class="fa-solid fa-tablet-screen-button"></i><i class="fa-solid fa-mobile-screen"></i></p>
                          <p>${website.detail}</p>
                          <a class="my-button" href=${website.linkUrl}>Visit Website</a>
                      </div>
                  </div>
              </div>
          `;
    });
    websitesContainer.innerHTML = websitesHTML;
  }
  
  
  // when the application is loaded
  getWebsites3().then((data) => {
    showWebsites3(data);
    console.log(data);
  });
  
  
  
  
  ////////////////////////////////////////////////////////////
  
  function getWebsites4() {
    return fetch("section4.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
  
  function showWebsites4(websites) {
    let websitesContainer = document.querySelector(".websites-container4");
    let websitesHTML = "";
    websites.forEach((website) => {
      websitesHTML += `
                <div class="row work-row"> 
                  <div class= ${website.imgClass} >
                      <img src=${website.imgSrc} alt="">
                  </div>
                  <div class=${website.detailsClass}>
                      <div class="details details-ftm">
                          <h3>${website.name}</h3>
                          <p class="platform">Web</p>
                          <p class="icons"><i class="fa-solid fa-desktop"></i><i class="fa-solid fa-tablet-screen-button"></i><i class="fa-solid fa-mobile-screen"></i></p>
                          <p>${website.detail}</p>
                          <a class="my-button" href=${website.linkUrl}>Visit Website</a>
                      </div>
                  </div>
              </div>
          `;
    });
    websitesContainer.innerHTML = websitesHTML;
  }
  
  
  // when the application is loaded
  getWebsites4().then((data) => {
    showWebsites4(data);
    console.log(data);
  });
  
  