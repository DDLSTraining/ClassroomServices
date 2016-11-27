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
    },
    phonebook: {

    }
  },
  created: function () {
    return Promise.all([
      this.getResources(),
      this.getPhonebook()
    ]).then(function () {
      $(document).foundation()
    }).catch(function (err) { console.error(err) })
  },
  methods: {
    getResources: function () {
      return this.$http.get('data/resources.json').then(function (res) {
        console.log('Resources Body: ', res.body)
        this.resources = res.body
      })
    },
    getPhonebook: function () {
      return this.$http.get('data/phonebook.xml').then(function (book) {
        console.log('Phonebook Body: ', book.body)
      })
    }
  }
})
