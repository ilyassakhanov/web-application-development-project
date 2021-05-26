Vue.component('job-item', {
    props: ['job'],
    template: '<ul>{{ job.title }} ,{{ job.description }}</ul>'
})

var app = new Vue({
    el: '#viewer',
    data: {
      offers: [
        {title: 'Title1', description: 'lorum ipsum'},
        {title: 'Title2', description: 'lorum ipsum'},
        {title: 'Title3', description: 'lorum ipsum'}
      ]
    }
})