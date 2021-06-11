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
            var categories = this.categories.split(', ');
            let response = await fetch(url, {
                method: 'PATCH',
                // TODO get username from cookies, add checking of username

                body : JSON.stringify({title: this.title, description: this.description, categories: this.categories}),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }); 
            if (response.status != 200){
                alert('Server error');
            }
        }
    }
})