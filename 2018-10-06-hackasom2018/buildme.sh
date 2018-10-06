#!/bin/bash
build() {
	pandoc metadata.yaml 0*.md -t revealjs -o index.html --self-contained
	pandoc metadata.yaml opendata.md -t revealjs -o opendata.html --self-contained
	pandoc metadata.yaml cas.md -t revealjs -o cas.html --self-contained
	pandoc metadata.yaml intercoop.md -t revealjs -o intercoop.html --self-contained
	pandoc metadata.yaml ideas.md -t revealjs -o ideas.html --self-contained
}
build
firefox index.html
inotifywait -mr -e close_write  . --exclude html | while read path events file 
do
	(echo $file | grep md$ ) ||
	(echo $file | grep png$ ) ||
	(echo $file | grep yaml$ ) ||
	continue
	build
done

