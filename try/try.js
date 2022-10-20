function showWebsites(websites) {
  let websitesContainer = document.querySelector(".website-container");
  let websitesHTML = "";
  websites.forEach((website) => {
    websitesHTML += `
        <div class="row work-row"> <!-- odd -->
        <div class="small-12 medium-6 medium-push-6 columns">
            <img src="/bootcamp-developer-portfolio/developer-challenge-portfolio/assets/images/Captures/HTML Form.png" alt="">
        </div>
        <div class="small-12 medium-5 medium-pull-7 columns">
            <div class="details details-ftm">
                <h3>HTML Form</h3>
                <p class="platform">Web</p>
                <p class="icons"><i class="fi-monitor"></i><i class="fi-tablet-portrait"></i><i class="fi-mobile"></i></p>
                <p>Simple HTML,CSS Signup form with JS Validation. A project from Axiom FSD Module-A.</p>
                <a class="my-button" href="./Axiom-Module-A/Project-1/index.html">Visit Website</a>
            </div>
        </div>
    </div>
        `;
  });
  websitesContainer.innerHTML = websitesHTML;
}

// <div class="row work-row"> <!-- odd -->
// <div class="small-12 medium-6 medium-push-6 columns">
//     <img src="/bootcamp-developer-portfolio/developer-challenge-portfolio/assets/images/Captures/HTML Form.png" alt="">
// </div>
// <div class="small-12 medium-5 medium-pull-7 columns">
//     <div class="details details-ftm">
//         <h3>HTML Form</h3>
//         <p class="platform">Web</p>
//         <p class="icons"><i class="fi-monitor"></i><i class="fi-tablet-portrait"></i><i class="fi-mobile"></i></p>
//         <p>Simple HTML,CSS Signup form with JS Validation. A project from Axiom FSD Module-A.</p>
//         <a class="my-button" href="./Axiom-Module-A/Project-1/index.html">Visit Website</a>
//     </div>
// </div>
// </div>

// when the application is loaded
getWebsites().then((data) => {
  showWebsites(data);
});
