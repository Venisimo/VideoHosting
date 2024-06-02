let UserId;
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
const token = getCookie("jwtToken");
  
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
                ViewsText();
                ParseNumber();
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
            GetLinks().then(() => {
                checkTheme();
            })
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
                checkTheme();
            });
        }
        if (typeof CountSelfSub === 'function') {
            CountSelfSub()
        }
        if (typeof GetUsersVideo === 'function') {
            GetUsersVideo().then(() => {
                // chekBurgerMenu();
                checkTheme();
            })
        }
        if (typeof GetUsersSubs === 'function') {
            GetUsersSubs().then(() => {
                checkTheme();
            })
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
                // ParseText();
                // ViewsText();
                // ParseNumber();
            });
        }
        return responseData.decodedToken;
    } catch (error) {
        console.error('Ошибка при верификации токена:', error);
        throw error;
    }
}

window.addEventListener('DOMContentLoaded', async function() {
    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    if (token) {
        try {
            const decodedToken = await verifyTokenOnServer();
            console.log('Токен верифицирован:', decodedToken);
        } catch (error) {
            console.error('Ошибка при верификации токена:', error);
            deleteCookie('jwtToken');
        }
    } else {
        if (typeof GetVideo === 'function') {
            GetVideo().then(() => {
                CountSub();
                ChekSubs();
                AmountLikesDislikes();
                getComment().then(() => {
                    VideoPlayer();
                    checkTheme();
                    ChekLanguage();
                });
                getCountComment();
                ParseText();
                ViewsText();
                ParseNumber();
            });
        }
        if (typeof GetUsersVideo === 'function') {
            GetUsersVideo().then(() => {
                chekBurgerMenu();
                checkTheme();
            })
        }
        if (typeof GetUserSubscriptions === 'function') {
            GetUserSubscriptions().then(() => {
                chekBurgerMenu();
                checkTheme();
            })
        }
        if (typeof GetUsersAbout === 'function') {
            GetUsersAbout().then(() => {
                chekBurgerMenu();
                checkTheme();
            })
        }
        console.log('Токен отсутствует, пользователь не аутентифицирован.');
        if (Users) {
            Users.innerHTML += `<div class="line" id="line-for-leftMenu"></div>
                                <div class="footer">© 2024 Venisimo</div>
                                <div class="zagluhka-footer"></div>`
            // chekBurgerMenu();
        }
        if (typeof chekBurgerMenu === 'function') {
            chekBurgerMenu();
        }
    }
});