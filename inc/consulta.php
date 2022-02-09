<?php 
    include_once("../DataRequest.php");
    $conn = new DataRequest();
    header('Content-type: application/json');
    switch($_POST["value"]) {
        case "Clientes":
            echo json_encode($conn->dadosClientes());
            break;
        case "Usuários":
            echo json_encode($conn->dadosUsuarios());
            break;
        case "Fornecedores":
            echo json_encode($conn->dadosFornecedores());
            break;
    }   
?>