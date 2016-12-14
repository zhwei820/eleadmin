<?php
$a = [];
for ($i = 0; $i < 50; $i++) {
    $tmp = [];
    $tmp["name"] = '王小虎_' . $i;
    $tmp["date"] = '2016-05-03';

    $tmp["city"] = '普陀区'. $i;
    $tmp["province"] = '上海'. $i;
    $tmp["address"] = '上海市普陀区金沙江路 1518 弄'. $i;
    $tmp["test"] = 9999920033 + $i;
    $tmp["zip"] = 20033 + $i;

    $a[] = $tmp;
}
echo json_encode($a, JSON_UNESCAPED_UNICODE);
