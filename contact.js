function validate() {
var value1 = document.getElementById("nom").value;
var value2 = document.getElementById("prenom").value;
var value7 = document.getElementById("email").value;
var value8 = document.getElementById("tel").value;
var value9 = document.getElementById("datearr").value;
var value10 = document.getElementById("datesor").value;
var value11 = document.getElementById("message").value;
if(document.getElementById("mr").checked==true)
var value3 = document.getElementById("mr").value;
	else if(document.getElementById("mme").checked==true)
		var value3 = document.getElementById("mme").value;
		else if(document.getElementById("mlle").checked==true)
			var value3 = document.getElementById("mlle").value;
			else if(document.getElementById("autre").checked==true)
			var value3 = document.getElementById("autre").value;
			else alert("Le champ Civilité ne peut pas rester vide");
			
		if(value1 == "")
		alert("Le champ Nom ne peut pas rester vide");
		if(value2 == "")
		alert("Le champ Prénom ne peut pas rester vide");
		if(value7 == "")
		alert("Le champ Email ne peut pas rester vide");
		if(value8= "")
		alert("Le champ Tel ne peut pas rester vide");
		if (value9 == "")
		alert("Le champ Date d'arrivée ne peut pas rester vide");
		if(value10 == "")
		alert("Le champ Date de sortie ne peut pas rester vide");
		if(value11 == "")
		alert("Le champ Message ne peut pas rester vide");
		  else {
var report = " Nom:" + value1 +"\n Prenom:" + value2+"\n Civilité : " + value3+"\n Email : " 
+ value7+"\n Telephone : " + value8+"\n Date d'arrivée : " + value9+"\n Date de sortie : " + value10+
"\n Message : " + value11;
alert(report);
}
 if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)))
  {
    alert("Vous avez entrer une adresse email invalide");
  }
  if (document.getElementById("tel").value.length < 10 && document.getElementById("tel").value.length > 14  )
    {
        alert("le telephone doit contenir entre 10 et 14 chiffres");
	}
}