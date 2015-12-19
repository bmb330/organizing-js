# Organizing JavaScript Functionality

In this exercise, you will modify and extend existing code to wire up some basic interactivity for a simple "cool site". The objective of this challenge is to exercise skills with basic JavaScript, including events and DOM interactions (using jQuery), as well as using basic best practices for organizing your code.

We will break this exercise into four tasks.

**Note:** The Ajax calls in this exercise will only work over `file://...` protocol if you're in Firefox. If you're using Chrome or IE, you'll need to run a local fileserver (like python's `SimpleHTTPServer`, Apache, IIS, etc) in the coding challenge directory, and load it into the browser using `http://localhost...` instead.

## Task 1

1. Open "header.js". In this file, you will attach event handlers for the header links. Use a jQuery "document-ready" event handler.
2. When the links are clicked, it should use Ajax to fetch the contents of the file referenced by the link's `href`, and load that content into the `#modal` element.
3. Finally, make the modal visible.
4. No other interaction is necessary, for now. We'll revisit the header links in Task #4.

## Task 2

1. Open "carousel.js" and "details.js". In these files, you will attach event handlers as noted by the code comments.
2. In "carousel.js", you just need to add event handlers for the left and right carousel buttons.
3. In "details.js", you need to have an event handler to listen for clicks on the items in the carousel.
4. Whichever carousel item is clicked, you need to pull out the "ID" from the HTML `rel` attribute.
5. With this "ID", you need to make an Ajax request to load the file `details/{ID}.html` and put its contents into the `$content` div.

## Task 3

1. Refactor "header.js", "carousel.js", and "details.js" to use the "module pattern". Each file should expose one module name (`Header`, `Carousel`, and `Details`, respectively).
2. Each module's API should have at a minimum one method called `init()`, which you should wire up to be called by the jQuery "document ready" event.
3. Refactor so the "click" handling from `Details` is moved into `Carousel`, but keep the Ajax content loading in `Details`.
4. There should be a public API method on `Details` called `loadPerson(..)` which takes the "ID" and does the Ajax file loading. `Carousel` should have the event handler for clicks on the carousel items wired to call `Details.loadPerson(..)`, passing along the appropriate "ID".
5. Refactor so there is only one jQuery "document ready" event (in its own file, such as "app.js") that calls the `init()` method on each of the three modules.

## Task 4

1. Add a close button to the modal that works.
2. Add behavior so the "register" and "login" buttons also close the modal.
3. In "app.js", create a global "pubsub" event-hub (call it `EVT` for instance). In the document-ready event handler, publish an "init" event (using `EVT.emit(..)`) to the hub, and have each module listen (using `EVT.on(..)`) for this "init" event and run its own `init()` method.
4. Remove the public API `loadPerson(..)` from `Details`. Instead, use the included `eventemitter2` utility to  Then use `EVT` in `Carousel` to `emit(..)` an event (like `"person-selected"` for instance) with the "ID" of the person selected. Then have `Details` listen (via `EVT.on(..)`) for this event to select the person.
5. Add a link/button in one of the details listings that fires the person selecting event (same as the carousel) to load another person.

## Extra Credit

1. The person selecting event should scroll the carousel to show the person that's been selected.
2. Highlight the selected person in the carousel.
