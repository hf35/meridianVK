
<?php
@$html = file_get_contents("http://relax-fm.ru/xml/playlist/current_song.xml",'r');
if ($html){
	//echo $html;
	$xml = xml_parser_create();
	xml_parser_set_option($xml, XML_OPTION_SKIP_WHITE, 1); 
	
	//разбираем XML-данные в структуру массива $xml_array
	xml_parse_into_struct($xml, $html, $element, $xml_array); 
	
	//освобождаем XML-разборщик
	xml_parser_free($xml);


	
	//$html = strip_tags($html);
	//$html = mb_ucfirst(mb_strtolower(strip_tags($html)));
	header('Ultra:ok');
	//$html = mb_convert_case($html, MB_CASE_TITLE, 'UTF-8');
	//if (strpos($html,"То Maximum!")){exit;};
	//if (!strpos($html,"Maximum")){exit;}
	//var_dump($element);

	$text = $element[1]["attributes"]["ARTIST"]." - ".$element[1]["attributes"]["TITLE"];
	//$text = iconv("WINDOWS-1251", "UTF-8",$text);
    if (strpos($text,"формация")){exit;};
	echo $text;
}else{
	echo "error";
	}
?>

