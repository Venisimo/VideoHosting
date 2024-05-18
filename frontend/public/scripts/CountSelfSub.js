async function CountSelfSub() {
    try {
        const Data = {
            id: UserId,
        }
        const response = await fetch('/CountSelfSub', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
        });
        const responseData = await response.json();
        NumSubsDes.innerHTML = responseData.count
        console.log(responseData);
        if (!response.ok) {
            throw new Error('Ошибка при выводе числа подписчиков');
        } 
    } catch (error) {
        console.error(error);
    
    }
}