Vue.component('job-item', {
  props: ['job'],
  template: '<ul>{{ job.title }} ,{{ job.description }}, {{job.categories}}</ul>'
})

var app = new Vue({
  el: '#viewer',
  data: {
    offers: []
  },
  async mounted() {
    const url = `${window.location.origin}/api/jobs`;

    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).catch((err) => {
      alert(err);
      done();
    });


    if (response.status == 200) {
      this.offers = await response.json();
    }
  }
});