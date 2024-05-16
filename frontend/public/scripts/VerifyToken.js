let UserId;
const token = localStorage.getItem("jwtToken");
async function verifyTokenOnServer() {
    try {
        const response = await fetch('/verifyToken', {
            method: 'POST',
            headers: {
                'Authorization': token
            }
        });
        console.log(response);
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Ошибка при верификации токена');
        }
        UserId = responseData.decodedToken.id;
        if (typeof GetSelfVideo === 'function') {
            ChekInfo();
        }
        if (typeof GetSelfVideo === 'function') {
            GetSelfVideo();
        }
        if (typeof GetInfo === 'function') {
            GetInfo()
        }
        if (typeof GetLinks === 'function') {
            GetLinks()
        }
        return responseData.decodedToken; 
    } catch (error) {
        console.error('Ошибка при верификации токена:', error);
        throw error;
    }
}

window.addEventListener('DOMContentLoaded', async function() {
    if (token) {
        try {
            const decodedToken = await verifyTokenOnServer();
            console.log('Токен верифицирован:', decodedToken);
        } catch (error) {
            console.error('Ошибка при верификации токена:', error);
            localStorage.removeItem('jwtToken');
        }
    } else {
        console.log('Токен отсутствует, пользователь не аутентифицирован.');
    }
});