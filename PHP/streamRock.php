
<?php
@$html = file_get_contents("http://www.live365.com/pls/front?handler=playlist&cmd=view&viewType=xml&maxEntries=1&handle=wwwrockfm",'r');
if ($html){
	//echo $html;
	$xml = xml_parser_create();
	xml_parser_set_option($xml, XML_OPTION_SKIP_WHITE, 1); 
	
	//разбираем XML-данные в структуру массива $xml_array
	xml_parse_into_struct($xml, $html, $element, $xml_array); 
	
	//освобождаем XML-разборщик
	xml_parser_free($xml);
	header('Ultra:ok');
	
	//echo $element[6]["value"];
	echo $element[5]["value"]." - ".$element[4]["value"];
}else{
	echo "error";
	}
?>

