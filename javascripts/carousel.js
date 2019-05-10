const images = ["./images/carousel-2.png", "./images/ana-image-1.jpg", "./images/carousel-3.png", "./images/ana-image-2.jpg", "./images/carousel-1.png", "./images/ana-image-3.jpg"]
const videos = ["https://www.youtube.com/embed/8c2zVZpHtn4?ecver=2&enablejsapi=1", 
                "https://www.youtube.com/embed/UZJxDAcaiwA?ecver=2&enablejsapi=1", 
                "https://www.youtube.com/embed/dr5SvcHe3Gk?ecver=2&enablejsapi=1",
                "https://www.youtube.com/embed/8d0fJpilYPk?ecver=2&enablejsapi=1",
                "https://www.youtube.com/embed/JZ36vXjK8Dc?ecver=2&enablejsapi=1"]

// $(document).ready(function () {
//   var pos = 0,
//       slides = $('.slide'),
//       numOfSlides = slides.length;
//   console.log(" what is slide ", slides)

//   function nextSlide() {
//       // `[]` returns a vanilla DOM object from a jQuery object/collection
//       slides[pos].video.stopVideo()
//       slides.eq(pos).animate({ left: '-100%' }, 500);
//       pos = (pos >= numOfSlides - 1 ? 0 : ++pos);
//       slides.eq(pos).css({ left: '100%' }).animate({ left: 0 }, 500);
//   }

//   function previousSlide() {
//       slides[pos].video.stopVideo()
//       slides.eq(pos).animate({ left: '100%' }, 500);
//       pos = (pos == 0 ? numOfSlides - 1 : --pos);
//       slides.eq(pos).css({ left: '-100%' }).animate({ left: 0 }, 500);
//   }

//   $('.left').click(previousSlide);
//   $('.right').click(nextSlide);
// })

// function onYouTubeIframeAPIReady() {
//   $('.slide').each(function (index, slide) {
//       // Get the `.video` element inside each `.slide`
//       var iframe = $(slide).find('.video')[0]
//       // Create a new YT.Player from the iFrame, and store it on the `.slide` DOM object
//       slide.video = new YT.Player(iframe)
//   })
// }


$(document).ready(function (){
  $("#imageOne").prop("src", videos[0])
  $("#imageTwo").prop("src", videos[1])
  $("#imageThree").prop("src", videos[2])

  
})


function scrollRight() {
    
  console.log("right")
  
  let source = ""
  
    source = videos[0];
    videos.shift();
    videos.push(source);
    $("#imageOne").prop("src", videos[0])
    $("#imageTwo").prop("src", videos[1])
    $("#imageThree").prop("src", videos[2])
    
}

  function left() {
    
    console.log("left")
    
    let source = ""
     
      source = videos[videos.length - 1];
      videos.pop();
      videos.unshift(source);
      $("#imageOne").prop("src", videos[0])
      $("#imageTwo").prop("src", videos[1])
      $("#imageThree").prop("src", videos[2])
    
  }






  
