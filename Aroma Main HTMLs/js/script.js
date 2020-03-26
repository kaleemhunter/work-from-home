var c_id = 0
var p_id = 0
function getCategories(){
    $.ajax({
        url: 'http://localhost:8000/categories/',
        // data: {'title':title, 'description': description},
        format: 'json',
        type: 'GET',
        success: function(response){
            for(var i=0; i<response.length; i++){
                html=`<div class="col-md-6 col-lg-4">`+
                `<div class="card text-center card-product">`+
                  `<div class="card-product__img">`+
                    `<img class="card-img" src="img/product/product1.png" alt="">`+
                  `</div>`+
                  `<div class="card-body">`+
                    `<h4 class="card-product__title"><a href="products.html?c_id=`+ response[i].id +`">`+ response[i].name +`</a></h4>`+
                  `</div>`+
                `</div>`+
              `</div>`;
              $('#categorieslist').append(html);
            }
        },
        error: function(){
            alert("Error response in AJAX");
        }
    })
}

function getProducts(){
  c_id = getUrlVars()["c_id"];
  var url = 'http://localhost:8000/categories/' + c_id + '/products/' 
  $.ajax({
      url: url,
      // data: {'title':title, 'description': description},
      format: 'json',
      type: 'GET',
      success: function(response){
          for(var i=0; i<response.length; i++){
              html=`<div class="col-md-6 col-lg-4">`+
              `<div class="card text-center card-product">`+
                `<div class="card-product__img">`+
                  `<img class="card-img" src="img/product/product1.png" alt="">`+
                `</div>`+
                `<div class="card-body">`+
                  `<h4 class="card-product__title"><a href="single-product.html?c_id=`+ c_id +`&p_id=`+ response[i].id +`">`+ response[i].name +`</a></h4>`+
                  `<p class="card-product__price">`+ response[i].price +`</p>`+
                `</div>`+
              `</div>`+
            `</div>`;
            $('#productslist').append(html);
          }
      },
      error: function(){
          alert("Error response in AJAX");
      }
  })
}


function getSingleProduct(){
  c_id = getUrlVars()["c_id"];
  p_id = getUrlVars()["p_id"];
  var url = 'http://localhost:8000/categories/' + c_id + '/products/' + p_id + '/'; 
  $.ajax({
      url: url,
      // data: {'title':title, 'description': description},
      format: 'json',
      type: 'GET',
      success: function(response){
       var availabilityl;
       if(response.availability== false){
         availability = "Out of Stock";
       }else{
         availability = "In Stock"
       }
      $('#producttitle').text(response.name)
      $('#productprice').text(response.price)
      $('#productavailibility').text('Availibility: '+ availability)
      hreflink = 'category.html?c_id='+response.category.id;
      $('#productcategory').attr('href', hreflink)
      $('#productcategory').text('Category: '+ response.category.name)
      $('#productdiscriptionshort').text(response.description)
      },
      error: function(){
          alert("Error response in AJAX");
      }
  })
}

function getProductReviews(){
  c_id = getUrlVars()["c_id"];
  p_id = getUrlVars()["p_id"];
  var url = 'http://localhost:8000/categories/' + c_id + '/products/' + p_id + '/reviews/'; 
  $.ajax({
      url: url,
      // data: {'title':title, 'description': description},
      format: 'json',
      type: 'GET',
      success: function(response){
       for(var i=0; i<response.length; i++){
         var stars= "";
         for(var x=0; x<parseInt(response[i].review_stars); x++){
           stars += `<i class="fa fa-star"></i>`;
         }
         var html = `<div class="review_item">`+
                  `<div class="media">`+
                    `<div class="d-flex">`+
                      `<img src="img/product/review-1.png" alt="">`+
                    `</div>`+
                    `<div class="media-body">`+
                      `<h4>`+ response[i].user.username +`</h4>`+
                      stars +
                    `</div>`+
                  `</div>`+
                  `<p>`+ response[i].review_comment +`</p>`+
                `</div>`;
          $('.review_list').append(html)
       }
      },
      error: function(){
          alert("Error response in AJAX");
      }
  })
}

$(document).ready(function(){
  getProductReviews()
  $('#addToCart').click(function(){
    addToCart();
  });
  $('#reviewbtn').click(function(){
    postProductReview();
  });

  $('.star').click(function(){
    var a = $(this).children('a').attr('value')
    $('#stars').val(a)
  })
})


function postProductReview(){
  c_id = getUrlVars()["c_id"];
  p_id = getUrlVars()["p_id"];
  review_comment = $('#textarea').val()
  review_stars = $('#stars').val()
  var url = 'http://localhost:8000/categories/' + c_id + '/products/' + p_id + '/reviews/'; 
  if(review_stars > 0 && review_stars < 6){
      $.ajax({
        url: url,
        data: {'review_comment':review_comment, 'review_stars': review_stars, 'user': 1},
        format: 'json',
        type: 'POST',
        success: function(response){
          var stars= "";
          for(var x=0; x<parseInt(response.review_stars); x++){
            stars += `<i class="fa fa-star"></i>`;
          }
          var html = `<div class="review_item">`+
                    `<div class="media">`+
                      `<div class="d-flex">`+
                        `<img src="img/product/review-1.png" alt="">`+
                      `</div>`+
                      `<div class="media-body">`+
                        `<h4>`+ response.user.username +`</h4>`+
                        stars +
                      `</div>`+
                    `</div>`+
                    `<p>`+ response.review_comment +`</p>`+
                  `</div>`;
            $('.review_list').append(html)
        },
        error: function(){
            alert("Error response in AJAX");
        }
    })
  }else{
    alert("Please select rating stars")
  }
}


function addToCart(){
  // Currently im adding products to User1 Cart, but when there is Login System, Products can add into individual user carts.
  quantity = $('#sst').val()
  var url = 'http://localhost:8000/users/1/cart/' 
  $.ajax({
      url: url,
      data: {'product':c_id, 'quantity': quantity},
      format: 'json',
      type: 'POST',
      success: function(response){
          alert('Product added to cart')
      },
      error: function(){
          alert("Error response in AJAX");
      }
  })
}



// GET PARAMETERS FROM URL FUNCTION 
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}