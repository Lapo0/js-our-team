// Creare un oggetto per una persona
const teamPerson = {
    firstName: 'Wayne',
    lastname: 'Barnett',
    role: 'Founder & CEO',
    avatar: 'wayne-barnett-founder-ceo.jpg',
    isFullName: isFullName,
}

// Creare array di oggetti
const teamPeople = [
    teamPerson,
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        avatar: 'angela-caroll-chief-editor.jpg',
        isFullName: isFullName,
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        avatar: 'walter-gordon-office-manager.jpg',
        isFullName: isFullName,
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        avatar: 'angela-lopez-social-media-manager.jpg',
        isFullName: isFullName,
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        avatar: 'scott-estrada-developer.jpg',
        isFullName: isFullName,
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        avatar: 'barbara-ramos-graphic-designer.jpg',
        isFullName: isFullName,
    },
]

console.log(teamPeople)

// Recuperare tbody dall'HTML
const team = document.getElementById('team')

for (let i in teamPeople) {
    const currentPerson = teamPeople[i]

    const fullName = currentPerson.isFullName()
    const role = currentPerson.role
    const avatar = currentPerson.avatar

    console.log(fullName, role, avatar)

    // Stampare sul DOM le informazioni come stringhe
    
    const tr = crateTr(fullName, role, avatar)

    team.innerHTML += tr
}

/////////////////////// FUNZIONI ////////////////////

function isFullName() {
    const firstName = this['firstName']
    const lastName = this['lastName']

    return firstName + ' ' + lastName
}

function crateTr(fullName, role, avatar) {
    return `
    <tr>
        <td> ${fullName} </td>
        <td> ${role} </td>
        <td> ${avatar} </td>
    </tr>
    `
}