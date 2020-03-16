<?php
		$province=$_GET["province"];
		$ResToJs=$province.$province;
		echo json_encode($ResToJs);
		$link->close();
?>
