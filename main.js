// cliccando sul tasto next le immagini scorrono insieme il cerchio
$(document).ready(
  function(){
    $('.next').click(

      function(){
        farScorrereLeImmaginiInAvanti ();
      }
      
    );
  }
);


// creare una funzione per far scorrere le immagini e i pallini
function farScorrereLeImmaginiInAvanti(){

  var immagineCorrente = $('.image img.active');

  // far passare le immagini visualizzate a quella successiva
  immagineCorrente.removeClass('active');

  // far passare le immagini visualizzate a quella successiva
  if(immagineCorrente.hasClass('last')){
    $('.image img.active').addClass('active');
  }

  // far passare le immagini visualizzate a quella successiva
  else {
    immagineCorrente.next('img').addClass('active');
  }

}
