import datetime
import json
from urllib.request import urlopen

class Weather:
    def contract_testing_example(self, latitude, longitude):
        response = self.get_meteo(latitude, longitude)
        current_date = self.current_date()

        for day in response['daily']['time']:
            if day == current_date:
                return response['daily']['time'][0], self.codeToText(response['daily']['weathercode'][0])
        return 'No data available for today'

    def current_date(self):
        return datetime.datetime.now().strftime("%Y-%m-%d")

    def get_meteo(self, latitude, longitude):
        url = "https://api.open-meteo.com/v1/forecast?latitude="+ str(latitude) + "&longitude=" + str(longitude) + "&daily=weathercode,windspeed_10m_max&current_weather=true&timezone=Europe%2FBerlin"
        response = json.loads(urlopen(url).read().decode("utf-8"))
        return response

    def codeToText(self, weatherCode):
        return {
            0: 'Clear sky',
            1: 'Mainly clear, partly cloudy, and overcast',
            2: 'Mainly clear, partly cloudy, and overcast',
            3: 'Mainly clear, partly cloudy, and overcast',
            45: 'Fog and depositing rime fog',
            48: 'Fog and depositing rime fog',
            51: 'Drizzle: Light, moderate, and dense intensity',
            53: 'Drizzle: Light, moderate, and dense intensity',
            55: 'Drizzle: Light, moderate, and dense intensity',
            56: 'Freezing Drizzle: Light and dense intensity',
            57: 'Freezing Drizzle: Light and dense intensity',
            61: 'Rain: Slight, moderate and heavy intensity',
            63: 'Rain: Slight, moderate and heavy intensity',
            65: 'Rain: Slight, moderate and heavy intensity',
            66: 'Freezing Rain: Light and heavy intensity',
            67: 'Freezing Rain: Light and heavy intensity',
            71: 'Snow fall: Slight, moderate, and heavy intensity',
            73: 'Snow fall: Slight, moderate, and heavy intensity',
            75: 'Snow fall: Slight, moderate, and heavy intensity',
            77: 'Snow grains',
            80: 'Rain showers: Slight, moderate, and violent',
            81: 'Rain showers: Slight, moderate, and violent',
            82: 'Rain showers: Slight, moderate, and violent',
            85: 'Snow showers slight and heavy',
            86: 'Snow showers slight and heavy',
            95: 'Thunderstorm: Slight or moderate',
            96: 'Thunderstorm with slight and heavy hail',
            99: 'Thunderstorm with slight and heavy hail',
        }[weatherCode]

