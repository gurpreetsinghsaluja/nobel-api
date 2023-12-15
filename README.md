# Nobel API web app

## Overview

- This is a react.js application that queries the [Nobel API](https://nobelprize.readme.io/docs)
- It lists the all the prizes that have been awarded including the motivation of laureates involved.

## Technologies

- **TypeScript**: Ensures type safety and robust coding practices.
- **MaterialUI**: Used for styled components and responsive UI design.
- **Tailwind CSS**: Provides custom styling and flexible layout options.

## Features

- **Card Display**: Prizes are shown in card format, detailing the category, year, laureate names, and their motivations.
- **Color Scheme**: Features a green color theme.
- **Year-Range Filter**: At the top, you can see a filter which is implemented as a slider, where the user could select the years' range they want to see the cards for. By default, 2015 to 2017 year range is selected.
- **Infinite Scroll**: To optimise the display, only 6 cards are displayed at a time, and as the user scrolls downwards, more cards are loaded to the screen.

## Error Handling

- If due to any reason the Nobel API is down, it is coded to retry once to fetch the data again, which could be substantiated seeing the console logs where it would log the retry. If after another retry, still the API is not accessible, it would alert the user to try again later as it failed to fetch the Nobel Prize data. This retry attempts could be increased from 1 to more numbers as per project requirements.
