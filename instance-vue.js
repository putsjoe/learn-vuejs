
var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data () {
        return {
        obj
        }
}
})

// --

var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: {
      a: 'Change me in the console'
  }
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
  // Change in browser console eg:   vm.a = 'Please';
  alert('Thing changed')
})

// -- 



