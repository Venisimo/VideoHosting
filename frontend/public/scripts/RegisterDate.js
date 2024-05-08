document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let userLogin = loginInput.value;
    let userPassword = passwordInput.value;
    let userEmail = emailInput.value;
    const Data = { 
        login: userLogin, 
        password: userPassword, 
        email: userEmail }; 
    console.log(Data);
    console.log(JSON.stringify(Data));
    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        if (!response.ok) {
            throw new Error('Ошибка при регистрации');
        } else {
            window.location.replace("http://localhost:3000/profile-setting");
        }
 
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error(error);
    
    }
});
