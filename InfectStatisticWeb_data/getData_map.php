
<?php
header("Content-type:text/html;charset=utf-8");
		//$date=$_GET["date"];
		$date="2020-02-20";
		$user="RemoteUser";
  	$host='123.57.41.237';
	$DBpassword='Remote1798164846';
	$dbName='Pairwork';
	$link=new mysqli($host,$user,$DBpassword,$dbName);
	if ($link->connect_error)
	{
		echo ("sss");
	}
	$sql="SELECT * FROM Province WHERE p_date ='".$date."'";
	$link->query('SET NAMES UTF8');
	$res=$link->query($sql);
	$json=array();
	 while($row=$res->fetch_assoc())
	{
		$part=array();
		$part['省份名']=$row['p_name'];
		
		$part['现有确诊']=$row['ip']-$row['cure']-$row['dead'];
		$part['确诊变动']=$row['n_ip']-$row['n_cure']-$row['n_dead'];
		if ($part['确诊变动']>=0)$part['确诊变动']="+".$part['确诊变动'];

		$part['累计确诊']=$row['ip'];
		$part['新增确诊']=$row['n_ip'];
		if ($part['新增确诊']>=0)$part['新增确诊']="+".$part['新增确诊'];

		$part['现有疑似']=mt_rand($part['新增确诊']*0.7,$part['新增确诊']*1.3);
		$part['新增疑似']="+".mt_rand($part['现有疑似']*0.6,$part['现有疑似']*0.8);

		$part['现有重症']=mt_rand($part['现有确诊']*0.1,$part['现有确诊']*0.23);
		$part['新增重症']=mt_rand($part['现有重症']*(-0.07),$part['现有重症']*0.12);
		if ($part['新增重症']>=0)$part['新增重症']="+".$part['新增重症'];

		$part['治愈']=$row['cure'];
		$part['新增治愈']="+".$row['n_cure'];

		$part['死亡']=$row['dead'];
		$part['新增死亡']="+".$row['n_dead'];

		array_push($json , $part);
	}
	$link->close();
	echo json_encode($json);
?>
