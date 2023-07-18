
const userContainer = document.querySelector('#create-user');

const createUser = async function(e) {
    e.preventDefault();
    const username = document.querySelector('input[name=username]').value.trim();
    const email = document.querySelector('input[name=email]').value.trim();
    console.log(username, email);
    

    const response = await fetch(`/api/users/`, {
       method: "POST",
       body: JSON.stringify({
        username,
        email
      }),
       headers: {
        'Content-Type': 'application/json'
      },
    });
    const userData = await response.json();
    console.log(userData);
    
    return;
}

userContainer.addEventListener("submit", createUser);