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


