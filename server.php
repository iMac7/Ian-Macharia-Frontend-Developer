<?php

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.spacexdata.com/v4/capsules/query');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);

$headers = array();
$headers[] = 'Content-Type: application/json';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Get query string parameters
$limit = isset($_GET['limit']) ? $_GET['limit'] : 12;
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$status = isset($_GET['status']) ? $_GET['status'] : '';
$type = isset($_GET['type']) ? $_GET['type'] : '';

$data = array(
    'query' => array(
        'status' => array(
            '$regex' => $status,
            '$options' => 'i'
        ),
        'type' => array(
            '$regex' => $type,
            '$options' => 'i'
        )

    ),
    'options' => array(
        'limit' => $limit,
        'page' => $page
    )
);


$postData = json_encode($data);

curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo $result;