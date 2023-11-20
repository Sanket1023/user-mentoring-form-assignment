const allUsers = [
    { name: 'Elon Musk', email: 'elon@twitter.com', triggeredreason: 'pending', risk: 'High', inQueueFor: '4 days', dateAdded: '12 Oct, 2023', Reviewed: 'Yes', CloseAccount: '23 Aug, 2023' },
    { name: 'Sam Altman', email: 'samaltman123@gmail.com', triggeredreason: 'Pending', risk: 'Medium', inQueueFor: '5 days', dateAdded: '23 Dec, 2023', Reviewed: 'No', CloseAccount: '' },
    { name: 'Sanket Patil', email: 'sanketpatil123@gmail.com', triggeredreason: 'completed', risk: 'Medium', inQueueFor: '14 days', dateAdded: '18 Nov, 2023', Reviewed: 'No', CloseAccount: '' },
    { name: 'Hrushi Patil', email: 'hrushipatil123@gmail.com', triggeredreason: 'pending', risk: 'Low', inQueueFor: '9 days', dateAdded: '12 Oct, 2023', Reviewed: 'Yes', CloseAccount: '13 Aug 2023' },
    { name: 'Sushant Patil', email: 'sushantpatil@gmail.com', triggeredreason: 'pending', risk: 'high', inQueueFor: '10 days', dateAdded: '27 Jan, 2023', Reviewed: 'No', CloseAccount: '' },
    

];

let pendingUsers = allUsers.filter(user => user.triggeredreason.toLowerCase() === 'pending');
let completedUsers = allUsers.filter(user => user.triggeredreason.toLowerCase() === 'completed');

// Function to render users into the table
function renderUsers(users) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name} <span>&#129109</span><br>${user.email}</td>
            <td>${user.triggeredreason}</td>
            <td class="${user.risk.toLowerCase()}-risk">&#9679 ${user.risk}</td>
            <td>${user.inQueueFor}</td>
            <td>${user.dateAdded}</td>
            <td><b>${user.Reviewed}</b><br>${user.CloseAccount}</td>
        `;
        tableBody.appendChild(row);
    });
}
renderUsers(pendingUsers);


function showPending() {
    renderUsers(pendingUsers);
}

function showCompleted() {
    renderUsers(completedUsers);
}

// filter users by risk level
function filterByRiskLevel() {
    const riskLevelDropdown = document.getElementById('riskLevelDropdown');
    const selectedRiskLevel = riskLevelDropdown.value;

    if (selectedRiskLevel === '') {
        renderUsers(showingList);
    } else {
        const filteredUsers = showingList.filter(user => user.risk.toLowerCase() === selectedRiskLevel.toLowerCase());
        renderUsers(filteredUsers);
    }
}


function filterByTriggeredReason() {
    //i did triggered reason for pending and completed due to shortage of time i am not able to do correct answer sorry for this.
    const triggeredReasonDropdown = document.getElementById('triggeredReasonDropdown');
    const selectedTriggeredReason = triggeredReasonDropdown.value;

    if (selectedTriggeredReason === '') {
        renderUsers(showingList);
    } else {
        const filteredUsers = showingList.filter(user => user.triggeredreason.toLowerCase() === selectedTriggeredReason.toLowerCase());
        renderUsers(filteredUsers);
    }
}

let showingList = pendingUsers; 
function searchUsers() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredUsers = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    );

    renderUsers(filteredUsers);
}