 function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display="block";
  }

  function CheckKousen() {
    if (document.getElementById("radio1").checked == false) {
      document.getElementById("KousenText").value = "   Probeer opnieuw";
      document.getElementById("KousenText").style = "color: red;border: white; font-weight: bold;"
    }  else{
      document.getElementById("KousenText").value = "   Juist";
      document.getElementById("KousenText").style = "color: green;border: white; font-weight: bold;"
    }
  }

  function CheckHanden() {
    if (document.getElementById("radioHand3").checked == false) {
      document.getElementById("HandenText").value = "   Probeer opnieuw";
      document.getElementById("HandenText").style = "color: red;border: white; font-weight: bold;"
      document.getElementById("HandenTextInfo").value = "";
    }  else{
      document.getElementById("HandenText").value = "   Juist";
      document.getElementById("HandenText").style = "color: green;border: white; font-weight: bold;"
      document.getElementById("HandenTextInfo").value = " Dit is het hand van Sauronman (Lord of the rings trilogie)";
      document.getElementById("HandenTextInfo").style = "border: white; font-weight: bold;"
    }
  }

  