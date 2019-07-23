#!/bin/bash
build() {
	pandoc metadata.yaml *.md -t revealjs -o index.html --self-contained
}

build
firefox index.html &
inotifywait -mr -e close_write  . --exclude pdf | while read path events file 
do
    (echo $file | grep md$ ) ||
    (echo $file | grep png$ ) ||
		continue
    build
done


