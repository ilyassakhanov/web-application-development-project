new Vue({
    el: "#register",
    data: {
        username: '',
        password: ''
    },
    methods: {
        async register() {
            const url = `${window.location.origin}/api/register`;
            let response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ username: this.username, password: this.password }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
        }
    }
});