const { create } = require("../models/job");

new Vue ({
    el: "#creator",
    data: {
        title : "",
        description: ""
    },
    methods : {
        async create() {
            const url = `${window.location.origin}/api/create`;
            let response = await fetch(url, {
                method: 'POST',
                // TODO get username from cookies 
                body : JSON.stringify({username: "user1"})
            })
        }
    }
})