<?php
$imagesFolder = "images"; // Replace "images" with the folder name containing your images
$imageFiles = glob($imagesFolder . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
$imageURLs = [];

foreach ($imageFiles as $imageFile) {
    $imageURLs[] = $imageFile;
}

echo json_encode($imageURLs);
?>
