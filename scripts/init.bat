docker start converter
IF %ERRORLEVEL% NEQ 0 GOTO ProcessError

echo "Converter up and running"
exit /b 0

:ProcessError
echo "Installing Converter"
docker build ..\Docker\ -t converter-image
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
exit /b 1




