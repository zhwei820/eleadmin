<?php
$a = [];
for ($i = 0; $i < 5; $i++) {
    $tmp = [];
    $tmp["date"] = '2016-05-03';

    $tmp["name"] = '王小虎_' . $i;
    $tmp["province"] = '上海';
    $tmp["city"] = '普陀区';
    $tmp["address"] = '上海市普陀区金沙江路 1518 弄';
    $tmp["zip"] = 20033;

    $a[] = $tmp;
}
echo json_encode($a, JSON_UNESCAPED_UNICODE);
