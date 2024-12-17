 - Requirements classification

  - Features
  - Tech stack - redux for state management , Tailwind css for styling , react-router-dom for routing.
  - Bundler - webpack
  - Testing - jest

- Planning

 - HLD , LLD .

  - Header
  - Body
   - side bar - menu items
   - main container - buttonsList
   - video container - VideoCard




- Debouncing -> are used to enhance browser performance by ensuring that expensive operations are executed only when neccessary.

Performance: 
  - iPhone pro max = 14 api calls
  - with debouncing = 3 api calls
  Ex: Flipkart - debouncing - 200ms ( if difference between 2 key strokes is less than 200 - decline the api call)
                              >200ms => make an api call and show the results 

      Implemenatation
      - make an api call after every key press
      - but if the difference between 2 API calls is <200ms
      - decline the api call


 --Live Chatting

  -Challenges

    - Get data live
    - Updating the UI with live data

    Handling data (Live)
      - web sockets - 2 way connection between server and UI , send data from either side. Ex:stock market platforms , WhatsApp.
      - Long Polling(API Polling) - one directions, checks after every specified interval. Ex:Gmail , Cricbuzz , API Polling.
