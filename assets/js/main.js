$(document).ready(function(){
   
    $('#nav').onePageNav({
        currentClass: 'current'
    });
    

    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });
    $('.video-popup').magnificPopup({
        type:'iframe'
    });

    $('#nav').slicknav();

    $('.counterup').counterUp({
        delay: 10,
        time: 1000
    });
    $('.testimonials').slick({
        slidesToShow: 3,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        dots:true,
        infinite:true,
        autoplay:true,
        loop:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
               arrows:false
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows:false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.partner').slick({
        slidesToShow: 5,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        dots:true,
        infinite:true,
        autoplay:true,
        loop:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows:false
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                arrows:false,
                dots:false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
})


$(window).on('scroll',function(){
    if($(this).scrollTop()>25){
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky');
    }
})


//for table
fetch("https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users")
.then((response) => response.json())
.then((data) => {
  let tableData = "";
  data.map((values) => {
    tableData+= `<tr>
    <td>${values.id}</td>
    <td>${values.name}</td>
    <td>${values.score}</td>
    <td>${values.country}</td>
    <td><img src = "${values.photo}"></img></td>
    </tr>`
    })
  document.getElementById('table_body').innerHTML = tableData; 
}).catch(err => {
  console.log(err);
})

//for searching table
function tableSearch() {
  let input, filter, table, tr, td, txtValue;

  //Intialising Variables
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }

}