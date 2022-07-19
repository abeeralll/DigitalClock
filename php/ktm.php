<?php
echo ("<p align=center>Kathmandu, Nepal" . "<br>"); ?>
<?php date_default_timezone_set("Asia/Kathmandu"); ?>
<?= date("h") ?><span id="separator">:</span><?= date("i") . date(" A") . "<br>" ?>
<?= date("l") . ", " . date("Y-M-d");
?>