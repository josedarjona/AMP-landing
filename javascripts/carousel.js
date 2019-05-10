const images = ["./images/carousel-2.png", "./images/ana-image-1.jpg", "./images/carousel-3.png", "./images/ana-image-2.jpg", "./images/carousel-1.png", "./images/ana-image-3.jpg"]
const videos = ["https://www.youtube.com/embed/8c2zVZpHtn4?ecver=2&enablejsapi=1", 
                "https://www.youtube.com/embed/UZJxDAcaiwA?ecver=2&enablejsapi=1", 
                "https://www.youtube.com/embed/dr5SvcHe3Gk?ecver=2&enablejsapi=1",
                "https://www.youtube.com/embed/8d0fJpilYPk?ecver=2&enablejsapi=1",
                "https://www.youtube.com/embed/JZ36vXjK8Dc?ecver=2&enablejsapi=1"]

//stackoverflow said this was required but seems to be working fine without it, commenting incase needed.

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






  
