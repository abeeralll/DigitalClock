<?php
echo ("<p align=center>London, England" . "<br>"); ?>
<?php date_default_timezone_set("Europe/London"); ?>
<?= date("h") ?><span id="separator">:</span><?= date("i") . date(" A") . "<br>" ?>
<?= date("l") . ", " . date("Y-M-d");
?>