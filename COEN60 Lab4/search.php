<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="developer" content="Evan Chou">
	<title>COEN60 LAB 4</title>
	<style>
		h1 {text-align: center;}
		div {text-align: center;}
	</style>
</head>

<body>
	<h1>Search Engine for Query</h1>

	<form action="<?php echo $_SERVER["PHP_SELF"];?>" method="get">
	<div>
		<input name="query" type="text" value="<?php if (!empty($_GET["query"])){echo $_GET["query"];} ?>"/>
		<input type="submit" value="Enter"/>
	</div>
	</form>

	<?php
		$time = microtime(true);
		if (!empty($_GET["query"])){
			$query = $_GET["query"]; 
			//need count to count number of documents
			$count = 0;
			$results = array();
			$snippet = array();

			//getting each file matching the query
			foreach (glob("documents/*.*") as $files){
				$text = file_get_contents($files);
				$snippetText = strpos(strtolower($text), $query);
				$snippetDoc = strpos(strtolower(basename($files)), $query);
				if ($snippetText!==false || $snippetDoc!==false){
					$results[$count] = $files;

					//showing snippet of description of file
					if ($snippetText!==false){
						$snippet[$count] = substr($text, $snippetText, $snippetText+50);
					} else{
						$snippet[$count] = substr($text, 0, 50);
					}
					$count++;
				}
			}

			//showing number of results and time it took to find those results
			$numberOfResults = $count;
			$extime = microtime(true) - $time;
			echo "<p align=center>$numberOfResults results found in $extime seconds</p>";

			//printing all the info we want out
			echo "<ol class=\"documentsitem\">";
			for ($i=0; $i<$count; $i++){
				$filename = basename($results[$i]);
				echo "<li><a href=\"".$results[$i]."\">$filename</a>";
				echo "<ul>";
				echo "<li>".$snippet[$i]."...";
				echo "</ul>";
			}
			echo "</ol>";				
		}
	?>

</body>
</html>