SRC=./src
SASS_SRC=$(SRC)/sass
TEMPLATES_DIR=$(SRC)/tpls
TEMPLATES=$(TEMPLATES_DIR)/*.html

COFFEE=./src/*.coffee
DIST=./dist

all: js tpl styles dist

js: $(SRC)/*.coffee
	coffee -o $(DIST) -c $(SRC)

styles: $(SASS_SRC)/*.sass
	mkdir -p ./dist/res/css
	sass --update $(SASS_SRC):./dist/res/css

dist:
	mkdir -p ./dist/vendor
	mkdir -p ./dist/res
	rsync -r ./res ./dist/res
	rsync -r ./src/vendor/. ./dist/vendor/.
	mkdir -p ../gal/js/apps/gal/
	rsync -r ./dist/. ../gal/js/apps/gal/.


tpl: $(TEMPLATES)
	tpl2module -s $(TEMPLATES_DIR) -o $(DIST)/tpls -t "exports={{{content}}};"

bundle: js tpl
	browserify $(DIST)/main.js > $(DIST)/bundle.js

# constant making is time-consuming
# maybe not a good idea to put it to all

.PHONY: dist clean constant mockup