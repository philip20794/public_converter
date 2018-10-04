#!/usr/bin/env bash

rm -f ../src/main/resources/generated_files/$1*
if [ $? -eq 0 ]; then
    echo $1 removed from resources/generated_files
else
    echo No $1 files exist on resources/generated_files
fi

docker exec converter rm $1.pdf
docker exec converter rm $1.tex
docker exec converter rm $1.txt
docker exec converter rm $1_html.txt
docker exec converter rm $1_only_green.tiff
docker exec converter rm $1_only_green.txt
if [ $? -eq 0 ]; then
    echo $1 removed from converter
else
    echo No $1 files exist on converter
fi

docker cp ../upload-dir/$1.pdf converter:/root
if [ $? -eq 0 ]; then
    echo starting to convert $1
    docker exec converter pdftotext -bbox $1.pdf
    docker exec converter mv /root/$1.html /root/$1_html.txt
    docker cp converter:/root/$1_html.txt ../src/main/resources/generated_files
    docker exec converter abiword --to=tex $1.pdf
    docker exec converter pandoc $1.tex -o $1.txt
    docker cp converter:/root/$1.txt ../src/main/resources/generated_files
    docker exec converter convert -density 300 $1.pdf -fuzz 33%% +opaque "#33cc33" -black-threshold 90%% -fill black -depth 8 -strip -background white -alpha off $1_only_green.tiff
    docker exec converter tesseract -psm 4 -l deu $1_only_green.tiff $1_only_green
    docker cp converter:/root/$1_only_green.txt ../src/main/resources/generated_files

    docker exec converter rm $1.pdf
    docker exec converter rm $1.tex
    docker exec converter rm $1.txt
    docker exec converter rm $1_html.txt
    docker exec converter rm $1_only_green.tiff
    docker exec converter rm $1_only_green.txt
    if [ $? -eq 0 ]; then
        echo $1 removed from converter
    else
        echo No $1 files exist on converter
    fi
else
    echo $1 dosent exist on upload-dir.
    ls ../upload-dir/
fi





