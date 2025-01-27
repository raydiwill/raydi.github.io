AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "First Kaggle Prized Competitions",
    cardImage: "../assets/images/project-page/header.png",
    description: "Home Credit - Credit Risk Model Stability",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/raydiwill/Home-Credit-KaggleC",
  },
  {
    title: "Second Kaggle Playground Competitions",
    cardImage: "../assets/images/project-page/kaggle_logo_2.png",
    description: "Kaggle Playground Series - Season 4, Episode 4.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/raydiwill/Abalone-Regression-KaggleC",
  },
  {
    title: "First Kaggle Playground Competitions",
    cardImage: "../assets/images/project-page/kaggle_logo_2.png",
    description: "Kaggle Playground Series - Season 4, Episode 3.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/raydiwill/Steel-Plate-Defect-KaggleC",
  },
  {
    title: "Telecom Deep Learning Webapp",
    title: "Telecom Deep Learning Webapp",
    cardImage: "../assets/images/project-page/web-app.png",
    description: "A Churn prediction Deep Learning app built using Python, FastAPI, Streamlit.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/raydiwill/customers-churn-ml-app",
  },
  {
    title: "Banking customer Churn prediction",
    title: "Banking customer Churn prediction",
    cardImage: "../assets/images/project-page/churn.png",
    description: "A Churn prediction Machine Learning app built using Python, FastAPI, Streamlit.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/raydiwill/customers-churn-ml-app",
  },
  {
    title: "Goodreads EDA practice",
    title: "Goodreads EDA practice",
    cardImage: "../assets/images/project-page/goodreads.jpeg",
    description: "An EDA analyzed which books is the most popular, who is the most popular author, etc.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/raydiwill/goodreads-portfolio#exploratory-data-analysis-on-goodreads-book-datasets-with-user-rating-2m-dataset-project",
  },
  {
    title: "Coursera Capstone project",
    title: "Coursera Capstone project",
    cardImage: "../assets/images/project-page/bike.jpeg",
    description: "Google Data Analytics Professional Certificate Capstone Project.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/raydiwill/Cyclistic-bike-share-analysis",
  },
  {
    title: "Web-bot scraper",
    cardImage: "../assets/images/project-page/linkedin.png",
    description: "A simple bot script using selenium to scrape job details from Linkedin job posting domain.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "https://github.com/raydiwill/linkedin_job_scraper",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Githublink}" target="_blank" class="title-link">${title}</a></h1>
                <h1 class="title"><a href="${Githublink}" target="_blank" class="title-link">${title}</a></h1>
                </div>
            <!--<ul class="menu-content"><br>
            <!--<ul class="menu-content"><br>
                  <!-- <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li> -->
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul> -->
                </ul> -->
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
