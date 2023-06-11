export const handleLogin = (isLoggedIn, setIsLoggedIn, setErrorMessage) => {
    const loginInput = document.getElementById('loginInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: loginInput, password: passwordInput })
    };

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