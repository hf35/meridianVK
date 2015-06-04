
<?php
@$html = file_get_contents("http://www.radiorecord.ru/script/record_pres.txt?rnd=5313892",'r');
if ($html){
	//echo $html;
	//$xml = xml_parser_create();
	//xml_parser_set_option($xml, XML_OPTION_SKIP_WHITE, 1); 
	
	//разбираем XML-данные в структуру массива $xml_array
	//xml_parse_into_struct($xml, $html, $element, $xml_array); 
	
	//освобождаем XML-разборщик
	//xml_parser_free($xml);
     $html = substr($html,22);
     $html = substr_replace($html,"",-31);
     //echo $html;
     $html = str_replace("|.|"," - ",$html);
     echo $html;
    header('Ultra:ok');
    //var_dump($element);
	
	
	//echo $element[6]["value"];
	//echo $element[173]["value"]." - ".$element[171]["value"];
}else{
	echo "error";
	}
?>

