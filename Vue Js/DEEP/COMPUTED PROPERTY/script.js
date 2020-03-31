var app = new Vue({
    el: '#app',
    data: {
      firstName: '',
      lastName:'',
    },
    computed: {
      fullName: function(){
        return this.firstName + ' ' + this.lastName;        
      }
    },
    watch: {
      firstName: function(val){
        if(val == 'kaleem'){
          alert('Are you kaleem qasim?')
        }
      }
    }
    
  })