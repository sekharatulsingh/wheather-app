import random


def get_weather(city):
    # Simulated weather data
    weather_data = {
        'city': city,
        'temperature': random.randint(10, 35),  # Random temperature between 10 and 35
        'description': 'Clear sky',  # Static description for testing
        'humidity': random.randint(40, 100)  # Random humidity between 40% and 100%
    }
    return weather_data

def main():
    city = input("Enter city name: ")
    if not city:
        print("City name is required.")
        return

    weather = get_weather(city)
    print(f"Weather in {weather['city']}:")
    print(f"Temperature: {weather['temperature']} °C")
    print(f"Description: {weather['description']}")
    print(f"Humidity: {weather['humidity']}%")

if __name__ == "__main__":
    main()
