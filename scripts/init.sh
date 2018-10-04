#!/usr/bin/env bash

docker start converter
if [ $? -eq 0 ]; then
    echo Converter up and running
else
    echo Installing Converter
    docker build ../Docker/ -t converter-image
    docker stop converter
    docker rm converter
    docker run --name converter -d -i -t converter-image
    docker exec converter apt-get -y update
    docker exec converter apt-get -y install abiword
    docker exec converter apt-get -y install pandoc
    docker exec converter apt-get -y install poppler-utils
    docker exec converter apt-get -y install imagemagick
    docker exec converter apt-get -y install tesseract-ocr
    docker exec converter apt-get -y install tesseract-ocr-deu
fi

# Check if all is installed
docker exec converter pdftotext --version
if [ $? -eq 0 ]; then
    echo Pdftotext is installed
else
    echo Installing Pdftotext
    docker exec converter apt-get -y install pdftotext
fi

docker exec converter abiword --version
if [ $? -eq 0 ]; then
    echo Abiword is installed
else
    echo Installing Abiword
    docker exec converter apt-get -y install abiword
fi

docker exec converter pandoc --version
if [ $? -eq 0 ]; then
    echo Pandoc is installed
else
    echo Installing Pandoc
    docker exec converter apt-get -y install pandoc
fi

docker exec converter convert --version
if [ $? -eq 0 ]; then
    echo Poppler-utils are installed
else
    echo Installing Imagemagick
    docker exec converter apt-get -y install imagemagick
fi

docker exec converter tesseract --version
if [ $? -eq 0 ]; then
    echo Tesseract is installed
else
    echo Installing Tesseract
    docker exec converter apt-get -y install tesseract-ocr
    docker exec converter apt-get -y install tesseract-ocr-deu
fi





