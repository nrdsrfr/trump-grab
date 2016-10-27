//Previews image file localy 
function previewFile(){
    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
    	preview.src = reader.result;
    	preview.value = reader.result;
    }

    if (file) {
    	reader.readAsDataURL(file); //reads the data as a URL
    } else {
       preview.src = "";
    }
}

// Hide class weeklyfixtures
function hideToggle() { $(".uploadForm").hide(); }

// Used to swap the css 
function adjustStyle(width,height) {
  var width = parseInt(width);
  var height = parseInt(height);
  console.log("WIDTH >>> "+width);
  console.log("HEIGHT >>> "+height);
  if (width > 1024 && width < 1366 ) {
  	if (height > 800) {
     $("#size-stylesheet").attr("href", "../styles/style1440.css");	
  	}else{
  	 $("#size-stylesheet").attr("href", "../styles/style1024.css");	
  	}
  } else if (width > 767 && width < 1025) {
  	if (height > 800) {
     	$("#size-stylesheet").attr("href", "../styles/style1440.css"); 
  	}else if(height < 600){
  		$("#size-stylesheet").attr("href", "../styles/style1024.css");	
  	}else{
    	$("#size-stylesheet").attr("href", "../styles/style768.css");
	}
  } else if (width > 1367 ) {
     	$("#size-stylesheet").attr("href", "../styles/style1440.css"); 
  }else{

  }

}

// $(function() {
//   adjustStyle($(this).width(),$(this).height());
//   $(window).resize(function() {
//     adjustStyle($(this).width(),$(this).height());
//   });
// });

// $(".login").submit(function(e) {
//     e.preventDefault();
// });



