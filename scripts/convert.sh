#!/usr/bin/env bash

rm ../src/main/resources/file.txt
rm ../src/main/resources/output.txt
rm ../src/main/resources/file_only_green.txt
sudo docker exec converter rm $1.tex
sudo docker exec converter rm $1.pdf
sudo docker exec converter rm $1.tiff
sudo docker exec converter rm $1.txt
sudo docker exec converter rm $1_only_green.txt
sudo docker exec converter rm $1_only_green.tiff


sudo docker cp ../upload-dir/$1.pdf converter:/root


sudo docker exec converter pdftotext -bbox $1.pdf
sudo docker exec converter mv /root/$1.html /root/$1_html.txt
sudo docker cp converter:/root/$1_html.txt ../src/main/resources/generated_files
sudo docker exec converter abiword --to=tex $1.pdf
sudo docker exec converter pandoc $1.tex -o $1.txt
sudo docker cp converter:/root/$1.txt ../src/main/resources/generated_files
sudo docker exec converter convert -density 300 $1.pdf -fuzz 33%% +opaque "#33cc33" -black-threshold 90%% -fill black -depth 8 -strip -background white -alpha off $1_only_green.tiff
sudo docker exec converter tesseract -psm 4 -l deu $1_only_green.tiff $1_only_green
sudo docker cp converter:/root/$1_only_green.txt ../src/main/resources/generated_files

sudo docker exec converter rm $1_html.txt
sudo docker exec converter rm $1.tex
sudo docker exec converter rm $1.pdf
sudo docker exec converter rm $1.tiff
sudo docker exec converter rm $1.txt
sudo docker exec converter rm $1_only_green.txt
sudo docker exec converter rm $1_only_green.tiff

