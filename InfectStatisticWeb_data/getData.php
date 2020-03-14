
<?php
header("Content-type:text/html;charset=utf-8");
		$province=$_GET["province"];
		$user="RemoteUser";
  	$host='123.57.41.237';
	$DBpassword='Remote1798164846';
	$dbName='Pairwork';
	$link=new mysqli($host,$user,$DBpassword,$dbName);
	if ($link->connect_error)
	{
		echo ("sss");
	}
	$sql="SELECT * FROM Province WHERE p_name ='".$province."'";
	$link->query('SET NAMES UTF8');
	$res=$link->query($sql);
	$n_ip=array();
	$n_cure=array();
	$n_dead=array();
	$n_sp=array();
	//$f="0";
	$json=array();
	 while($row=$res->fetch_assoc())
	{
		$part=array();
		$part['现有确诊']=$row['ip'];
		$part['现有疑似']=$row['ip']*6+rand(10,100);
		$part['累计死亡']=$row['dead'];
		$part['累计治愈']=$row['cure'];
		$json[$row['p_date']]=$part;
		//$n_ip[$row['p_date']]=$row['n_ip'];
		//$n_cure[$row['p_date']]=$row['n_cure'];
		//$n_dead[$row['p_date']]=$row['n_dead'];
		// if($f!="0")$n_sp[$row['p_date']]=$sp[$row['p_date']]-$sp[$f];
		// else $n_sp[$row['p_date']]=$row['ip']*5;
		// $f=$row['p_date'];
	}
	echo json_encode($json);
?>
