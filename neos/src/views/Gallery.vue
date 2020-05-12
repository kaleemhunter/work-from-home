<template>
  <div class="gallery">
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
          <h1 class="text-uppercase">Gallery</h1>
          <span class="caption d-block text-white">Free Templates by<a href="#">Colorlib</a></span>
        </div>
      </div>
    </div>  

    <div class="slant-1"></div>

    
    
    <div class="site-section first-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12 text-center" data-aos="fade">
            <span class="caption d-block mb-2 font-secondary font-weight-bold">Photo Gallery</span>
            <h2 class="site-section-heading text-uppercase text-center font-secondary">Company's Photo Gallery</h2>
          </div>
        </div>
        <div class="row">
          <template v-for="photo in gallery">  
            <div v-bind:key=photo.id class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
              <a v-bind:href="photo.link" data-fancybox="gallery"><img v-bind:src="photo.link" alt="Image" class="img-fluid"></a>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="py-5 bg-primary">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6 text-center mb-3 mb-md-0">
            <h2 class="text-uppercase text-white mb-4">Try For Your Next Project</h2>
            <a href="#" class="btn btn-bg-primary font-secondary text-uppercase">Contact Us</a>
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
  name: "Gallery",
  components: {
    Navigation,
    Footer
  },
  data: function(){
    return {
      gallery: [
        {
          id: 1,
          link: 'images/img_1.jpg' 
        },
        {
          id: 2,
          link: 'images/img_2.jpg' 
        },
        {
          id: 3,
          link: 'images/img_3.jpg' 
        },
        {
          id: 4,
          link: 'images/img_4.jpg' 
        },
        {
          id: 5,
          link: 'images/img_5.jpg' 
        },
        {
          id: 6,
          link: 'images/img_6.jpg' 
        },
      ]
    }
  },
};
</script>


