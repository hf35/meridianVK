
<?php
@$html = file_get_contents("http://www.grind.fm/sites/grind.fm/counter/meta2.php",'r');
if ($html){
	
	$html = substr_replace($html,"",-20);
	$html = substr($html,13);
    //echo $html;
	$element =  json_decode($html,true);
    header('Ultra:ok');
	//var_dump($element);
	//освобождаем XML-разборщик
	
	
    echo $element[sizeof($element)-1][1]." - ".$element[sizeof($element)-1][2];
}else{
	echo "error";
	}
?>

