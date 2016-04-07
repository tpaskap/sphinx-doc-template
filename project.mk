install:
	@(npm install)
	@(grunt download)

uninstall: clean
	@rm -rf bower_components node_modules *~

clean:
	@(mkdir -p build)
	@make clean

html:
	@make html

all: uninstall install html
