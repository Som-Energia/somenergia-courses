# Weather kata

Based on [CodiumTeam](https://github.com/CodiumTeam) [weather kata](https://github.com/CodiumTeam/weather-kata)

Deliberate practice to cover this topics:
- Legacy code
- Testing
- Refactoring
- Test doubles
- Contract testing

## Strategy
* Test coupled code
* Remove external dependencies when testing in order to make the tests repeatable and fast

## Iterations

### Test coupled code

- **Goal**: write tests to cover all the legacy code
- **Time**: 35'
- **Constraints**: Use team agreements

### Production code refactoring

- **Goal**: Detect code smells and apply a proper refactoring to them
- **Time**: 35'
- **Constraints**: N/A

## Setup and run

### Install kata dependencies
```
make kata-deps
```

### Run the tests
```
make kata-tests
```

### Watch and run the tests
```
make kata-watch-tests
```

### Code coverage
```
make kata-coverage
```
