export const handleLogin = (isLoggedIn, setIsLoggedIn, setErrorMessage, loginInputValue, passwordInputValue) => {

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: loginInputValue, password: passwordInputValue })
    };

    //
    fetch('http://alwertus.zapto.org/spab/user/login', request)
        .then(response => {
            if (response.status === 200) {
                setIsLoggedIn(true);
            } else {
                return response.json();
            }
        })
        .then(data => {
            if (!isLoggedIn) {
                console.log(data);
                setErrorMessage(data.description);
            }
        })
        .catch(error => {
            console.error(error);
        });
};