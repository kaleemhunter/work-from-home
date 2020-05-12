<template>
  <div class="blog">
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
  
    <div class="site-blocks-cover inner-page overlay" style="background-image: url(images/hero_2.jpg);" data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-5 text-center" data-aos="fade">
          <h1 class="text-uppercase">Blog Posts</h1>
          <span class="caption d-block text-white">Free Templates by<a href="#">Colorlib</a></span>
        </div>
      </div>
    </div>  

    <div class="slant-1"></div>

    
    
  <div class="site-section first-section" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
         <template v-for="post in posts">
          <div v-bind:key='post.id' class="col-md-6 col-lg-4 mb-5">
            <div class="media-image">
              <router-link :to="{name: 'Single', params: {id: post.id}}"><img v-bind:src="post.picture" alt="Image" class="img-fluid"></router-link>
              <div class="media-image-body">
                <h2 class="font-secondary text-uppercase"><router-link :to="{name: 'Single', params: {id: post.id}}">{{ post.title }}></router-link></h2>
                <span class="d-block mb-3">By {{ post.user.name }} &mdash; {{ post.date }}</span>
                <p> {{ post.description.substring(0,50) + "..." }} </p>
                <!-- <p><a href="#">Read More</a></p> -->
              </div>
            </div>
          </div>
         </template>
        </div>
      </div>
    </div>

    

    <div class="py-5 bg-primary">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6 text-center mb-3 mb-md-0">
            <h2 class="text-uppercase text-white mb-4" data-aos="fade-up">Try For Your Next Project</h2>
            <a href="#" class="btn btn-bg-primary font-secondary text-uppercase" data-aos="fade-up" data-aos-delay="100">Contact Us</a>
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
  name: "Blog",
  components: {
    Navigation,
  },
  data: function(){
    return {
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
  }
};
</script>

