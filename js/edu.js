const educations = [
  {
    id: "1",
    title: "Education",
    titule: "System Engineer",
    alias: "jgabrielsanchez40@gmail.com",
    date_start: "Feb, 2012",
    date_end: "Feb, 2016",
    schooll: "Institute Universitary Santiago Marino",
  },
  {
    id: "2",
    title: "Education",
    titule: "Tecnical Superior Information",
    alias: "jgabrielsanchez40@gmail.com",
    date_start: "Feb, 1994",
    date_end: "Feb, 1997",
    schooll: "Technology Pedro Emilio Coll",
  }
]

const prof = document.getElementById('prof')
const prfN = document.createElement('h3')
//const UU = prfN.textContent = (`${educations[0].titule}`);
prof.append(prfN.textContent = (`${educations[0].titule}`))
//Educations
const ecard = document.createElement('div')
ecard.setAttribute('class', 'card')

const eh1 = document.createElement('h1')
eh1.textContent = (`${educations[0].title}`)

const edu = document.getElementById('edu')

edu.appendChild(ecard)
ecard.appendChild(eh1)
educations.forEach((Inf) => {
  const p1 = document.createElement('p')
  p1.setAttribute('class', 'text')
  const p2 = document.createElement('li')
  const p3 = document.createElement('li')

  p1.textContent = (`Professional: ${Inf.titule}`)
  p2.textContent = (`Date Start: ${Inf.date_start} -  Date End: ${Inf.date_end}`)
  p3.textContent = (`Schooll: ${Inf.schooll}`)
  ecard.appendChild(p1)
  ecard.appendChild(p2)
  ecard.appendChild(p3)
});