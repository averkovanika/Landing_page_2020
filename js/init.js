// (function($){
//     $(function(){
  
//     }); // end of document ready
//   })(jQuery); // end of jQuery name space
  



  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".position_fixed").style.top = "0";
    document.querySelector(".position_fixed").style.visibility = "visible";
  } else {
    document.querySelector(".position_fixed").style.top = "-60px";
    document.querySelector(".position_fixed").style.borderBottom = "none";
    document.querySelector(".position_fixed").style.visibility = "hidden";
  }
  prevScrollpos = currentScrollPos;
};
  


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


// --Map JS--




ymaps.ready(init); 
function init(){
  var myMap = new ymaps.Map(
    "map_index",
    {
      center: [52.441357,30.928880],
      zoom: 12,
      controls: ['zoomControl', 'fullscreenControl', 'routeButtonControl']
      // controls: ['smallMapDefaultSet']
    }, 
    {
      searchControlProvider: 'yandex#search'    
    }
  );
  // myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
  var myPlacemark = new ymaps.Placemark([52.441357,30.928880]);
  myMap.geoObjects.add(myPlacemark);	
  var myMap = new ymaps.Map(
    "map_contacts",
    {
      center: [52.441357,30.928880],
      zoom: 12,
      controls: ['zoomControl', 'fullscreenControl', 'routeButtonControl']
      // controls: ['smallMapDefaultSet']
    }, 
    {
      searchControlProvider: 'yandex#search'    
    }
  );
  // myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
  var myPlacemark = new ymaps.Placemark([52.441357,30.928880]);
  myMap.geoObjects.add(myPlacemark);	

}

