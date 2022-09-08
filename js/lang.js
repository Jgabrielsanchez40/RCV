const idioms = [
  {
    id: "1",
    title: "Languages",
    lang: "English",
    alias: "jgabrielsanchez40@gmail.com",
    level: "Professional Working",
  },
{
  id: "2",
  title: "Languages",
  lang: "Spanish",
  alias: "jgabrielsanchez40@gmail.com",
  level: "Native",
}
]

//Idioms
const icard = document.createElement('div')
icard.setAttribute('class', 'card')

const ih1 = document.createElement('h1')
ih1.textContent = (`${idioms[0].title}`)
const lang = document.getElementById('lang')

    lang.appendChild(icard)
    icard.appendChild(ih1)
     idioms.forEach((idio) => {
      const p1 = document.createElement('li')

      p1.textContent = (`${idio.lang} - Level: ${idio.level}`)
      icard.appendChild(p1)
  });
