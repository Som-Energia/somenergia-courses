#!/bin/bash
pandoc --self-contained metadata.yaml *.md -t revealjs -o index.html 
