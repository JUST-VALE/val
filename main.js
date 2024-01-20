function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lfFaG5_io/model.json', modelReady);
}
function modelReady(){
classifier.classify(clasificadordesonidos);
}
function clasificadordesonidos(error,results){
if(error){
console.log(error);
}
else{
console.log(results);
document.getElementById("result_label").innerHTML="holas"+results[0].label;
document.getElementById("result_confidence").innerHTML="holax "+results[0].confidence;
img1=document.getElementById("alien1");
img2=document.getElementById("alien2");
img3=document.getElementById("alien3");
img4=document.getElementById("alien4");
if(results[0].label=="Aplausos")[
  img.src = 'aliens-01.gif';
  img1.src = 'aliens-02.png';
  img2.src = 'aliens-03.png';
  img3.src = 'aliens-04.png';
]
}
}
