const images = ["./images/carousel-2.png", "./images/ana-image-1.jpg", "./images/carousel-3.png", "./images/ana-image-2.jpg", "./images/carousel-1.png", "./images/ana-image-3.jpg"]



$(document).ready(function (){
  $("#imageOne").prop("src", images[0])
  $("#imageTwo").prop("src", images[1])
  $("#imageThree").prop("src", images[2])

  
})



function scrollRight() {
    
  console.log("right")
  
  let source = ""
  
    source = images[0];
    images.shift();
    images.push(source);
    $("#imageOne").prop("src", images[0])
    $("#imageTwo").prop("src", images[1])
    $("#imageThree").prop("src", images[2])
    
}




  function left() {
    
    console.log("left")
    
    let source = ""
     
      source = images[images.length - 1];
      images.pop();
      images.unshift(source);
      $("#imageOne").prop("src", images[0])
      $("#imageTwo").prop("src", images[1])
      $("#imageThree").prop("src", images[2])
    
  }




  
