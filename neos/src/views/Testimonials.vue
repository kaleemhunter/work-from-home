<template>
  <div class="testimonials">
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
          <h1 class="text-uppercase">Testimonials</h1>
          <span class="caption d-block text-white">Free Templates by <a href="#">Colorlib</a></span>
        </div>
      </div>
    </div>  

    <div class="slant-1"></div>

    
    
    <div class="site-section first-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12 text-center">
            <span class="caption d-block mb-2 font-secondary font-weight-bold">Testimonials</span>
            <h2 class="site-section-heading text-uppercase text-center font-secondary">Happy Customers</h2>
          </div>
        </div>
        
        <div class="row">
          <!-- Testimonials Loop Start -->
          <template v-for="testimonial in testimonials">  
            <div :key="testimonial.id" class="col-md-6 col-lg-6 mb-4">
              <div class="d-block block-testimony mx-auto text-center">
                <div class="person w-25 mx-auto mb-4">
                  <img src="images/person_1.jpg" alt="Image" class="img-fluid rounded-circle w-50 mx-auto">
                </div>
                <div>
                  <h2 class="h5 mb-4">{{testimonials.name}}</h2>
                  <blockquote>{{testimonial.description}}</blockquote>
                </div>
              </div>
            </div>
          </template>
          <!-- Testimonials Loop End -->
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
  name: "Testimonials",
  components: {
    Navigation,
    Footer
  },
  data: function(){
    return {
      testimonials: [
        {
          id: 1,
          name: "Kaleem Qasim",
          description: "&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;" 
        }, 
        { 
          id: 2,
          name: "Muhammad Shahzad",
          description: "&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;" 
        },
        { 
          id: 3,
          name: "Sania Mirza",
          description: "&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;" 
        },
      ]
    }
  }
};
</script>


