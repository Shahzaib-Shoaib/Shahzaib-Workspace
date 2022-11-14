function getWebsites() {
  return fetch("data.json")
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
						<p class="icons"><i class="fi-monitor"></i><i class="fi-tablet-portrait"></i><i class="fi-mobile"></i></p>
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
getWebsites().then((data) => {
  showWebsites(data);
});

// <div class="job-tile">
// <div class="top">
//     <img src="${job.logo}" />
//     <span class="material-icons more_horiz">more_horiz</span>
// </div>
// <div class="rolename">
//     <span>${job.roleName}</span>
// </div>
// <div class="description">
//     <span>${job.requirements.content}</span>
// </div>
// <div class="buttons">
//     <div class="button apply-now">
//         Apply Now
//     </div>
//     <div class="button">
//         Message
//     </div>
// </div>
// </div>
