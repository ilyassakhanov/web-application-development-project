// const { create } = require("../models/job");

new Vue ({
    el: "#creator",
    data: {
        title : "",
        description: "",
        categories: []
    },
    methods : {
        async create() {
            const url = `${window.location.origin}/api/create`;
            console.log(this.title);
            var categories = this.categories.split(', ');
            console.log(categories);
            let response = await fetch(url, {
                method: 'PATCH',
                // TODO get username from cookies, add checking of username

                body : JSON.stringify({username: "user1", title: this.title, description: this.description, categories: this.categories}),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
        }
    }
})