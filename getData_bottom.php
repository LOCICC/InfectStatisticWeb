
<?php
header("Content-type:text/html;charset=utf-8");
		$user="RemoteUser";
  	$host='123.57.41.237';
	$DBpassword='Remote1798164846';
	$dbName='Pairwork';
	$link=new mysqli($host,$user,$DBpassword,$dbName);
	if ($link->connect_error)
	{
		echo ("sss");
	}
	$sql="SELECT * FROM Province WHERE p_date = '2020-03-09'";
	$link->query('SET NAMES UTF8');
	$res=$link->query($sql);
	$json=array();
	 while($row=$res->fetch_assoc())
	{
		$part=array();
		$part['新增确诊']=$row['n_ip'];
		$part['现有确诊']=$row['ip'];
		$part['治愈']=$row['cure'];
		$part['死亡']=$row['dead'];
		$json[$row['p_date']]=$part;
	}
	echo json_encode($json);
?>
