SET arg=%1
del .\src\main\resources\file.txt
del .\src\main\resources\output.txt
del .\src\main\resources\file_only_green.txt
docker exec converter rm %arg%.tex
docker exec converter rm %arg%.pdf
docker exec converter rm %arg%.tiff
docker exec converter rm %arg%.txt
docker exec converter rm %arg%_only_green.txt
docker exec converter rm %arg%_only_green.tiff


docker cp ./upload-dir/%arg%.pdf converter:/root


docker exec converter pdftotext -bbox %arg%.pdf
docker exec converter mv /root/%arg%.html /root/%arg%_html.txt
docker cp converter:/root/%arg%_html.txt ./src/main/resources/generated_files
docker exec converter abiword --to=tex %arg%.pdf
docker exec converter pandoc %arg%.tex -o %arg%.txt
docker cp converter:/root/%arg%.txt ./src/main/resources/generated_files
docker exec converter convert -density 300 %arg%.pdf -fuzz 33%% +opaque "#33cc33" -black-threshold 90%% -fill black -depth 8 -strip -background white -alpha off %arg%_only_green.tiff
docker exec converter tesseract -psm 4 -l deu %arg%_only_green.tiff %arg%_only_green
docker cp converter:/root/%arg%_only_green.txt ./src/main/resources/generated_files

docker exec converter rm %arg%_html.txt
docker exec converter rm %arg%.tex
docker exec converter rm %arg%.pdf
docker exec converter rm %arg%.tiff
docker exec converter rm %arg%.txt
docker exec converter rm %arg%_only_green.txt
docker exec converter rm %arg%_only_green.tiff

