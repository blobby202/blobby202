# TerraWize Design Overview

This document outlines the high-level design for the TerraWize mobile app.

## Goals

- Provide campers and overlanders with hourly, daily, and weekly weather reports.
- Offer recommendations for solar panel placement, tent orientation, and wind generator location.
- Support offline caching of weather data (premium feature).
- Allow user account creation with GDPR compliant storage and optional sync across devices.

## Technology

- **React Native** for a single codebase that runs on Android and iOS.
- **OpenWeatherMap API** for weather data. Additional providers can be added via the `services` layer.
- **Expo** is assumed for simplified development, though the project can switch to the bare React Native CLI if needed.
- Data storage uses `AsyncStorage` locally with placeholders for cloud sync (e.g., Firebase or custom backend).

## Key Components

- `LocationPicker` – lets the user choose GPS-based or manual locations.
- `EquipmentForm` – captures specifications for solar panels, wind turbines, generators, tents, etc.
- `Recommendations` – pulls weather data and provides placement advice. Currently a stub.
- `weatherService` – interface for fetching weather data from OpenWeatherMap.

## Monetization & Alerts

- The base app offers basic planning and manual refresh of data.
- Premium tiers can enable push notifications, offline caching, and advanced analytics.
- Notification logic should respect user preferences and only store minimal personal data for GDPR compliance.

## Future Work

- Implement secure authentication and account storage.
- Add local caching of weather data for offline use.
- Integrate additional weather sources for redundancy.
- Build an algorithm to evaluate solar and wind placement based on user equipment specs and forecast data.

