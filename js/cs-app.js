var app = new Vue({
  el: '#app',
  data: {
    resources: {
      common: {},
      whs: {},
      microsoft: {},
      cisco: {},
      citrix: {},
      vmware: {},
      itil: {}
    }
  },
  created: function () {
    this.getResources().then(function () {
      $(document).foundation()
    }).catch(function (err) { console.error(err) })
  },
  methods: {
    getResources: function () {
      return this.$http.get('data/resources.json').then(function (res) {
        console.log('Body: ', res.body)
        this.resources = res.body
      })
    }
  }
})
