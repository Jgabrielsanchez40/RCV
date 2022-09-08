const experience = [
    {
        company: 'Freelance',
        from: 'Aug 2021',
        to: 'Current',
        rol: 'Develop Project | Data Business',
        img: 'TS.jpg',
        tasks: [`Project for Admin and Control Taxi Request`, `Main Target: Control Cost, request consolidation`, `Develop on SharePoint Platform`
        ]
    },
    {
        company: 'Freelance',
        from: 'Aug 2021',
        to: 'Current',
        rol: 'Develop Project | Data Business',
        img: 'MYRCV.jpg',
        tasks: [`Project develop on NodeJS, React, and MySQL`, `Main Target: Share Link Information`
        ]
    },
    {
        company: 'Freelance',
        from: 'Aug 2021',
        to: 'Current',
        rol: 'Develop Project | Data Business',
        img: 'Link.JPG',
        tasks: [`Project develop on NodeJS, hbs, MongoDB`, `Main Target: Central Data Information`
        ]
    },
    {
        company: 'Schlumberger',
        from: 'May 2017',
        to: 'Agus 2020',
        rol: 'VEN Leader Facility Administrator',
        img: 'MOR.jpg',
        tasks: [`Administraty (Business Data Analytics): Cost Control, Forecast Cost, Distribution Cost, Consolidation
   Finance Closed Month, Projects Administration, Provider Contract, General Services, Staffs Administrations,
   Planning Proyect, Logistic Services`, `Operations: Facility maintenance (13 Bases), reparations, build, building improvements, facility security,
   administration of lift truck, cranes, bays, electric plant, others`, `On the time on this function I have been able to develop system engineering solutions in many of the activities,
   implementing processes and developed applications under SharePoint, PowerApps, PowerAutomte and Power BI. View image.`
        ]
    },
    {
        company: 'Schlumberger',
        from: 'June 2012',
        to: 'May 2017',
        rol: 'Champion SharePoint (Develop System) | IT Coordinator',
        img: 'PCR.png',
        tasks: [`Documentation: Actual Situation, Vision, Target, Diagram Flow, Data, Workflow, Approbation.`, `Design: Tables of data (Lists on SharePoint), Relations between tables, Forms, Pages, Reports, Access Control,
        Rules, Workflow.`, `Develop: Creations new TeamSpace, reations, customize of pages, Group access, Charts.`, `Testing`, `Implemented: Training, final documents. Example:`
        ]
    },
    {
        company: 'Schlumberger',
        from: 'March 2008',
        to: 'June 2012',
        rol: 'IT Coordinator | Champion Security',
        tasks: [`IT Coordinator:`, `Field Connectivity Service Coordinator develop, monitoring and maintenance of networking environments`, `Field Connectivity Service Coordinator develop, monitoring and maintenance of networking environments`, `Service delivery and any escalations`, `Onsite Support Service Coordinator troubleshoots and resolves incidents`,
            `Champion Security (System security specialists):`, `Evaluate, test and implement as process of security information as disaster recovery`, `Evaluation and implementation of information security protocol`, `Audits: Information, PC, Users, Printers, Server Room, Physical access`
        ]
    },
    {
        company: 'Schlumberger',
        from: 'Feb 2005',
        to: 'March 2008',
        rol: 'IT On Site Support',
        tasks: [`Support on Server, LAN, cables, path panel, Radio Services, routers, switches, Printers, Support to user over windows platform`, `Few month on the company I was transferred to other location, where I can expanding my abilities on:`,
        `Infrastructure Project, building new TCOM Room with high performance.`, `Develop and building of structure cable on offices new and improved`
        ]
    },
    {
        company: 'Sr. Soft (PDVSA)',
        from: 'May 2002',
        to: 'Feb 2003',
        rol: 'Consultor II',
        tasks: [`Main role, SO migration to windows XP, save user data, PC configuration, profiles, email. Instalation to new
        PC, Intranet.`
        ]
    }

]

const Ecard = document.createElement('div')
Ecard.setAttribute('class', 'card')

const Eh1 = document.createElement('h1')
Eh1.textContent = (`Experience`)
const expe = document.getElementById('expe')

expe.appendChild(Ecard)
Ecard.appendChild(Eh1)

experience.forEach(exp => {
    let d1 = document.createElement('p')
    let d2 = document.createElement('p')
    d1.setAttribute('class', 'text')
    d1.textContent = (`Company: ${exp.company} From: ${exp.from} To: ${exp.to}`)
    d2.textContent = (`@ Position: ${exp.rol}`)
    Ecard.appendChild(d1)
    Ecard.appendChild(d2)
    for (i = 0; i < exp.tasks.length; i++) {
        let l1 = document.createElement('li')
        l1.textContent = (exp.tasks[i])
        Ecard.appendChild(l1)
    }
    if (exp.img) {
        let img = document.createElement('img')
        img.setAttribute('class', 'img')
        img.src = `./img/${exp.img}`
        Ecard.appendChild(img)
    }
})
