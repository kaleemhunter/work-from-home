<template>
  <div class="single">
       <div id="overlayer"></div>
  <div class="loader">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <div class="site-wrap">

    

    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div> <!-- .site-mobile-menu -->
    
    
    <div class="site-navbar-wrap js-site-navbar bg-white">
      
      <div class="container">
        <div class="site-navbar bg-light">
          <div class="row align-items-center">
            <div class="col-2">
              <h2 class="mb-0 site-logo"><a href="index.html" class="font-weight-bold text-uppercase">Neos</a></h2>
            </div>
            
            <!-- Navigation Component -->
            <Navigation></Navigation>

            
          </div>
        </div>
      </div>
    </div>
  
    <div class="site-blocks-cover inner-page overlay" style="background-image: url(/images/hero_2.jpg);" data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-12 text-center" data-aos="fade">
          <h1 class="text-uppercase">{{postData.title}}</h1>
          <span class="caption d-block text-white">{{postData.date}} &bullet; Posted By <a href="#">{{postData.user.name}}</a></span>
        </div>
      </div>
    </div>  

    <div class="slant-1"></div>

    
    
  <div class="site-section first-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 blog-content">
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nihil aspernatur nemo sunt, qui, harum repudiandae quisquam eaque dolore itaque quod tenetur quo quos labore?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.</p>
            <p><img src="/images/hero_2.jpg" alt="Image" class="img-fluid"></p>

            <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vero tempora aliquam excepturi labore, ad soluta voluptate necessitatibus. Nulla error beatae, quam, facilis suscipit quaerat aperiam minima eveniet quis placeat.</p></blockquote>

            <p>Eveniet deleniti accusantium nulla natus nobis nam asperiores ipsa minima laudantium vero cumque cupiditate ipsum ratione dicta, expedita quae, officiis provident harum nisi! Esse eligendi ab molestias, quod nostrum hic saepe repudiandae non. Suscipit reiciendis tempora ut, saepe temporibus nemo.</p>
            <p>Accusamus, temporibus, ullam. Voluptate consectetur laborum totam sunt culpa repellat, dolore voluptas. Quaerat cum ducimus aut distinctio sit, facilis corporis ab vel alias, voluptas aliquam, expedita molestias quisquam sequi eligendi nobis ea error omnis consequatur iste deleniti illum, dolorum odit.</p>
            <p>In adipisci corporis at delectus! Cupiditate, voluptas, in architecto odit id error reprehenderit quam quibusdam excepturi distinctio dicta laborum deserunt qui labore dignissimos necessitatibus reiciendis tenetur corporis quas explicabo exercitationem suscipit. Nisi quo nulla, nihil harum obcaecati vel atque quos.</p>
            <p><img src="/images/hero_1.jpg" alt="Image" class="img-fluid"></p>
            <p>Amet sint explicabo maxime accusantium qui dicta enim quia, nostrum id libero voluptates quae suscipit dolor quam tenetur dolores inventore illo laborum, corporis non ex, debitis quidem obcaecati! Praesentium maiores illo atque error! Earum, et, fugit. Sint, delectus molestiae. Totam.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, repudiandae facere aperiam sapiente, officia delectus soluta molestiae nihil corporis animi quos ratione qui labore? Sint eaque perspiciatis minus illum.</p>
            <p>Consectetur porro odio quod iure quaerat cupiditate similique, dolor reprehenderit molestias provident, esse dolorum omnis architecto magni amet corrupti neque ratione sunt beatae perspiciatis? Iste pariatur omnis sed ut itaque.</p>
            <p>Id similique, rem ipsam accusantium iusto dolores sit velit ex quas ea atque, molestiae. Sint, sed. Quisquam, suscipit! Quisquam quibusdam maiores fugiat eligendi eius consequuntur, molestiae saepe commodi expedita nemo!</p>
            <!-- <div class="pt-5">
              <p>Categories:  <a href="#">HTML5</a>, <a href="#">Bootstrap 4</a>  Tags: <a href="#">#html</a>, <a href="#">#trends</a></p>
            </div> -->


            <div class="pt-5">
              <h3 class="mb-5">{{totalComments}} Comments</h3>
              <ul class="comment-list">
              <template v-for="comment in postData.comments">
                <li :key='comment.id' class="comment">
                  <div class="vcard bio">
                    <img v-bind:src="comment.user.profile_picture" alt="Image placeholder">
                  </div>
                  <div class="comment-body">
                    <h3>{{comment.user.name}}</h3>
                    <div class="meta">{{comment.date}}</div>
                    <p>{{comment.comment}}</p>
                    <!-- <p><a href="#" class="reply">Reply</a></p> -->
                  </div>
                </li>
              </template>
                

              </ul>
              <!-- END comment-list -->
              
              <div class="comment-form-wrap pt-5">
                <h3 class="mb-5">Leave a comment</h3>
                <form class="p-5 bg-light" v-on:submit.prevent="addNewComment">
                  <div class="form-group">
                    <label for="name">Name *</label>
                    <input v-model="newName" type="text" class="form-control" id="name">
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email">
                  </div>
                  <div class="form-group">
                    <label for="website">Website</label>
                    <input type="url" class="form-control" id="website">
                  </div>

                  <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea v-model="newComment" id="message" cols="30" rows="10" class="form-control"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Post Comment" class="btn btn-primary text-white">
                  </div>

                </form>
              </div>
            </div>

          </div>
          <div class="col-md-4 sidebar">
            <div class="sidebar-box">
              <form action="#" class="search-form">
                <div class="form-group">
                  <span class="icon fa fa-search"></span>
                  <input type="text" class="form-control" placeholder="Type a keyword and hit enter">
                </div>
              </form>
            </div>
            <div class="sidebar-box">
              <div class="categories">
                <h3 class="text-uppercase">Categories</h3>
                <li><a href="#">Creatives <span>(12)</span></a></li>
                <li><a href="#">News <span>(22)</span></a></li>
                <li><a href="#">Design <span>(37)</span></a></li>
                <li><a href="#">HTML <span>(42)</span></a></li>
                <li><a href="#">Web Development <span>(14)</span></a></li>
              </div>
            </div>
            <div class="sidebar-box">
              <img v-bind:src="postData.user.profile_picture" alt="Image placeholder" class="img-fluid mb-4">
              <h3 class="text-uppercase">About The Author</h3>
              <p>{{postData.user.about}}</p>
              <p><a href="#" class="btn btn-primary text-white">Read More</a></p>
            </div>

            <div class="sidebar-box">
              <h3 class="text-uppercase">Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  <footer class="site-footer bg-dark">
      <div class="container">
        

        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <h3 class="footer-heading mb-4 text-white">About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
            <p><a href="#" class="btn btn-primary text-white px-4">Read More</a></p>
          </div>
          <div class="col-md-5 mb-4 mb-md-0 ml-auto">
            <div class="row mb-4">
              <div class="col-md-6">
                <h3 class="footer-heading mb-4 text-white">Quick Menu</h3>
                  <ul class="list-unstyled">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    
                  </ul>
              </div>
              <div class="col-md-6">
                <h3 class="footer-heading mb-4 text-white">Free Templates</h3>
                  <ul class="list-unstyled">
                    <li><a href="#">HTML5 / CSS3</a></li>
                    <li><a href="#">Clean Design</a></li>
                    <li><a href="#">Responsive</a></li>
                    <li><a href="#">Multi Purpose Template</a></li>
                  </ul>
              </div>
            </div>

            <div class="row mb-5">
              <div class="col-md-12">
              <h3 class="footer-heading mb-4 text-white">Stay up to date</h3>
              <form action="#" class="d-flex footer-subscribe">
                <input type="text" class="form-control rounded-0" placeholder="Enter your email">
                <input type="submit" class="btn btn-primary rounded-0" value="Subscribe">
              </form>
            </div>
            </div>
          </div>

          
          <div class="col-md-2">
            
            <div class="row">
            <div class="col-md-12"><h3 class="footer-heading mb-4 text-white">Social Icons</h3></div>
              <div class="col-md-12">
                <p>
                  <a href="#" class="pb-2 pr-2 pl-0"><span class="icon-facebook"></span></a>
                  <a href="#" class="p-2"><span class="icon-twitter"></span></a>
                  <a href="#" class="p-2"><span class="icon-instagram"></span></a>
                  <a href="#" class="p-2"><span class="icon-vimeo"></span></a>

                </p>
              </div>
          </div>
          </div>
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; 2020 All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>

            
          </div>
          
        </div>
      </div>
    </footer>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";


export default {
  name: "Single",
  components: {
    Navigation,
  },
  data: function(){
    return {
      newComment: "",
      newName: "Anonymous",
      newId: 7,
      newUserId: 3,

      posts: [
        {
          id: 1,
          user: {
            id: 1,
            name: "Kaleem",
            profile_picture: "/images/person_1.jpg",
            about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
          },
          title: "Title of the post",
          date: '12 Jan 2010',
          picture: "images/img_1.jpg",
          description: 'this is some random text for the post for checking',
          comments: [
            {
              id: 1,
              user: {
                id: 1,
                name: "Kaleem",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is awesome",
            date: "12 Jan 2019",
            },
            {
              id: 2,
              user: {
                id: 2,
                name: "Imran",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is amazing",
            date: "13 Jan 2019",
            },
         ],
        },
        {
          id: 2,
          user: {
            id: 2,
            name: "Imran",
            profile_picture: "/images/person_1.jpg",
            about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
          },
          title: "Title of the post",
          date: '13 Jan 2010',
          picture: "images/img_2.jpg",
          description: 'this is some random text for the post for checking',
                    comments: [
            {
              id: 1,
              user: {
                id: 1,
                name: "Kaleem",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is awesome",
            date: "12 Jan 2019",
            },
            {
              id: 2,
              user: {
                id: 2,
                name: "Imran",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is amazing",
            date: "13 Jan 2019",
            },
         ],
        },
        {
          id: 3,
          user: {
            id: 1,
            name: "Kaleem",
            profile_picture: "/images/person_1.jpg",
            about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
          },
          title: "Title of the post",
          date: '11 Jan 2010',
          picture: "images/img_6.jpg",
          description: 'this is some random text for the post for checking',
          comments: [
            {
              id: 1,
              user: {
                id: 1,
                name: "Kaleem",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is awesome",
            date: "12 Jan 2019",
            },
            {
              id: 2,
              user: {
                id: 2,
                name: "Imran",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is amazing",
            date: "13 Jan 2019",
            },
         ],
        },
        {
          id: 4,
          user: {
            id: 1,
            name: "Kaleem",
            profile_picture: "/images/person_1.jpg",
            about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
          },
          title: "Title of the post",
          date: '16 Jan 2010',
          picture: "images/img_5.jpg",
          description: 'this is some random text for the post for checking',
          comments: [
            {
              id: 1,
              user: {
                id: 1,
                name: "Kaleem",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is awesome",
            date: "12 Jan 2019",
            },
            {
              id: 2,
              user: {
                id: 2,
                name: "Imran",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is amazing",
            date: "13 Jan 2019",
            },
         ],
        },
        {
          id: 5,
          user: {
            id: 3,
            name: "Shahzad",
            profile_picture: "/images/person_1.jpg",
            about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
          },
          title: "Title of the post",
          date: '19 Fab 2010',
          picture: "images/img_4.jpg",
          description: 'this is some random text for the post for checking',
          comments: [
            {
              id: 1,
              user: {
                id: 1,
                name: "Kaleem",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is awesome",
            date: "12 Jan 2019",
            },
            {
              id: 2,
              user: {
                id: 2,
                name: "Imran",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is amazing",
            date: "13 Jan 2019",
            },
         ],
        },
        {
          id: 6,
          user: {
            id: 4,
            name: "Bilal",
            profile_picture: "/images/person_1.jpg",
            about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
          },
          title: "Title of the post",
          date: '02 March 2010',
          picture: "images/img_3.jpg",
          description: 'this is some random text for the post for checking',
          comments: [
            {
              id: 1,
              user: {
                id: 1,
                name: "Kaleem",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is awesome",
            date: "12 Jan 2019",
            },
            {
              id: 2,
              user: {
                id: 2,
                name: "Imran",
                profile_picture: "/images/person_1.jpg",
                about: "I'm graduate of BSCS from Khwaja Fareed University, learning web devlopment tools from Sir Shahzad Sahb"
              },
            comment: "This blog is amazing",
            date: "13 Jan 2019",
            },
         ]
        },
      ]    
    }
  },

  computed: {
    totalComments: function(){
      // for x in posts[0].comments
      var qty=0;
      for(var i=0; i<this.posts[0].comments.length; i++){
        qty = qty+1;
      }
      return qty;
    },
    postData: function(){
      var id= this.$route.params.id

      for(var i=0;i<this.posts.length;i++){
        if(i==this.posts.length-1){
          if(id==this.posts[i].id){
            return this.posts[i];
          }else{
            window.location.replace('/404');
          }
        }
        if(id==this.posts[i].id){
            return this.posts[i];
        }
      }
      return window.location.replace('/404');
    }
  },

  methods: {
    addNewComment: function(){
      if(this.newComment == "" || this.newName == ""){
        alert("Please enter required fields")
      }else{
        var id= this.$route.params.id
        var user= {
          id: this.newUserId++,
          name: this.newName,
          profile_picture: "/images/person_1.jpg",        
        }
        this.posts.filter(post => {
          if(post.id==id){
              post.comments.push({
                id: this.newId,
                user: user,
                comment: this.newComment,
                date: this.timeNow()
              })
          }
        })
      }
    },
    //   }).comments.push({
    //     id: this.newId,
    //     user: user,
    //     comment: this.newComment,
    //     date: this.timeNow
    //   })
    // },
    timeNow: function(){
      var currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      return currentDateWithFormat;
    }
  }

};
</script>