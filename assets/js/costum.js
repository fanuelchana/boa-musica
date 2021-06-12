
var carousel = $('.owl-carousel');
carousel.on({

    'initialized.owl.carousel': function () {
         carousel.find('.owl-item').show();
         carousel.find('.loading-placeholder').hide();
    }

}).owlCarousel({
    loop:true,
   	nav: false,
		margin:10,
		responsiveClass:true,
    autoplay:true,
		autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
         0:{
             items:1,
             nav:false
         },
         600:{
             items:4,
             nav:false,
             loop:true
         },
         1000:{
             items:5,
             nav:false,
             loop:true
				}}
});



$( "#payBtn" ).click(function(e) {
    //Validar Campo
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Enviado!',
        text: 'Verifique o seu celular para concluir o pagamento',
        timer: 3000
    }, 3000);
  });

