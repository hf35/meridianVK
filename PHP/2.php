
<?php
$html = file_gset_contents("http://mp3.nashe.ru/ultra-192.xspf",'r');
if ($html){
	//echo $html;
	$xml = xml_parser_create();
	xml_parser_set_option($xml, XML_OPTION_SKIP_WHITE, 1); 
	
	//разбираем XML-данные в структуру массива $xml_array
	xml_parse_into_struct($xml, $html, $element, $xml_array); 
	
	//освобождаем XML-разборщик
	xml_parser_free($xml);

	
	echo $element[6]["value"];
}else{
	echo "error";
	}
?>

