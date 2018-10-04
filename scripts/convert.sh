#!/usr/bin/env bash

rm ../src/main/resources/file.txt
rm ../src/main/resources/output.txt
rm ../src/main/resources/file_only_green.txt
docker exec converter rm $1.tex
docker exec converter rm $1.pdf
docker exec converter rm $1.tiff
docker exec converter rm $1.txt
docker exec converter rm $1_only_green.txt
docker exec converter rm $1_only_green.tiff


docker cp ../upload-dir/$1.pdf converter:/root
docker exec converter ls -la


docker exec converter pdftotext -bbox $1.pdf
docker exec converter mv /root/$1.html /root/$1_html.txt
docker cp converter:/root/$1_html.txt ../src/main/resources/generated_files
docker exec converter abiword --to=tex $1.pdf
docker exec converter pandoc $1.tex -o $1.txt
docker cp converter:/root/$1.txt ../src/main/resources/generated_files
docker exec converter convert -density 300 $1.pdf -fuzz 33%% +opaque "#33cc33" -black-threshold 90%% -fill black -depth 8 -strip -background white -alpha off $1_only_green.tiff
docker exec converter tesseract -psm 4 -l deu $1_only_green.tiff $1_only_green
docker cp converter:/root/$1_only_green.txt ../src/main/resources/generated_files

docker exec converter rm $1_html.txt
docker exec converter rm $1.tex
docker exec converter rm $1.pdf
docker exec converter rm $1.tiff
docker exec converter rm $1.txt
docker exec converter rm $1_only_green.txt
docker exec converter rm $1_only_green.tiff

