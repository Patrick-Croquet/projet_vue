new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    }
  })
 
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
  })
  
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })