<?php
///////////////////////////////////////////////
// RADIO TAGS
// BASED ON (C) plugin JOERG KRUEGER 
///////////////////////////////////////////////
//error_reporting(0);
header('Content-type: text/plain');
header('Pragma: no-cache');
header('Expires: 0');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0');
$titlelink = 'http://online-hitfm.tavrmedia.ua/HitFM';//'http\:\/\/94.25.53.133:80/ultra-192'; //$_REQUEST['url'];
	if ($titlelink == ""):
		echo "";
else:
	$station=Station($titlelink);
	$song=Song($titlelink);
	$output=$station.'|uppod|'.$song;
	//$song = substr_replace($song,"",-28); //str_replace("[ХИТрая музыка]" ,"q",$song); // str_replace("[ХИТрая музыка]","",$song);
	header('Ultra:ok');
	echo $song;
	endif;

function Song($sURL) {
	$aPathInfo = parse_url($sURL);
	$sHost = $aPathInfo['host'];
	$sPort = empty($aPathInfo['port']) ? 80 : $sPort = $aPathInfo['port'];
	$sPath = empty($aPathInfo['path']) ? '/' : $sPath = $aPathInfo['path'];
	//echo "$sHost, $sPort";
	$fp = fsockopen($sHost, $sPort, $errno, $errstr, "1");
	
	if (!$fp):
		fclose($fp);
		return StreamTitle($sURL);
	else: 
		fputs($fp, "GET /7.html HTTP/1.0\r\nUser-Agent: Mozilla\r\n\r\n");
		while (!feof($fp)):
			$info = fgets($fp);
		endwhile;
		$info = str_replace('<HTML><meta http-equiv="Pragma" content="no-cache"></head><body>', "", $info);
		$info = str_replace('</body></html>', "", $info);
		$stats = explode(',', $info);
		if (empty($stats[1]) ):
			fclose($fp);
			return StreamTitle($sURL);
		else:
			if ($stats[1] == "1"):
				$song = $stats[6];
				$listeners = $stats[0];
				$max =  $stats[3];
				$bitrate = $stats[5];
				$peak = $stats[2];
				return utf8_encode($song);
			else:
				fclose($fp);
				return StreamTitle($sURL);
			endif;
		endif;
	endif;
}
function StreamTitle($sURL) {
	$aPathInfo = parse_url($sURL);
	$sHost = $aPathInfo['host'];
	$sPort = empty($aPathInfo['port']) ? 80 : $sPort = $aPathInfo['port'];
	$sPath = empty($aPathInfo['path']) ? '/' : $sPath = $aPathInfo['path'];
	$fp = fsockopen($sHost, $sPort, $errno, $errstr);
	if (!$fp):
		return "";
	else: 
		fputs($fp, "GET $sPath  HTTP/1.0\r\n");
		fputs($fp, "Host: $sHost\r\n");
		fputs($fp, "Accept: */*\r\n");
		fputs($fp, "Icy-MetaData:1\r\n");
		fputs($fp, "Connection: close\r\n\r\n");
		$char = "";
		$info = "";
		while (!strpos($input, "StreamTitle")){
			if (@feof($fp) || @ftell($fp)>300000){ //max 366kb
					exit;
				}	
			$char = @fread($fp, 16);
			$input .= $char;
		}
		$input .=@fread($fp, 255);
		$startstr = "StreamTitle='";
		$endstr = "';";
		$start = strpos($input, $startstr);
		$subinput = substr($input, $start + strlen($startstr));
		$end = strpos($subinput, $endstr);
		fclose($fp);
		$output = substr($subinput, 0, $end);
		$output = Replacer($output);
		return toUTF($output);
	endif;
}
function Station($sURL) {
	$aPathInfo = parse_url($sURL);
	$sHost = $aPathInfo['host'];
	$sPort = empty($aPathInfo['port']) ? 80 : $sPort = $aPathInfo['port'];
	$sPath = empty($aPathInfo['path']) ? '/' : $sPath = $aPathInfo['path'];
	$fp = fsockopen($sHost, $sPort, $errno, $errstr);
	if (!$fp):
		return "her";
	else: 
		fputs($fp, "GET $sPath HTTP/1.0\r\n");
		fputs($fp, "Host: $sHost\r\n");
		fputs($fp, "Accept: */*\r\n");
		fputs($fp, "Icy-MetaData:1\r\n");
		fputs($fp, "Connection: close\r\n\r\n");
		$char = "";
		$info = "";
		while ($char != Chr(255)){//END OF MPEG-HEADER
			if (@feof($fp) || @ftell($fp)>140906){
				//echo "|".ftell($fp)."|end5";		  //Spezial, da my-Mojo am Anfang leere Zeichen hat
				exit;
			}
			$char = @fread($fp,1);
			$info .= $char;
		}
		fclose($fp);
		$info = str_replace("\n", "",$info);
		$info = str_replace("\r", "",$info);
		$info = str_replace("\n\r", "",$info);
		$info = str_replace("<BR>", "",$info);
		$info = str_replace(":", "=",$info);
		$info = str_replace("icy", "&icy",$info);
		$info = strtolower($info);
	
		parse_str($info, $output);
		if ($output['icy-br']!=""){
			$streambitrate = intval($output['icy-br']);
		}
		if ($output['icy-name']==""){
			return "";	
		} else {
			return toUTF(Replacer($output['icy-name']));
		}
	endif;
}

function toUTF($str){
	return $str;//iconv("WINDOWS-1251", "UTF-8",$str);
}
function Replacer($str){
	$str = str_replace("- 0:00", "", $str);
	$str = str_replace("101.ru= ", "", $str);
	return $str;
}
?>