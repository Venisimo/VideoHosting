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
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Ошибка при верификации токена');
        }
        UserId = responseData.decodedToken.id;
        if (typeof ChekInfo === 'function') {
            ChekInfo();
        }
        if (typeof GetSelfVideo === 'function') {
            GetSelfVideo().then(() => {
                ChekLanguage();
            });
        }
        if (typeof GetInfo === 'function') {
            GetInfo().then(() => {
                if (typeof Upload === 'function') {
                    Upload()
                }
            });
        }
        if (typeof GetLinks === 'function') {
            GetLinks()
        }
        if (typeof GetSelfSubscriptions === 'function') {
            GetSelfSubscriptions()
        }
        if (typeof GetInfoVideos === 'function') {
            GetInfoVideos()
        }
        if (typeof GetUserSubscriptions === 'function') {
            GetUserSubscriptions()
        }
        if (typeof ChekSubs === 'function') {
            ChekSubs().then(() => {
                ChekLanguage();
            });
        }
        if (typeof CountSelfSub === 'function') {
            CountSelfSub()
        }
        if (typeof GetUsersVideo === 'function') {
            GetUsersVideo().then(() => {
                chekBurgerMenu();
            })
        }
        if (typeof GetUsersSubs === 'function') {
            GetUsersSubs()
        }
        if (typeof GetUsersAbout === 'function') {
            GetUsersAbout()
        }
        if (typeof GetHeader === 'function') {
            GetHeader()
        }
        if (typeof GetSelfSubsLeftMenu === 'function') {
            GetSelfSubsLeftMenu().then(() => {
                if (typeof chekBurgerMenu === 'function') {
                    chekBurgerMenu();
                }
                if (typeof checkTheme === 'function') {
                    checkTheme();
                }
                if (typeof chekThemeResult === 'function') {
                    chekThemeResult();
                }
            })
        }
        if (typeof GetHistory === 'function') {
            GetHistory().then(() => {
                ChekThemeHisory();
                checkTheme();
                checkLanguageHistory();
            }) 
        }
        if (typeof GetVideo === 'function') {
            GetVideo().then(() => {
                CountSub();
                ChekSubs();
                AmountLikesDislikes();
                ChekSelfLD();
                getCountComment();
                getComment().then(() => {
                    getSelfProfile();
                    CountLikeDislike();
                    VideoPlayer();
                    checkTheme();
                    ChekLanguage();
                });
            });
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
        if (typeof GetVideo === 'function') {
            GetVideo().then(() => {
                CountSub();
                ChekSubs();
                AmountLikesDislikes();
                getComment().then(() => {
                    VideoPlayer()
                    checkTheme();
                    ChekLanguage();
                });
                getCountComment();
            });
        }
        if (typeof GetUserSubscriptions === 'function') {
            GetUserSubscriptions()
        }
        console.log('Токен отсутствует, пользователь не аутентифицирован.');
        if (Users) {
            Users.innerHTML += `<div class="line" id="line-for-leftMenu"></div>
                                <div class="footer">© 2024 Venisimo</div>
                                <div class="zagluhka-footer"></div>`
        }
    }
});