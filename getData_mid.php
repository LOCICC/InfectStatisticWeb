
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
	$sql="SELECT * FROM Nation ";
	$link->query('SET NAMES UTF8');
	$res=$link->query($sql);
	$json=array();
	 while($row=$res->fetch_assoc())
	{
		$part=array();
		$part['新增确诊趋势']=$row['n_ip'];
		$part['新增疑似趋势']=$row['s_ip'];
		$part['治愈趋势']=$row['cure'];
		$part['死亡趋势']=$row['dead'];
		$json[$row['p_date']]=$part;
	}
	echo json_encode($json);
?>
