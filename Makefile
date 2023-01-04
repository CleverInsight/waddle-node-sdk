prepare:
	mkdir -p dist

clean: prepare
	rm -rf dist/*

dist/index.js: src/index.ts
	npx tsc $< --outfile $@

build: clean dist/index.js
