function validate() {
	var requiredNotEmptyElement = [
		"nom", 
		"prenom", 
		"email", 
		"tel", 
		"datearr", 
		"datesor", 
		"message"
	];
	
	for(i=0; i<requiredNotEmptyElement.length; i++){
	var elementId =  requiredNotEmptyElement[i];
		if(document.getElementById(elementId).value == ""){
			alert("Le champ "+elementId+" ne peut pas rester vide");
			return false;
		}
	}

	/*********/
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var datearr = document.getElementById("datearr").value;
	var datesor = document.getElementById("datesor").value;
	var message = document.getElementById("message").value;
					/*	
			var civilite="";
			for(i=0; i<document.formulaire.boutonradio.length; i++){
				if(document.formulaire.boutonradio[i].checked){
					civilite = document.formulaire.boutonradio[i].value;
					}
			}
			
	/*		if(nom == "")
				alert("Le champ Nom ne peut pas rester vide");
			else if(prenom == "")
				alert("Le champ Prénom ne peut pas rester vide");
			else if(civilite == "")
				alert("Le champ Civilité ne peut pas rester vide");
			else if(email == "")
				alert("Le champ Email ne peut pas rester vide");
			else if(tel= "")
				alert("Le champ Tel ne peut pas rester vide");
			else if (datarr == "")
				alert("Le champ Date d'arrivée ne peut pas rester vide");
			else if(datesor == "")
				alert("Le champ Date de sortie ne peut pas rester vide");
			else if(message == "")
				alert("Le champ Message ne peut pas rester vide");
				else {
	var report = " Nom:" + nom +"\n Prenom:" + prenom +"\n Civilité : " + civilite +"\n Email : " 
	+ email +"\n Telephone : " + tel +"\n Date d'arrivée : " + datearr +"\n Date de sortie : " + datesor +
	"\n Message : " + message;
	alert(report);
	} */
	 if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)))
	  {
		alert("Vous avez entrer une adresse email invalide");
		return false;
	  }
	  if (document.getElementById("tel").value.length < 10 && document.getElementById("tel").value.length > 14  )
		{
			alert("le telephone doit contenir entre 10 et 14 chiffres");
			return false;
		}
	return true;
}