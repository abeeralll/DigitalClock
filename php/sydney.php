<?php
echo ("<p align=center>Sydney, Australia" . "<br>"); ?>
<?php date_default_timezone_set("Australia/Sydney"); ?>
<?= date("h") ?><span id="separator">:</span><?= date("i") . date(" A") . "<br>" ?>
<?= date("l") . ", " . date("Y-M-d");
?>