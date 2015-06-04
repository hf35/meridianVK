
<?php
@$html = file_get_contents("http://www.maximum.ru/getcurrenttrack.aspx",'r');
if ($html){
	//echo $html;
	//$xml = xml_parser_create();
	//xml_parser_set_option($xml, XML_OPTION_SKIP_WHITE, 1); 
	
	//разбираем XML-данные в структуру массива $xml_array
	//xml_parse_into_struct($xml, $html, $element, $xml_array); 
	
	//освобождаем XML-разборщик
	//xml_parser_free($xml);
	if (!function_exists('mb_ucfirst') && extension_loaded('mbstring'))
	{
		/**
		 * mb_ucfirst - преобразует первый символ в верхний регистр
		 * @param string $str - строка
		 * @param string $encoding - кодировка, по-умолчанию UTF-8
		 * @return string
		 */
		function mb_ucfirst($str, $encoding='UTF-8')
		{
			$str = mb_ereg_replace('^[\ ]+', '', $str);
			$str = mb_strtoupper(mb_substr($str, 0, 1, $encoding), $encoding).
				mb_substr($str, 1, mb_strlen($str), $encoding);
			return $str;
		}
	}

	
	$html = strip_tags($html);
	//$html = mb_ucfirst(mb_strtolower(strip_tags($html)));
	header('Ultra:ok');
	$html = mb_convert_case($html, MB_CASE_TITLE, 'UTF-8');
	if (strpos($html,"То Maximum!")){exit;};
	//if (!strpos($html,"Maximum")){exit;}
	echo $html;
}else{
	echo "error";
	}
?>

