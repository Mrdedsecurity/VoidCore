<?php
$servername = "localhost";
$username = "root";
$password = "";
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
        $_SESSION['username'] = $username;
        
        if ($username === "VoidSoup") {
            header("Location: VoidSoup.php");
            exit();
        } else {
            echo "Login successful! But only VoidSoup has access to special areas.";
        }
    } else {
        echo "Invalid credentials.";
    }
}
?>
