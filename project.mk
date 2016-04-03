install:
	@(npm install)
	@(grunt download)

uninstall: clean
	@rm -rf bower_components node_modules *~

clean:
	make clean
	rmdir build

html:
	make html

all: uninstall install html
