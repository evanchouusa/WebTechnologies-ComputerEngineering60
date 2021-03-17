<!DOCTYPE html>
<html>
    <body>
        <h1>My Photo Album</h1>
        <ul>

        <?php
            $images = glob("photo/*.jpg");

            foreach ($images as $photo) {
                    echo "<li><a href='". $photo . "'>" . basename($photo).PHP_EOL . "</a>" . " (" . round(filesize($photo)/1024) . " KB" . ")" . "</li>". "\n";
            }
        ?>

        </ul>
    </body>
</html>