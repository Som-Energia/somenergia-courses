#!/bin/bash
inotifywait -mr -e close_write  . --exclude html | while read path events file 
do
	(echo $file | grep md$ ) ||
	(echo $file | grep png$ ) ||
	continue
	pandoc metadata.yaml *.md -t revealjs -o index.html --self-contained
done

