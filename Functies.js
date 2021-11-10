 /* Deze vergtoot de afbeeldingen (kunstwerken) */
 function onClick(element) {


    // document.getElementById("img01").src = "../foto's\\reeks2 Beeldhouwen vogels\\3 bis Ancient kingdom .jpg";
    // document.getElementById("modal01").style.display="block";

    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display="block";
  }

  // function onClickWithPicture(source) {


  //   // document.getElementById("img01").src = "../foto's\\reeks2 Beeldhouwen vogels\\3 bis Ancient kingdom .jpg";
  //   // document.getElementById("modal01").style.display="block";
  //   alert(source)

  //   document.getElementById("img01").src = source;
  //   alert(source)
  //   document.getElementById("modal01").style.display="block";
  // }


/* Deze controleert de kousen (Test uw kennis) */
  function CheckKousen() {
    if (document.getElementById("radio1").checked == false) {
      document.getElementById("KousenText").value = "   Probeer opnieuw";
      document.getElementById("KousenText").style = "color: red;border: white; font-weight: bold;"
    }  else{
      document.getElementById("KousenText").value = "   Juist";
      document.getElementById("KousenText").style = "color: green;border: white; font-weight: bold;"
    }
  }

/* Deze controleert de handen (Test uw kennis) */
  function CheckHanden() {
    if (document.getElementById("radioHand3").checked == false) {
      document.getElementById("HandenText").value = "   Probeer opnieuw";
      document.getElementById("HandenText").style = "color: red;border: white; font-weight: bold;"
      document.getElementById("HandenTextInfo").value = "";
    }  else{
      document.getElementById("HandenText").value = "   Juist";
      document.getElementById("HandenText").style = "color: green;border: white; font-weight: bold;"
      document.getElementById("HandenTextInfo").value = " Dit is het hand van Sauron (Lord of the rings trilogie)";
      document.getElementById("HandenTextInfo").style = "border: white; font-weight: bold;"
    }
  }

/* Deze toont een waarschuwing (Contact) */
  function Alertbox(){
    alert("Dit deel is nog in constuctie, geen mail zal worden verzonden")
  }

/* Deze toont de tijd (footer) */
  function GetTime(){
    document.getElementById("DateTime").innerHTML = Date();
  }
