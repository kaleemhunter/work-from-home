<template>
    <div class="col-10">
              <nav class="site-navigation text-right" role="navigation">
                <div class="container">
                  <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

                  <ul class="site-menu js-clone-nav d-none d-lg-block">
                    <li class="active"><router-link to="/">Home</router-link></li>
                    <li class="has-children">
                      <a href="/about">About</a>
                      <ul class="dropdown arrow-top">
                        <li><router-link to="/testimonials">Testimonials</router-link></li>
                        <li><router-link to="/gallery">Gallery</router-link></li>
                        <li><router-link to="/faq">FAQ</router-link></li>
                        <li><a href="why-choose-us.html">Why Choose Us</a></li>
                        <li class="has-children">
                          <a href="#">Sub Menus</a>
                          <ul class="dropdown">
                            <li><router-link to="/testimonials">Testimonials</router-link></li>
                            <li><router-link to="/gallery">Gallery</router-link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                    <li><router-link to="/services">Services</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/contact">Contact<span class="d-inline-block bg-primary text-white btn btn-primary">Get Started</span></router-link></li>

                  </ul>
                </div>
              </nav>
            </div>
</template>