Vue.component('category-item', {
  props: ['category'],
  template: '<li>{{ category.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
      categoryList: [
        {id:0, text: 'Shoes'},
        {id:1, text: 'Jeans'},
        {id:2, text: 'Skirt'},
      ]
    },
  })