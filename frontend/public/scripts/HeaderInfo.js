async function GetHeader() {
    const Data = {
        id: UserId,
    };
    try {
        const response = await fetch('/headerInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        console.log(response);
        const responseData = await response.json();
        Avatar.src = responseData.avatar
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}