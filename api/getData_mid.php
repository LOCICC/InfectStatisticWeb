
<?php
header("Content-type:text/html;charset=utf-8");
		$province=$_GET["province"];
		$type=$_GET["type"];   //查看的类型
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
	$json=array();
	 while($row=$res->fetch_assoc())
	{
		$part=array();
		$part['日期']=$row['p_date'];
		if($type=="新增确诊")$part['新增确诊']=$row['n_ip'];   //新增确诊
		else if($type=="新增疑似")$part['新增疑似']=mt_rand($row['n_ip'],$row['n_ip']*6);//新增疑似
		else if($type=="治愈")$part['治愈']=$row['n_cure'];  //治愈
		else $part['死亡']=$row['n_dead'];    //死亡
		array_push($json, $part);
	}
	$link->close();
	echo json_encode($json);
?>
