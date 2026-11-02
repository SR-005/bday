HUDA — BIRTHDAY SCRAPBOOK WEB APP
=================================

A mobile-first, eight-page birthday scrapbook built with plain HTML, CSS and JavaScript.
No framework, bundler or build command is required.

RUN LOCALLY
1. Extract this ZIP.
2. Open the extracted folder in Visual Studio Code.
3. Install the Live Server extension if needed.
4. Right-click index.html and select "Open with Live Server".

PAGES
index.html          Invitation
welcome.html        Welcome
memories.html       Memories
playlist.html       Our Playlist
little-things.html  Little Things About You
unsaid.html         The Unsaid
letter.html         The Letter
ending.html         Birthday finale

DESIGN / INTERACTION REQUIREMENTS
- No side panel.
- No top-left interface labels or page headings outside the design composition.
- Burgundy and warm ivory scrapbook palette.
- Cormorant Garamond, Playfair Display and Great Vibes typography (Google Fonts).
- Mobile-first responsive layouts.
- Navigation only by clicking the bottom arrows or explicit OPEN buttons.
- No automatic page progression and no swipe navigation.
- Memories Polaroids flip on tap.
- The Unsaid and Letter open dismissible overlays.
- Playlist audio player supports play/pause, seek, restart, repeat and a shuffle-state button.

REPLACE PHOTOS
Put your photos in assets/photos using these exact names:
memory-1.jpg
memory-2.jpg
memory-3.jpg

A neutral placeholder is shown until you add them.

ADD MUSIC
Add your audio file as:
assets/audio/our-song.mp3

EDIT TEXT
Edit the page copy in js/content.js.
Edit navigation and interactions in js/app.js.
Edit appearance and responsive rules in css/styles.css.

ASSETS
The transparent PNG illustrations in assets/images are the clean cutouts prepared from the supplied
storyboard asset pack. They are kept as separate reusable image assets; the page layouts and controls
are actual HTML/CSS/JS, not flattened screenshots.

NOTE
The supplied storyboard is a flattened reference image. The cutouts are transparent PNG assets
rather than original editable vector layers. The standalone cherry-and-leaf sprig from the ending
panel was not included because it could not be cleanly isolated from the burgundy panel and gingham.


LITTLE THINGS ABOUT US PHOTOS
Four supplied photos are integrated in assets/photos/ as us-1 through us-4.
The full image compositions are retained; CSS uses contain rather than cropping.
