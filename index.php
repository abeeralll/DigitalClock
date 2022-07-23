<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/bootstrap.bundle.js"> </script>

    <link rel="stylesheet" href="style.css?<?= filemtime('style.css'); ?>">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>



</head>

<body>
    <div class="container align-middle" style="font-family: dutch;">
        <div class="row "style="min-height: 100vh; color:antiquewhite; ">
            <div class="col d-flex align-items-center justify-content-center border border-success" style="background-color:black;">
                <div class="container align-middle">
                   
                    <div id="sydney" class="row d-flex justify-content-center" style="font-size:40px;">
                    <?php
                        echo ("<p align=center>Sydney, Australia" . "<br>"); ?>
                        <?php date_default_timezone_set("Australia/Sydney"); ?>
                        <?= date("h") ?><span id="separator">:</span><?= date("i") . date(" A") . "<br>" ?>
                        <?= date("l") . ", " . date("Y-M-d");
                        ?>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row p-5 h-50 d-flex align-items-center justify-content-center border border-success " style="background-color:black;">
                    
                    <div id="london" class="row d-flex justify-content-center" style="font-size:40px;">
                        <?php
                        echo ("<p align=center>London, England" . "<br>"); ?>
                        <?php date_default_timezone_set("Europe/London"); ?>
                        <?= date("h") ?><span id="separator">:</span><?= date("i") . date(" A") . "<br>" ?>
                        <?= date("l") . ", " . date("Y-M-d");  
                        
                        ?>

                    </div>
                </div>
                <div class="row  p-5 h-50 d-flex align-items-center justify-content-center border border-success " style="background-color:black;">
                    
                    <div id="ktm" class="row d-flex justify-content-center" style="font-size:40px;">
                        <?php
                        echo ("<p align=center>Kathmandu, Nepal" . "<br>"); ?>
                        <?php date_default_timezone_set("Asia/Kathmandu"); ?>
                        <?= date("h") ?><span id="separator">:</span><?= date("i") . date(" A") . "<br>" ?>
                        <?= date("l") . ", " . date("Y-M-d");
                        ?>

                    </div>
                </div>

            </div>
        </div>
    </div>


    
</body>

<script src="clock.js"> 
   

   </script> 

</html>