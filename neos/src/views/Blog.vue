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

    <Footer></Footer>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Blog",
  components: {
    Navigation,
    Footer
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

