const displayUsers = async function() {
    const response = await fetch("/api/users");
    const userData = await response.json();
    console.log(userData);
    renderAllUsers(userData);
    return;
}

const renderAllUsers = async (data) => {
    const userContainer = document.querySelector('.user-container');
    let userHeader = document.createElement('h1');
    userHeader.textContent = "Users in the Database:"
    userContainer.append(userHeader);
    for(let i = 0; i < data.length; i++) {
        let userNames = document.createElement('p');
        let userEmails = document.createElement('p');
        let userDivider = document.createElement('p');
        userNames.textContent = "Username: " + data[i].username;
        userEmails.textContent = "Email: " + data[i].email;
        userDivider.classList.add('divider');
        userContainer.append(userNames, userEmails, userDivider);
    }
}



document.querySelector(".display-users").addEventListener('click', displayUsers);