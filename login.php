<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "password123";
$dbname = "voidcore";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    
    $sql = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $_SESSION['username'] = $user;
    
        if ($user === "VoidSoup") {
            header("Location: VoidSoup.html");
            exit();
        } else {
            header("Location: affiliate.html");
            exit();
        }
    } else {
        echo "Invalid credentials.";
    }

$conn->close();
?>
