<div align="center">
<h1 style="color: #00875F">Bliss</h1>
<h4 style="margin-top: -26px">Challenge</h4>
</div>

#### To Do

- [x] Loading Screen
- The frontend application must show a loading screen while the server health is checked. The server health is checked via the appropriate endpoint on the API.

  - [x] If the server health is OK then the application should proceed to the “List Screen”.
  - [x] If the server health is NOT OK then the application should display a “Retry Action” widget.

- [x] Questions List Screen
- The frontend application must show the List Screen in two cases:

- [x] The loading screen managed to contact and check the server health
      The app was opened with an URL with the format
      http://HOST:PORT/questions?filter=FILTER
      Notice that this format contains a query parameter which should be used to fill the search box and trigger the search functionality.

- [x] If the filter parameter is missing, the user should simply be placed at the listing.

- [x] If the filter parameter is present but has an empty value the user should be placed at the filter variant with no input inserted but with the input box focused.

- The frontend application must fetch list data from the appropriate endpoint taking the following requirements into account:

- [x] The app should fetch 10 records at a time
      There is no sorting functionality. The list will follow the order returned from the API.

- [x] The app should start loading 10 additional records if the user shows intent to browse additional records.

- [x] The app should present a search box at the top of the list that allows the user to filter the results.

- Results should be shown on the same screen as a list. Searching implies hitting the appropriate endpoint and this variation must comply with the 2 requirements defined above.

- [x] If a search result is being shown (empty or not) the user must be allowed to share this with other users via the “Share Screen”. The app must send an appropriate URL that, when opened, drives the user to the appropriate screen.

- [x] Each list element is selectable and whenever the user selects one record the app must show the “Detail Screen”.

- [x] The frontend application must show the detail screen in two cases:

  - A row was selected in “List Screen”
  - The application was opened with the detail screen URL from outside the app: http://HOST:PORT/questions/QUESTION_ID/.

- [x] The “Detail Screen” must allow the user to navigate back to the listing.

- [x] The “Detail Screen” must convey all the information of the object using appropriate visualization widgets.

- [x] The “Detail Screen” must allow the user to share this content with other users via the “Share Screen”. The app must send an appropriate URL that, when opened, drives the user to the appropriate screen.

- [x] The “Detail Screen” must allow the user to vote on a particular answer via the use of a button. This should trigger an appropriate call to the API endpoint devoted to updating Questions.

- [x] This screen must allow the users to share this content with others via email.

- [x] The sharing mechanism should invoke the appropriate service on the back-end.

- [x] The app must monitor connectivity with the Internet and show an appropriate screen whenever the connection is lost. This screen should remain visible as long as the device has no connection to the Internet. When a connection is regained then the user should be at the state where it was before.

##### How to run this project

```bash
  # clone the project
  git clone https://github.com/mauriciogirardi/challenge-bliss.git

  # Open the project
  cd challenge-bliss

  # Install
  npm i

  # Run
  npm run dev

  # Opens in browser
  http://localhost:5174/
```

---

Made with :heart: by [Mauricio Girardi](https://www.linkedin.com/in/mauricio-girardi)
