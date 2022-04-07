const sections = 
[
  'home',
  'empresarial',
  'judicial',
  'personal'
]

function showSection(section) {
  const sectionElement = document.getElementById(section)
  sectionElement.style.display = "block"
  if ( section.trim() == 'home') {
    const usElement = document.getElementById('nosotros')
    usElement.style.display = "block"
  }
}

function hideSection(section) {
  const sectionElement = document.getElementById(section)
  sectionElement.style.display = "none"
  if ( section == 'home') {
    const usElement = document.getElementById('nosotros')
    usElement.style.display = "none"
  }
}

function disableAllTabs() {
  const tabs = document.querySelectorAll(".menu-bar a")
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  })
}

function enableTab(tab) {
  disableAllTabs()
  const tabElement = document.getElementById("tab-"+tab)
  tabElement.classList.add("active");
}

function enableSection(sectionToEnable) {
  sections.forEach((section) => {
    if ( section.trim() == sectionToEnable.trim() ) {
      showSection(section)
    } else {
      hideSection(section)
    }
  })
  enableTab(sectionToEnable)
}
