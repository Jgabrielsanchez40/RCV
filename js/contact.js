const PersonelInfo = [
  {
    id: "1",
    title: "Personnel Information",
    name: "Jose Gabriel Sanchez",
    mobile: "+58 414 878 0676",
    country: "Venezuela",
    state: "Monagas",
    email: "jgabrielsanchez40@gmail.com",
    linkedin: "https://www.linkedin.com/in/jose-gabriel-sanchez-236a6a60/",
    gitHub: "https://github.com/Jgabrielsanchez40",
    address: "https://jgabrielsanchez40.github.io/RCV/"
  }
]

const bodyM = document.getElementById('name')
const userN = document.createElement('h3')
const UU = userN.textContent = (`${PersonelInfo[0].name}`);
bodyM.append(UU)

const app = document.getElementById('root')

PersonelInfo.forEach((Info) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = Info.title

      const p = document.createElement('li')
      const p2 = document.createElement('li')
      const p3 = document.createElement('li')
      const p4 = document.createElement('li')
      const p5 = document.createElement('li')
      const p6 = document.createElement('li')
      const p7 = document.createElement('li')

      p.textContent = (`Name: ${Info.name}`)
      p2.textContent = (`Mobile Number: ${Info.mobile}`)
      p5.textContent = (`Country: ${Info.country} - State: ${Info.state}`)
      p3.textContent = (`Email: ${Info.email}`)
      p4.textContent = (`Linkedin: ${Info.linkedin}`)
      p6.textContent = (`GitHub: ${Info.gitHub}`)
      p7.textContent = (`My Link: ${Info.address}`)

      app.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      card.appendChild(p2)
      card.appendChild(p5)
      card.appendChild(p3)
      card.appendChild(p4)
      card.appendChild(p6)
      card.appendChild(p7)
      
    
    });
