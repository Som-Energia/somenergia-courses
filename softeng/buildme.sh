#!/bin/bash
pandoc metadata.yaml *.md -t revealjs -o index.html --self-contained
