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
    //clear innerHTML so clicking the display user button will not duplicate
    userContainer.innerHTML = ""
    let userList = document.createElement('ul');
    userHeader.textContent = "Users in the Database:"
    userContainer.append(userHeader, userList);
    
    for(let i = 0; i < data.length; i++) {
        let userName = document.createElement('li');
        let userEmail = document.createElement('li');
        let userId = document.createElement('li');
        let userDivider = document.createElement('div');
        userName.textContent = "Username: " + data[i].username;
        userEmail.textContent = "Email: " + data[i].email;
        userId.textContent = "userId: " + data[i]._id;
        userDivider.classList.add('divider');
        userList.append(userName, userEmail, userId, userDivider);
    }
    
}



document.querySelector(".display-users").addEventListener('click', displayUsers);