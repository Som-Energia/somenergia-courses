.PHONY: default
default:
	@printf "$$HELP"

.PHONY: kata-deps
kata-deps:
	test -e .venv || python -m venv .venv
	.venv/bin/pip install -r requirements.txt

.PHONY: kata-watch-tests
kata-watch-tests:
	.venv/bin/watchmedo shell-command \
		--patterns="*.py" \
		--recursive \
		--command ".venv/bin/pytest test_weather.py"

.PHONY: kata-tests
kata-tests:
	.venv/bin/pytest test_weather.py

.PHONY: kata-coverage
kata-coverage:
	.venv/bin/coverage run --source=weather -m unittest
	.venv/bin/coverage report
	.venv/bin/coverage html
	@printf "To visualize the lines open the report at htmlcov/index.html\n"

.PHONY: kata-mutation
kata-mutation:
	.venv/bin/mutmut run --paths-to-mutate=. --tests-dir=.; exit 0
	@printf "\nℹ To visualize mutations run: .venv/bin/mutmut show <id> ℹ\n"

define HELP
    - make kata-deps\t\tInstall kata dependencies
    - make kata-tests\t\tExecute tests
    - make kata-watch-tests\tExecute tests when changes
    - make kata-coverage\tGenerate test coverage report
    - make kata-mutation\tRun mutmut

Please execute "make <command>". Example: make kata-tests

endef

export HELP
