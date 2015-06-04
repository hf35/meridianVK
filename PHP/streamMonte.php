
<?php
@$html = file_get_contents("http://station.ru/services/StationService.svc/json/GetCurrentStationTrack?_=1317052409963&stationId=montecarlo",'r');
if ($html){
	//echo $html;
	
	
	$element =  json_decode($html,true);
	//var_dump($element);
	//освобождаем XML-разборщик
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


	header('Ultra:ok');
	
	//echo $element[6]["value"];
    $text = mb_convert_case($element["d"]["Artist"]." - ".$element["d"]["Song"], MB_CASE_TITLE, 'UTF-8');
    //$text = str_replace("_" ," ",$text);
	echo $text;
}else{
	echo "error";
	}
?>

