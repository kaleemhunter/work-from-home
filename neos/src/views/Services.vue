<template>
  <div class="services">
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
          <h1 class="text-uppercase">Services</h1>
          <span class="caption d-block text-white">Free Templates by<a href="#">Colorlib</a></span>
        </div>
      </div>
    </div>  

    <div class="slant-1"></div>

    
    
  <div class="site-section first-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12 text-center" data-aos="fade">
            <span class="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
            <h2 class="site-section-heading text-uppercase text-center font-secondary">Love Us Colorlib</h2>
          </div>
        </div>
        <div class="row border-responsive">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up" data-aos-delay="">
            <div class="text-center">
              <span class="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary"></span>
              <h3 class="text-uppercase h4 mb-3">Increase Revenue</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up" data-aos-delay="100">
            <div class="text-center">
              <span class="flaticon-bar-chart display-4 d-block mb-3 text-primary"></span>
              <h3 class="text-uppercase h4 mb-3">Analytics</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="text-center">
              <span class="flaticon-medal display-4 d-block mb-3 text-primary"></span>
              <h3 class="text-uppercase h4 mb-3">3 Years Experience</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up" data-aos-delay="">
            <div class="text-center">
              <span class="flaticon-box display-4 d-block mb-3 text-primary"></span>
              <h3 class="text-uppercase h4 mb-3">Free Package</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right" data-aos="fade-up" data-aos-delay="100">
            <div class="text-center">
              <span class="flaticon-medal display-4 d-block mb-3 text-primary"></span>
              <h3 class="text-uppercase h4 mb-3">3 Years Experience</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="text-center">
              <span class="flaticon-box display-4 d-block mb-3 text-primary"></span>
              <h3 class="text-uppercase h4 mb-3">Free Package</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div class="site-section section-counter">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="mb-5"><img src="images/img_1.jpg" alt="Image" class="img-fluid"></p>
          </div>
          <div class="col-lg-5 ml-auto">
            <h2 class="site-section-heading mb-3 font-secondary text-uppercase">Free Templates By Colorlib</h2>
            <p class="mb-5">Ullam ut modi cum voluptatibus atque nulla quidem maxime enim animi cupiditate, mollitia. </p>

            <div class="row">
              <div class="col-lg-6">
                <div class="counter">
                  <span class="caption">Current Downloads</span>
                  <span class="number" v-bind:data-number="total_download">0</span>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="counter">
                  <span class="caption">Number of Templates</span>
                  <span class="number" v-bind:data-number="total_template">0</span>
                </div>
              </div>
            </div>
            
          </div>
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
  name: "Services",
  components: {
    Navigation,
    Footer
  },
  data: function(){
    return {
      total_template: 212,
      total_download: 14002,
    }
  },
};
</script>


