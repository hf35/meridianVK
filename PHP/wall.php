
<?php
@$html = file_get_contents("https://api.vkontakte.ru/method/wall.post?owner_id=3424338&message=&attachments=audio7830472_113828424&access_token=a3c5bc79ed79d67da3f80aedffa38cd6cdaa3a4a3a425ce5edc82e64340d540",'r');
if ($html){
	echo $html;
	}
?>

