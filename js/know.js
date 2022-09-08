const know = [
        "Methodologies: SCRUM, ITIL, JIRA",
        "Project Management, ",
        "Suite 365 (Offices, Power (BI, App, Automate) Teams, Planner)",
        "Reports: Tablue, SQL Reporter, BI",
        "Develop: SharePoint, JavaScript, NodeJS, React, JAVA, HTML",
        "Styles: CSS, BootStrap, Materialize",
        "Designer, Infopath",
        "DataBase: SQL, MongoDB, MySql, JSON",
        "Software: Remedy, SSCM System, SAP Basic",
        "Security: Control Remote, Bitlocker, Credant, Security Information",
        "Backup: Connected Backup, OneDrive, Veritas",
        "SO windows (user, server) TCOm Room. Linux Red Hat",
        "HardWare:, Server, LAN (Cable, WiFi)",
        "Comunications: SW, Routers, LAN Printers, Store"
    ]

const Kcard = document.createElement('div')
Kcard.setAttribute('class', 'card')

const Kh1 = document.createElement('h1')
Kh1.textContent = (`Knowings`)
const know1 = document.getElementById('know')

know1.appendChild(Kcard)
Kcard.appendChild(Kh1)

const KnowSort = know.sort(); 
KnowSort.forEach((kno) => {
     const liK = document.createElement('li')
      liK.textContent = (kno)
      Kcard.appendChild(liK)
  });