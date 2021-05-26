Vue.component('job-item', {
    props: ['job'],
    template: '<li>{{ job.title }}</li>'
})

var app = new Vue({
    el: '#viewer',
    data: {
      offers: [
        { id: 0, title: 'Title1' },
        { id: 1, title: 'Title2' },
        { id: 2, title: 'Title3' }
      ]
    }
})