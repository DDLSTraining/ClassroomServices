var app = new Vue({
  el: '#app',
  data: {
    resources: {
      common: '',
      whs: '',
      microsoft: '',
      cisco: '',
      citrix: '',
      vmware: '',
      itil: ''
    }
  },
  created: function () {
    this.getResources().then(() => {
      $(document).foundation()
    }).catch(err => console.error(err))
  },
  methods: {
    getResources () {
      return this.$http.get('data/resources.json').then((res) => {
        console.log(res)
        console.log(this)
        this.resources = res.body
      })
    }
  }
})
