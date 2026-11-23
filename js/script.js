// Skills data — name + one line about what I actually used it for
const skills = {
  Cloud: [
    ["AWS S3", "Configured S3 in my AWS re/Start labs."],
    ["AWS IAM", "Configured IAM in my AWS re/Start labs."],
    ["Linux", "Command line practice through scenario-based labs."],
    ["Networking and security", "Covered the basics in re/Start."],
    ["Oracle Cloud (OCI)", "Certified Foundations Associate, December 2025."]
  ],
  Code: [
    ["Python", "Used in re/Start to automate manual tasks."],
    ["JavaScript", "ChemScan, HOPE Inc. CMS and Lumi."],
    ["TypeScript", "NEU Library Visitor Log."],
    ["HTML, CSS and Bootstrap", "ChemScan pages and this portfolio."],
    ["React and Tailwind CSS", "Front-end tools from my web projects."],
    ["Java", "TaskMaster, a task planner for students."],
    ["Git and GitHub", "All my projects live on my GitHub."]
  ],
  Data: [
    ["SQL", "Cognitive Class SQL and Relational Databases 101."],
    ["MySQL, IBM Db2, Oracle Database", "Coursework and certifications."],
    ["Supabase", "The database behind ChemScan."],
    ["Power BI and Excel", "Reports and dashboards. Intro to Power BI certificate."],
    ["Microsoft Fabric", "Two Microsoft Learn certificates, January 2026."]
  ],
  AI: [
    ["AWS PartyRock", "Built generative AI apps and earned the Data Analysis project badge."],
    ["Prompt engineering", "Practiced in the AWS AI and ML Scholars program."],
    ["Agentic AI", "Studied how autonomous AI workflows fit business use cases."],
    ["AI fluency", "Anthropic AI Fluency Framework and Foundations, April 2026."]
  ]
};

function showSkills(group) {
  const list = document.getElementById("skillList");
  list.innerHTML = "";
  skills[group].forEach(function (item) {
    list.innerHTML += "<li><b>" + item[0] + "</b><span>" + item[1] + "</span></li>";
  });
}

// Certificates list — entries without a link still show, just not clickable
const certificates = [
  { title: "AWS AI & ML Scholars, 2026 Challenge Completion", issuer: "Udacity", date: "Mar 2026", group: "Cloud",
    link: "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/Challenge%20Completion%20Badge_Light.png" },
  { title: "Oracle Cloud Infrastructure Certified Foundations Associate", issuer: "Oracle", date: "Dec 2025", group: "Cloud",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1C378F7D613993DBE087A7B9BA15E5F3D8C266D2A66CEB0DD5F4A51D044C0E98" },
  { title: "Oracle Cloud Infrastructure Certified AI Foundations Associate", issuer: "Oracle", date: "Dec 2025", group: "Cloud",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=005CFBAA1D1A03C693AD2D8D0CD9901C891C729DEDB7BEEE662350F3EE99B838" },
  { title: "Oracle Data Platform Certified Foundations Associate", issuer: "Oracle", date: "Dec 2025", group: "Data",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BA7EDA1C25F2F78DCFAF2A08B84B0681CD0B54B14466D398FE9591ADDC93392B" },
  { title: "Load Data into a Microsoft Fabric Data Warehouse", issuer: "Microsoft", date: "Jan 2026", group: "Data",
    link: "https://learn.microsoft.com/en-us/users/jomarauditor-2692/achievements/37pcrbeh" },
  { title: "Introduction to End-to-End Analytics using Microsoft Fabric", issuer: "Microsoft Learning", date: "Jan 2026", group: "Data",
    link: "https://learn.microsoft.com/en-us/users/jomarauditor-2692/achievements/hz49rd38" },
  { title: "Google Analytics Certification", issuer: "Google", date: "Jan 2026", group: "Data",
    link: "https://skillshop.credential.net/426ab901-0723-42b1-9f1b-33bc437f2eaf#acc.NzqgMiyW" },
  { title: "Intro to Power BI", issuer: "Data Analytics Philippines", date: "Jan 2026", group: "Data", link: "" },
  { title: "Data Future PH 2025", issuer: "Data Analytics Philippines", date: "Nov 2025", group: "Data", link: "" },
  { title: "SQL and Relational Databases 101", issuer: "Cognitive Class", date: "Nov 2025", group: "Data",
    link: "https://courses.cognitiveclass.ai/certificates/95fde3b647c3491ebdb5a2bc0cba806a" },
  { title: "AI Skills Fest 2026", issuer: "Microsoft", date: "Jun 2026", group: "AI",
    link: "https://www.credly.com/badges/8d68c079-9e5c-414a-9000-167d7b6bcd94" },
  { title: "AI Ready ASEAN Programme", issuer: "Break the Fake Movement", date: "May 2026", group: "AI", link: "" },
  { title: "AI Fluency Framework & Foundations", issuer: "Anthropic", date: "Apr 2026", group: "AI",
    link: "https://verify.skilljar.com/c/2tvirdgfsz3b" },
  { title: "IBM Dev Day: Bob Edition (participation)", issuer: "IBM", date: "Apr 2026", group: "AI", link: "" },
  { title: "AWS Scholars Project Badge: Analyze Data using AI with PartyRock", issuer: "Udacity", date: "Mar 2026", group: "AI",
    link: "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/AWS%20AI%20%26%20ML%20Scholarship%20Badges%20-%20Project%20-%20Analyze%20Data%20-%20Dark%403x.jpg" },
  { title: "Gemini Certified University Student", issuer: "Google", date: "Jan 2026", group: "AI",
    link: "https://edu.google.accredible.com/95278985-d96c-4090-abd6-964fecfe78bb#acc.H9Zek7Ih" },
  { title: "AI Fundamentals and Applications", issuer: "ASEAN Foundation", date: "Jan 2026", group: "AI", link: "" }
];

function showCertificates(group) {
  const list = document.getElementById("certList");
  list.innerHTML = "";
  certificates.forEach(function (cert) {
    if (group !== "all" && cert.group !== group) return;
    const inside =
      "<span><b>" + cert.title + "</b><small>" + cert.issuer + "</small></span>" +
      "<time>" + cert.date + "</time>";
    if (cert.link !== "") {
      list.innerHTML += '<li><a class="cert-row" href="' + cert.link + '" target="_blank" rel="noopener">' + inside + "</a></li>";
    } else {
      list.innerHTML += '<li><div class="cert-row">' + inside + "</div></li>";
    }
  });
}

// Generic tab switcher — reused for both Skills and Certificates
function setupTabs(containerId, onPick) {
  const buttons = document.querySelectorAll("#" + containerId + " button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      onPick(button.getAttribute("data-group"));
    });
  });
}

setupTabs("skillTabs", showSkills);
setupTabs("certTabs", showCertificates);
showSkills("Cloud");
showCertificates("all");

// Theme toggle — reads and writes to localStorage so the choice persists
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;

function updateThemeIcon() {
  const isDark = root.getAttribute("data-bs-theme") === "dark";
  themeBtn.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
}
updateThemeIcon();

themeBtn.addEventListener("click", function () {
  const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-bs-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateThemeIcon();
});

// Close the mobile menu when a nav link is tapped
document.querySelectorAll("#navLinks .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    const menu = document.getElementById("navLinks");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Contact form — validates fields then opens the user's mail client
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;
  [name, email, message].forEach(function (field) {
    if (!field.checkValidity() || field.value.trim() === "") {
      field.classList.add("is-invalid");
      isValid = false;
    } else {
      field.classList.remove("is-invalid");
    }
  });

  if (isValid) {
    const subject = encodeURIComponent("Portfolio message from " + name.value);
    const body = encodeURIComponent(message.value + "\n\nFrom: " + name.value + " (" + email.value + ")");
    window.location.href = "mailto:jomarskiee1121@gmail.com?subject=" + subject + "&body=" + body;
  }
});

// Keep the footer year current automatically
document.getElementById("year").textContent = new Date().getFullYear();
