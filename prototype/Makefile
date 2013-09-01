SRC=./src
SASS_SRC=$(SRC)/sass
TEMPLATES_DIR=$(SRC)/tpls
TEMPLATES=$(TEMPLATES_DIR)/*.html

COFFEE=./src/*.coffee
DIST=./dist

all: js tpl styles dist

js: ./src/*.coffee
	coffee -o $(DIST) -c $(SRC)

styles: $(SASS_SRC)/*.sass
	mkdir -p ./dist/res/css
	sass --update $(SASS_SRC):./dist/res/css

dist:
	mkdir -p ./dist/vendor
	rsync -r ./vendor/. ./dist/vendor/.
	cp $(HTML) ../public/.
	mkdir -p ../public/js/apps/cross-widget/
	rsync -r ./res/. ../public/js/apps/cross-widget/res/.
	rsync -r ./dist/. ../public/js/apps/cross-widget/.


tpl: $(TEMPLATES)
	tpl2module -s $(TEMPLATES_DIR) -o $(DIST)/tpl --amdjs

# constant making is time-consuming
# maybe not a good idea to put it to all

.PHONY: dist clean constant mockup