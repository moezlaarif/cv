<?php 
//$prenom = "moez";
//echo $prenom;
/*
function boutonsubmit(){
	$html = '<input type="submit" value="Envoyer">';
	return $html;
}

echo boutonsubmit();

if (isset($_POST["prenom"]))
{
	echo htmlentities($_POST["prenom"]);
}

$mario['type']='plateforme';
$mario['console']='nintendo';
$mario['public']='tous';

foreach($mario as $clef => $valeur)
{
	echo $clef." a la valeur ". $valeur."<br />";
} 

*/
session_start();
$_SESSION["login"]="moez";

?>
<a href="page1.php">Aller sur la page suivante</a>
<!-- <html>
	<head>
	</head>
	
	<body>
	
	<form action="index.php" method="POST" name="formulaire">
Prenom : <input type="text" class="nom" Name="prenom" size="30" maxlength="40" >
<input type="submit" value="Envoyer">
</form>
	</body>
	</html>