
var app = new Vue({

  el: '#app',
  data: {
    items: []
  },
  methods: {
    getData () {
      return this.$http.get('data/bookmarks.json').then((res) => {
        console.log(res)
        console.log(this)
        this.items = res.body
      })
    }
  }
})

app.getData().then(() => { console.log(app.data) })
