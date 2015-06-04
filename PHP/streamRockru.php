
<?php
@$html = file_get_contents("http://www.fmrock.ru/ajax/vote.php?getstate=true",'r');
if ($html){
	//echo $html;
	
	
	$element =  json_decode($html,true);
	//var_dump($element);
	//освобождаем XML-разборщик
	
	header('Ultra:ok');
	
	//echo $element[6]["value"];
	echo $element["artist"]." - ".$element["title"];
}else{
	echo "error";
	}
?>

