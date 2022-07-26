let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p");

//create text for paragraph
copyright.innerHTML = `Larasati Sodjati ${thisYear}`;

//insert paragraph to webpage
footer.appendChild(copyright);

//list technical skills
let skills = ["Customer Service and Relationship Management", "SAP and Salesforce Proficient", "Clerical Support", "Data Entry", 
"Microsoft Word, PowerPoint, Excel, and Outlook"];

//select the skills section by id
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

//create a loop
for(let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

