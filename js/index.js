const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
// header items
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("a");

// cta items
const headerText = document.querySelector("h1");
const button = document.querySelector("button");
const ctaImage = document.getElementById("cta-img");

// Main Content Items
const midImage = document.querySelector(".middle-img");
const textBoxes = document.querySelectorAll(".text-content");
const featuresTitle = textBoxes[0].children[0];
const featuresPar = textBoxes[0].children[1];
const aboutTitle = textBoxes[1].children[0];
const aboutPar = textBoxes[1].children[1];
const servicesTitle = textBoxes[2].children[0];
const servicesPar = textBoxes[2].children[1];
const productTitle = textBoxes[3].children[0];
const productPar = textBoxes[3].children[1];
const visionTitle = textBoxes[4].children[0];
const visionPar = textBoxes[4].children[1];

// Contact Items
const contactItems = document.querySelector(".contact").children;
const contactTitle = contactItems[0];
const contactAddress = contactItems[1];
const contactNumber = contactItems[2];
const contactEmail = contactItems[3];

// Footer Items
const copyright = document.querySelector("footer").children[0];

// Stretch Items
const makeButton = function () {
  const button = document.createElement("button");
  button.textContent = "Manipulate the DOM!";
  button.style.textAlign = "center";
  button.style.marginLeft = "42.55%";
  button.style.marginRight = "42.55%";
  button.style.marginTop = "2rem";
  return button;
};
const masterButton = makeButton();
const insertButton = (function () {
  body = document.querySelector("body");
  body.prepend(masterButton);
})();
masterButton.addEventListener("click", function () {
  manipulateDom();
  masterButton.style.display = "none";
});

// header DOM Manipulation
function manipulateDom() {
  const headerFunc = (function () {
    navItems.forEach(function (cur, i) {
      cur.textContent = siteContent.nav[`nav-item-${i}`];
      cur.style.color = "green";
    });
  })();

  // CTA DOM Manipulation
  const ctaFunc = (function () {
    headerText.textContent = siteContent.cta.h1;
    button.textContent = siteContent.cta.button;
    ctaImage.setAttribute("src", siteContent.cta["img-src"]);
  })();

  // Main Content DOM Manipulation
  const mainFunc = (function () {
    const main = siteContent["main-content"];
    midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
    featuresTitle.textContent = main["features-h4"];
    aboutTitle.textContent = main["about-h4"];
    servicesTitle.textContent = main["services-h4"];
    productTitle.textContent = main["product-h4"];
    visionTitle.textContent = main["vision-h4"];

    featuresPar.textContent = main["features-content"];
    aboutPar.textContent = main["about-content"];
    servicesPar.textContent = main["services-content"];
    productPar.textContent = main["product-content"];
    visionPar.textContent = main["vision-content"];
  })();

  // Contact DOM Manipulation
  const contactFunc = (function () {
    const contact = siteContent.contact;
    contactTitle.textContent = contact["contact-h4"];
    contactAddress.textContent = contact.address;
    contactNumber.textContent = contact.phone;
    contactEmail.textContent = contact.email;
  })();

  // Footer DOM Manipulation
  const footerFunc = (function () {
    copyright.textContent = siteContent.footer.copyright;
    copyright.style.paddingBottom = "20px";
  })();

  // Adding new items to nav

  const addNewNavItems = (function () {
    const makeNewAnchor = function (anchor) {
      const element = document.createElement("a");
      element.textContent = anchor;
      element.setAttribute("href", "#");
      element.style.color = "green";
      return element;
    };

    const contact = makeNewAnchor("Contact");
    const team = makeNewAnchor("Team");

    nav.appendChild(contact);
    nav.appendChild(team);
  })();
}
