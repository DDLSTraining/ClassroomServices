var app = new Vue({
  el: '#app',
  data: {
    loaded: false,
    resources: {},
    phonebook: {}
  },
  created: function () {
    var self = this
    return Promise.all([
      this.getResources(),
      this.getPhonebook()
    ]).then(function () {
      self.loaded = true
    }).catch(function (err) { console.error(err) })
  },
  updated: function () {
    $(document).foundation()
  },
  methods: {
    getResources: function () {
      return this.$http.get('data/resources.json').then(function (res) {
        this.resources = res.body
      })
    },
    getPhonebook: function () {

      var self = this
      return this.$http.get('data/phonebook.xml', {
        headers: {'Content-Type': 'text/xml'}
      }).then(function (book) {
        return self.convertBlobToXml(book.body)
      }).then(function (xml) {
        var x2js = new X2JS()
        var contacts = x2js.dom2js(xml).LocalPhoneBook.Contact
        contacts = contacts.sort(self.compareDisplayName)
        self.phonebook = contacts
      })
    },
    convertBlobToXml: function (blob) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader()
        reader.addEventListener('loadend', function () {
          var xml = $.parseXML(reader.result)
          resolve(xml)
        })
        reader.readAsText(blob)
      })
    },
    compareDisplayName: function (a, b) {
      var dnA = a.DisplayName
      var dnB = b.DisplayName
      return dnA < dnB ? -1 : 1
    }

  }
})
