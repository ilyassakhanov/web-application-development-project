new Vue({
    el: "#register",
    data: {
        username: '',
        password: ''
    },
    methods: {
        async register() {
            const regitserURL = `${window.location.origin}/api/register`;
            let registerResponse = await fetch(regitserURL, {
                method: 'POST',
                body: JSON.stringify({ username: this.username, password: this.password }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            if(registerResponse.status != 200) {
                alert('Server error');
            }else {
                location.replace(`${window.location.origin}`);
            }
        }
    }
});