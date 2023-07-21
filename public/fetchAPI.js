
const userContainer = document.querySelector('.user-container');

const deleteUser = async function(e) {
    let userId= e.target.dataset.userId;
    // console.log(userId);

    const response = await fetch(`/api/users/${userId}`, {
       method: "DELETE",
       
    });
    const userData = await response.json();
    console.log(userData);
    if(response.ok){

        document.location.replace("/");
    }
    
}

userContainer.addEventListener("click", deleteUser);
