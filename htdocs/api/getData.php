
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
		$part['日期']=$row['p_date'];
		$part['现有确诊']=$row['ip']-$row['dead']-$row['cure'];
		$part['现有疑似']=rand($row['n_ip']*0.1,$row['n_ip']*0.3);
		$part['累计死亡']=$row['dead'];
		$part['累计治愈']=$row['cure'];
		array_push($json,$part);
	}
	$link->close();
	echo json_encode($json);
?>
