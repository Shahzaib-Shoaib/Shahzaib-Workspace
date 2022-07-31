
function getWebsites(){
    return fetch("try.json")
    .then(response => response.json())
    .then(data => {
        return data
    })
}
function showWebsites(websites){
    let websitesContainer = document.querySelector(".websites-container");
    let websitesHTML = "";
    websites.forEach(website => {
        websitesHTML += `
        <div class="${website.container}"> 
        <div class="${website.imgContainer}">
            <img src="${website.imgSrc}" alt="">
        </div>
        <div class="${website.detailContainerClass}">
            <div class="details details-ftm">
                <h3>${website.name}</h3>
                <p class="platform">Web</p>
                <p class="icons"><i class="fi-monitor"></i><i class="fi-tablet-portrait"></i><i class="fi-mobile"></i></p>
                <p>${website.description}</p>
                <a class="my-button" href="${website.webUrl}">Visit Website</a>
        
            </div>
        </div>
        </div>`
    })
    websitesContainer.innerHTML = websitesHTML;
}


// when the application is loaded
getWebsites().then(data => {
    showWebsites(data);
});



// <div class="row work-row"> <!-- even -->
// 				<div class="small-12 medium-6 columns">
// 					<img src="/bootcamp-developer-portfolio/developer-challenge-portfolio/assets/images/Captures/3 Column Preview Card Component.png" alt="">
// 				</div>
// 				<div class="small-12 medium-5 medium-offset-1 columns">
// 					<div class="details details-ftm">
// 						<h3>3 Column preview card component</h3>
// 						<p class="platform">Web</p>
// 						<p class="icons"><i class="fi-monitor"></i><i class="fi-tablet-portrait"></i><i class="fi-mobile"></i></p>
// 						<p>3 Column preview card component made with HTML and CSS. A project idea from Frontend Mentor.</p>
// 						<a class="my-button" href="./My-Projects/3-Column preview card component/index.html">Visit Website</a>

// 					</div>
// 				</div>
// 			</div>

// 			<div class="row work-row"> <!-- odd -->
// 				<div class="small-12 medium-6 medium-push-6 columns">
// 					<img src="/bootcamp-developer-portfolio/developer-challenge-portfolio/assets/images/Captures/Profile Card Component.png" alt="">
// 				</div>
// 				<div class="small-12 medium-5 medium-pull-7 columns">
// 					<div class="details details-ftm">
// 						<h3>Profile Card Component</h3>
// 						<p class="platform">Web</p>
// 						<p class="icons"><i class="fi-monitor"></i><i class="fi-tablet-portrait"></i><i class="fi-mobile"></i></p>
// 						<p>Profile Card Component made with HTML and CSS. A project idea from Frontend Mentor.</p>
// 						<a class="my-button" href="./My-Projects/Profile Card Component/index.html">Visit Website</a>
// 					</div>
// 				</div>
// 			</div>


