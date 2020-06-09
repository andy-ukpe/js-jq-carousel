// cliccando sul tasto next le immagini scorrono insieme il cerchio
$(document).ready(
  function(){
    $('.next').click(

      function(){
        farScorrereLeImmaginiInAvanti ();
      }
    );

      $('.prev').click(

        function(){
          farScorrereLeImmaginiIndietro();
        }
      );

  }
);


// creare una funzione per far scorrere le immagini e i pallini
function farScorrereLeImmaginiInAvanti(){

  var immagineCorrente = $('.images > img.active');
  var bollinoCorrente = $('.nav > i.active');
  // far passare le immagini visualizzate a quella successiva
  immagineCorrente.removeClass('active');
  bollinoCorrente.removeClass('active');
  // far muovere le immagini dall'ultima alla prima
  if(immagineCorrente.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav > i.first').addClass('active');
  }

  // far passare le immagini visualizzate a quella successiva
  else {
    immagineCorrente.next('img').addClass('active');
    bollinoCorrente.next('i').addClass('active');
  }

};

function farScorrereLeImmaginiIndietro(){

  var immagineCorrente = $('.images > img.active');
  var bollinoCorrente = $('.nav > i.active');
  // far passare le immagini visualizzate a quella successiva
  immagineCorrente.removeClass('active');
  bollinoCorrente.removeClass('active');
  // far muovere le immagini dall'ultima alla prima
  if(immagineCorrente.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav > i.last').addClass('active');
  }

  // far passare le immagini visualizzate a quella successiva
  else {
    immagineCorrente.prev('img').addClass('active');
    bollinoCorrente.prev('i').addClass('active');
  }

};
