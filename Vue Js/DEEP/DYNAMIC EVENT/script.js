var app = new Vue({ 
    el: '#app',
    data: {
        url: 'http://www.google.com',
        event: 'click',
    },
    methods: {
        hi: function(){
            alert('Dynamic Event Click!')
        }
    }
});