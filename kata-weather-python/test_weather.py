import os

import pytest
import mock

from weather import Weather


mocked_full_get_meteo_response = {
  "latitude": 52.52,
  "longitude": 13.4,
  "generationtime_ms": 0.10704994201660156,
  "utc_offset_seconds": 7200,
  "timezone": "Europe/Berlin",
  "timezone_abbreviation": "CEST",
  "elevation": 37,
  "current_weather_units": {
    "time": "iso8601",
    "interval": "seconds",
    "temperature": "°C",
    "windspeed": "km/h",
    "winddirection": "°",
    "is_day": "",
    "weathercode": "wmo code"
  },
  "current_weather": {
    "time": "2024-08-12T13:15",
    "interval": 900,
    "temperature": 26,
    "windspeed": 1.1,
    "winddirection": 252,
    "is_day": 1,
    "weathercode": 1
  },
  "daily_units": {
    "time": "iso8601",
    "weathercode": "wmo code",
    "windspeed_10m_max": "km/h"
  },
  "daily": {
    "time": [
      "2024-08-12",
      "2024-08-13",
      "2024-08-14",
      "2024-08-15",
      "2024-08-16",
      "2024-08-17",
      "2024-08-18"
    ],
    "weathercode": [
      3,
      1,
      3,
      95,
      3,
      3,
      61
    ],
    "windspeed_10m_max": [
      8.7,
      12.9,
      13.4,
      12.6,
      10.9,
      8.3,
      8
    ]
  }
}


mocked_contract_testing_example_get_meteo_response = {
  "daily": {
    "time": [
      "2024-08-12",
      "2024-08-13",
      "2024-08-14",
      "2024-08-15",
      "2024-08-16",
      "2024-08-17",
      "2024-08-18"
    ],
    "weathercode": [
      3,
      1,
      3,
      95,
      3,
      3,
      61
    ],
  }
}


class TestWeather:
    def setup_method(self):
      self.sut = Weather()

    #@pytest.mark.skipif(os.getenv('E2E') == 'false', reason="Skipping because E2E is set to False")
    # Ensure the response and the mocked response have the same keys
    # def test__get_meteo__full_response(self):
    #     # Arrange (setup_method)
    #     latitude = 52.52
    #     longitude = 13.4050

    #     # Act
    #     result = self.sut.get_meteo(latitude, longitude)

    #     # Assert
    #     assert tuple(mocked_full_get_meteo_response.keys()) == tuple(result.keys())

    @pytest.mark.skipif(os.getenv('E2E') == 'false', reason="Skipping because E2E is set to False")
    # Ensure the response and the mocked response for the use case have the same keys
    def test__get_meteo__contract_testing_example_response(self):
        # Arrange (setup_method)
        latitude = 52.52
        longitude = 13.4050

        # Act
        result = self.sut.get_meteo(latitude, longitude)

        # Assert
        assert 'daily' in result
        assert 'daily' in mocked_contract_testing_example_get_meteo_response
        assert 'time' in result['daily']
        assert 'time' in mocked_contract_testing_example_get_meteo_response['daily']
        assert 'weathercode' in result['daily']
        assert 'weathercode' in mocked_contract_testing_example_get_meteo_response['daily']

    @mock.patch("weather.Weather.get_meteo")
    @mock.patch("weather.Weather.current_date")
    def test__contract_testing_example__current_date_not_in_response(
       self, mock_get_current_date, mock_get_meteo):
      # Arrange (setup_method) and ...
      latitude = 0
      longitude = 0
      a_date_not_contained_in_the_response = '2023-08-12'
      mock_get_current_date.return_value = a_date_not_contained_in_the_response
      mock_get_meteo.return_value = mocked_contract_testing_example_get_meteo_response

      #Act
      result = self.sut.contract_testing_example(latitude, longitude)

      #Assert
      assert result == 'No data available for today'

    @mock.patch("weather.Weather.get_meteo")
    @mock.patch("weather.Weather.current_date")
    def test__contract_testing_example__current_date_in_response(
       self, mock_get_current_date, mock_get_meteo):
      # Arrange (setup_method) and ...
      latitude = 0
      longitude = 0
      a_date_contained_in_the_response = '2024-08-14'
      mock_get_current_date.return_value = a_date_contained_in_the_response
      mock_get_meteo.return_value = mocked_contract_testing_example_get_meteo_response

      #Act
      result = self.sut.contract_testing_example(latitude, longitude)

      #Assert
      assert result == ('2024-08-12', 'Mainly clear, partly cloudy, and overcast')
