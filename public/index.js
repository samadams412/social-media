const displayUsers = async function() {
    const response = await fetch("/api/users");
    const userData = await response.json();
    renderUsers(userData);
    return;
}

const renderUsers = async (data) => {
    const userContainer = document.querySelector('.user-container');
    let userHeader = document.createElement('h1');
    userHeader.textContent = "Users in the Database:"
    userContainer.append(userHeader);
    for(let i = 0; i < data.length; i++) {
        let userNames = document.createElement('p');
        userNames.textContent = data[i].username;
        userContainer.append(userNames);
    }
}



document.querySelector(".display-users").addEventListener('click', displayUsers);