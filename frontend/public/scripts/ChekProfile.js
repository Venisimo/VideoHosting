async function ChekInfo() {
    try {
        const Data = {
            id: UserId
        }
        const response = await fetch('/userInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.name == null) {
            window.location.replace("/profile-setting");
        }
        if (!response.ok) {
            throw new Error('Ошибка вывода данных');
        }
        console.log(response);
    } catch (error) {
        throw error;
    }
}