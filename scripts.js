// Function to refresh the form after submition
function formRefresh(){
    document.getElementById("form_data").reset();
}
// Event function on button
function akanNames(){
    var gender;
    var day;
    day=parseInt(document.getElementById("day").value);
    var month;
    month=parseInt(document.getElementById("month").value);
    var year;
    year=document.getElementById("year").value;
    //Centuary calculation
    var centry;
    centry=parseInt(year.slice(0, 2));
    var yearDigits;
    yearDigits=parseInt(year.slice(2, 4));
    var dayOfTheWeek;
    dayOfTheWeek = ( ( (centry/4) - 2*centry-1) + ((5*yearDigits/4) ) + ((26*(month+1)/10)) + day ) % 7;
    var femaleNames;
    femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames;
    maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    gender=document.getElementById("gender").value;
    var daysOfWeek;
    daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dOfWeek;
    dOfWeek = Math.trunc(dayOfTheWeek);
    var dayName;
    //form valid and output
   if(!isNaN(dOfWeek)){
        if(gender==="male"){
            dayName = maleNames[dOfWeek];
        }
        else if (gender==="female") {
            dayName = femaleNames[dOfWeek];
        } else {
            alert("valid valid dates and choose your gender");
            document.getElementById("myAkan").innerHTML="";
        }
   }else{
        alert("Enter valvalidid birthday and choose your gender");
        document.getElementById("myAkan").innerHTML="";
            }
            document.getElementById("myAkan").innerHTML= "Your Akan name is: " + dayName;
        }