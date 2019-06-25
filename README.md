# Journalism-and-D3

![Newsroom](https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif)


The editor wants to run a series of feature stories about the health risks facing particular demographics. She's counting on you to sniff out the first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with this project is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml). The current data set incldes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."
Skills Used:
•	D3
•	JavaScript

## I created a scatter plot between the data variables `Healthcare` and `Income` that represents each state with circle elements.  I coded this graphic in the `app.js` file of this directory and pulled data from `data.csv` by using the `d3.csv` function. I included state abbreviations in the circles and create and situate your axes and labels to the left and bottom of the chart.

See an example of my scatter plot below.

Note, if you clone this repo, you will need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.

