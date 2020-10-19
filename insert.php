<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";
if (isset($_POST)) {
$firstname = $_POST['fname'];
$lastname = $_POST['lname'];
$usernmae = $_POST['uname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['pswd'];
$conn = mysqli_connect($servername, $username, $password, $dbname);
 

if(!$conn){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


$sql = "INSERT INTO 'signin' ('FirstName', 'LastName', 'UserName', 'Email', 'PhoneNumber', 'Password') 
VALUES ('$firstname', '$lastname', '$username', '$emal', '$phone','$password')";
/*$sql = "INSERT INTO `signin`(`FirstName`, `LastName`, `UserName`, `Email`, `PhoneNumber`, `Password`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])";*/
}
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
 
// Close connection
mysqli_close($conn);
?>