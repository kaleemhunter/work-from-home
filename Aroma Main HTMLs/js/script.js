var c_id = 0
var p_id = 0
var cartItems = new Array();
var currentReview;
var newstars;
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
      $('#description').text(response.description)
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
         var html = `<div class="review_item" class='`+ response[i].id +`s'>`+
                  `<div class="media">`+
                    `<div class="d-flex">`+
                      `<img src="img/product/review-1.png" alt="">`+
                    `</div>`+
                    `<div class="media-body">`+
                      `<h4>`+ response[i].user.username +`</h4>`+
                      stars +
                    `</div>`+
                  `</div>`+
                  `<p>`+ response[i].review_comment +`</p><a style='color:blue' type='button' class='editreview' value='`+ response[i].id +`'><i class="ti-pencil-alt"></i></a>  <a style='color:red' type='button' class='deletereview' value='`+ response[i].id +`'><i class="ti-trash"></i></a>`+
                `</div>`;
          $('.review_list').append(html)
       }
      },
      error: function(){
          alert("Error response in AJAX");
      }
  })
}


function getCart(){
  var url = 'http://localhost:8000/users/1/cart/'; 
  var total_bill = 0;
  $.ajax({
      url: url,
      // data: {'title':title, 'description': description},
      format: 'json',
      type: 'GET',
      success: function(response){
       for(var i=0; i<response.length; i++){
         totalprice = response[i].product.price * response[i].quantity;
         html = `<tr>`+ 
                  `<td>`+
                        `<div class="media">`+
                            `<div class="d-flex">`+
                                `<img src="img/cart/cart1.png" alt="">`+
                            `</div>`+
                            `<div class="media-body">`+
                                `<p>`+ response[i].product.name +`</p>`+
                            `</div>`+
                        `</div>`+
                    `</td>`+
                    `<td>`+
                        `<h5>`+ response[i].product.price +`</h5>`+
                    `</td>`+
                    `<td>`+
                        `<div class="product_count">`+
                          `<input type="number" name="qty" class='`+ response[i].id +`' id="sst" value=`+ response[i].quantity +` maxlength="12" value="1" title="Quantity:"`+
                                `class="input-text qty">`+
                        `</div>`+
                    `</td>`+
                    `<td>`+
                        `<h5 class='`+ response[i].id +`x' >`+ totalprice +`</h5>`+
                    `</td>`+
                `</tr>`;
          $('#cartitems').prepend(html)
          var dict = {
            id: response[i].id,
            name: response[i].product.name,
          };
          cartItems.push(dict)
          total_bill = total_bill + totalprice
       }
       $('#totalbill').text(total_bill)
      },
      error: function(){

        $('#cartitems').prepend("<tr><td>Your cart is empty.</td></tr>")
          // alert("Error response in AJAX");
      }
  })
}


$(document).ready(function(){
  var currentPage = String(location.href.split("/").slice(-1));
  var check = currentPage.includes('single-product.html')
  if(currentPage.includes('single-product') == true){
    getProductReviews()
  }
  // else if(currentPage.includes('tracking-order.html') == true){
  //   $('#trackingDetails').hide()
  // }
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

  $('#updatecart').click(function(){
    for(var i=0; i<cartItems.length; i++){
      id = cartItems[i].id
      itemQuantity = $('.'+id).val();
      url = 'http://localhost:8000/users/1/cart/'+id+'/'; 
      if(cartItems.length != 0 && itemQuantity > 0){
          $.ajax({
            url: url,
            data: {'quantity': itemQuantity},
            format: 'json',
            type: 'PUT',
            success: function(response){
              newPrice = response.product.price * response.quantity
              $('.'+id+'x').text(newPrice) 
            },
            error: function(){
                alert("Error response in AJAX");
            }
        })
      }else if(cartItems.length != 0 && itemQuantity==0){
          $.ajax({
            url: url,
            // data: {'quantity': itemQuantity},
            format: 'json',
            type: 'DELETE',
            success: function(response){
              // Product deleted successfully 
              var indexToDelete = id;
              cartItems = array.filter( (item, index) => {
                if(index !== indexToDelete){
                     return item;
                }
              });
            },
            error: function(){
                alert("Error response in AJAX");
            }
        })
      } 
    }
  })

  $('#placeorder').click(function(){
    url = 'http://localhost:8000/users/1/order/';
    shippingaddress = $('#shippingaddress').val()
    if(shippingaddress != "" && cartItems.length != 0){
      $.ajax({
        url: url,
        data: {'shipping_address': shippingaddress},
        format: 'json',
        type: 'POST',
        success: function(response){
          url = String(window.location);
          newurl = "confirmation.html?o_id=" + response.id
          url = url.replace("cart.html", newurl);
          window.location = url
        },
        error: function(){
         
            alert("Error response in AJAX");
        }
      })
    }else{
      alert('Cart is empty or shipping address is not provided')
    }
  })

  $('#trackOrder').click(function(){
    $('#trackingDetails').empty()
    trackingId = $('#orderid').val();
    url = 'http://localhost:8000/users/1/order/'+trackingId+'/';
    if(trackingId != ""){
      $.ajax({
        url: url,
        format: 'json',
        type: 'GET',
        success: function(response){
             html=  `<div class='container'><div class="order_details_table">`+
                `<h2>Order Details</h2>`+
                `<div class="table-responsive">`+
                  `<table class="table">`+
                    `<thead>`+
                      `<tr>`+
                        `<th scope="col">Product</th>`+
                        `<th scope="col">Quantity</th>`+
                        `<th scope="col">Total</th>`+
                      `</tr>`+
                    `</thead>`+
                    `<tbody id="orderItems">`;
                    for(var i=0; i<response.orderproducts.length; i++){
                      itemPrice = response.orderproducts[i].product.price * response.orderproducts[i].quantity;
                      html +=`<tr>`+
                              `<td>`+
                                `<p>`+ response.orderproducts[i].product.name +`</p>`+
                              `</td>`+
                              `<td>`+
                                `<h5>x`+ response.orderproducts[i].quantity +`</h5>`+
                              `</td>`+
                              `<td>`+
                                `<p>`+ itemPrice +`</p>`+
                              `</td>`+
                            `</tr>`;
                        $('#orderItems').prepend(html)
                    }
                      
              
                html += `<tr>`+
                        `<td>`+
                          `<h4>Subtotal</h4>`+
                        `</td>`+
                        `<td>`+
                          `<h5>asd</h5>`+
                        `</td>`+
                        `<td>`+
                          `<p id="subtotal">`+ response.total_bill +`</p>`+
                        `</td>`+
                      `</tr>`+
                      `<tr>`+
                        `<td>`+
                          `<h4>Shipping</h4>`+
                        `</td>`+
                        `<td>`+
                          `<h5></h5>`+
                        `</td>`+
                        `<td>`+
                          `<p>Free</p>`+
                        `</td>`+
                      `</tr>`+
                      `<tr>`+
                        `<td>`+
                          `<h4>Total</h4>`+
                        `</td>`+
                        `<td>`+
                          `<h5></h5>`+
                        `</td>`+
                        `<td>`+
                          `<h4 id="total">`+ response.total_bill +`</h4>`+
                        `</td>`+
                      `</tr>`+
                      `<tr>`+
                        `<td>`+
                          `<h4>Status</h4>`+
                        `</td>`+
                        `<td>`+
                          `<h5></h5>`+
                        `</td>`+
                        `<td>`+
                          `<h4 id="status">`+ response.status +`</h4>`+
                        `</td>`+
                      `</tr>`+
                      `<tr>`+
                        `<td>`+
                          `<h4>Shipping Address</h4>`+
                        `</td>`+
                        `<td>`+
                          `<h5></h5>`+
                        `</td>`+
                        `<td>`+
                          `<h4 id="address">`+ response.shipping_address +`</h4>`+
                        `</td>`+
                        
                      `</tr>`+
                    `</tbody>`+
                  `</table>`+
                `</div>`+
              `</div></div><br><br>`;
            $('#trackingDetails').append(html)
          
        },
        error: function(){
         
            alert("No order found with that tracking code");
        }
      })
    }
  })

  $('.stars').click(function(){
    newstars = $(this).attr('value')
  })

  $(document).on("click",".editreview",function(){
    var id = $(this).attr('value');
    currentReview = id
    $('.modal').modal()
  })

  $('#editbutton').click(function(){
    var newreview = $('#newreview').val()
    var url = 'http://localhost:8000/categories/'+ c_id +'/products/'+ p_id +'/reviews/'+ currentReview + '/';
    if(newreview != "" && (newstars > 0 && newstars < 6)){
        $.ajax({
          url: url,
          data: {'review_comment':newreview, 'review_stars': newstars, 'user': 1},
          format: 'json',
          type: 'PUT',
          success: function(response){
            location.reload();
          },
          error: function(){
              alert("You already posted the review");
          }
      })
    }else{
      alert('Please select rating stars from 1-5')
    }
  })

  $(document).on('click', '.deletereview', function(){
    r_id = $(this).attr('value')
    var url = 'http://localhost:8000/categories/'+ c_id +'/products/'+ p_id +'/reviews/'+ r_id + '/';
    $.ajax({
      url: url,
      format: 'json',
      type: 'DELETE',
      success: function(response){
        location.reload();
      },
      error: function(){
          alert("Something went wrong, cannot delete review");
      }
  })
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
                    `<p>`+ response.review_comment +`</p><a style='color:blue' type='button' class='editreview' value='`+ response.id +`'><i class="ti-pencil-alt"></i></a>  <a style='color:red' type='button' class='deletereview' value='`+ response.id +`'><i class="ti-trash"></i></a>`+
                  `</div>`;
            $('.review_list').append(html)
        },
        error: function(){
            alert("You already posted the review");
        }
    })
  }else{
    alert("Please select rating stars")
  }
}


function orderConfirmed(){
  o_id = getUrlVars()["o_id"];
  var lastChar = o_id.substr(o_id.length - 1);
  if(lastChar== '#'){
    o_id = o_id.slice(0, -1);
  }
  var url = 'http://localhost:8000/users/1/order/'+o_id+'/';
  $.ajax({
      url: url,
      // data: {'title':title, 'description': description},
      format: 'json',
      type: 'GET',
      success: function(response){  
        for(var i=0; i<response.orderproducts.length; i++){
          itemPrice = response.orderproducts[i].product.price * response.orderproducts[i].quantity;
          html =`<tr>`+
                  `<td>`+
                    `<p>`+ response.orderproducts[i].product.name +`</p>`+
                  `</td>`+
                  `<td>`+
                    `<h5>x`+ response.orderproducts[i].quantity +`</h5>`+
                  `</td>`+
                  `<td>`+
                    `<p>`+ itemPrice +`</p>`+
                  `</td>`+
                `</tr>`;
            $('#orderItems').prepend(html)
        }
        $('#subtotal').text(response.total_bill)
        $('#total').text(response.total_bill)
        $('#orderbill').text(': '+response.total_bill)
        $('#ordertime').text(': '+response.added.slice(0,10))
        $('#orderid').text(': '+response.id)
        $('#billingaddress').text(': '+response.shipping_address)
        $('#shippingaddress').text(': '+response.shipping_address)
      },
      error: function(){
          alert("Error response in AJAX");
      }
  })
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