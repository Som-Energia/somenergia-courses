from weather import Weather

def test_foo():
    assert 'foo' == 'foo'

def test__set_valid_datetime__adatetime_is_none():
    # Arrange
    adatetime = None

    # Act
    valid_datatime = Weather().set_valid_datetime(adatetime)

    # Assert
    assert valid_datatime != None 