const skill = [
        "Methodologies: SCRUM, Agile, ITIL",
        "Work Pressure",
        "Planner, Logistic",
        "Vision Target",
        "Customer and Provider Negotiation",
        "Business Data Aplication",
        "Projects Administrator",
        "Asset Administrator",
        "Develop of Solutions Systemic",
        "Blue Print",
        "Lean",
        "Finance Process",
        "Facilities Admninistrator"
    
]

const lcard = document.createElement('div')
lcard.setAttribute('class', 'card')

const lh1 = document.createElement('h1')
lh1.textContent = (`Skills`)
const skil = document.getElementById('skil')

skil.appendChild(lcard)
lcard.appendChild(lh1)

const li = document.createElement('li')
li.setAttribute('class', 'cul')

const skilSort = skill.sort(); 
skilSort.forEach((skil) => {
     const li = document.createElement('li')
      li.textContent = (skil)
      lcard.appendChild(li);
  });