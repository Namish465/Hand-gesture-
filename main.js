Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
    width: 345,
    height: 325,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {

    Webcam.snap( function(data_uri)
    {   
    document.getElementById("result").innerHTML = '<img id="captured_image" src = " '+data_uri+' "/> ';
        
    });
}

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tu8uk4Jfh/model.json',modelLoaded);

 function modelLoaded()
 {
console.log('modelLoaded!');
 }

   function speak()
  {

 var synth = window.speechSynthesis;
 speak_data_1 = " the first prediction is " + Prediction_1;
 speak_data_2 = " the second prediction is " + Prediction_2;
 var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
 synth.speak(utterThis);

  }    
  
  function check() 
  {
  
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);


  }

  function gotResult(error, results)
  {

 if(error)
 {
     console.error(error);

 }

else 
{
    console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;

Prediction_1 = results[0].label;
Prediction_2 = results[1].label;
speak();

if(results[0].label == " Victory hand")
{

document.getElementById("update_emoji").innerHTML ="✌";

}

if(results[0].label == "Crossed fingers")
{

    document.getElementById("update_emoji").innerHTML = "🤞";
}

if(results[0].label == "Sign of the Horns")
{

    document.getElementById("update_emoji").innerHTML = "🤘";
}

if(results[0].label == "Shaka sign")
{

document.getElementById("update_emoji").innerHTML ="🤙";

}

if(results[0].label == "Stop")
{

    document.getElementById("update_emoji").innerHTML = "✋";
}

if(results[0].label == "Ok")
{

    document.getElementById("update_emoji").innerHTML = "👌";
}

if(results[0].label == "Thumbs Up")
{

document.getElementById("update_emoji").innerHTML ="👍";

}

if(results[0].label == "Thumbs down")
{

    document.getElementById("update_emoji").innerHTML = "👎";
}

if(results[0].label == "Oncoming Fist")
{

    document.getElementById("update_emoji").innerHTML = "👊";
}





if(results[1].label == " Victory hand")
{

document.getElementById("update_emoji2").innerHTML ="✌";

}

if(results[1].label == "Crossed fingers")
{

    document.getElementById("update_emoji2").innerHTML = "🤞";
}

if(results[1].label == "Sign of the Horns")
{

    document.getElementById("update_emoji2").innerHTML = "🤘";
}

if(results[1].label == "Shaka sign")
{

document.getElementById("update_emoji2").innerHTML ="🤙";

}

if(results[1].label == "Stop")
{

    document.getElementById("update_emoji2").innerHTML = "✋";
}

if(results[1].label == "Ok")
{

    document.getElementById("update_emoji2").innerHTML = "👌";
}

if(results[1].label == "Thumbs Up")
{

document.getElementById("update_emoji2").innerHTML ="👍";

}

if(results[1].label == "Thumbs down")
{

    document.getElementById("update_emoji2").innerHTML = "👎";
}

if(results[1].label == "Oncoming Fist")
{

    document.getElementById("update_emoji2").innerHTML = "👊";
}
}
  }