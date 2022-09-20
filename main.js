prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:100
});

Webcam.attach("#camara");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'">';
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AaCD7RN5a/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is "+prediction_1;
    speak_data_2="the second prediction is "+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}
