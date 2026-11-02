
const storyPages = [
  { id:"invitation", file:"index.html" },
  { id:"welcome", file:"welcome.html" },
  { id:"memories", file:"memories.html" },
  { id:"playlist", file:"playlist.html" },
  { id:"little-things", file:"little-things.html" },
  { id:"unsaid", file:"unsaid.html" },
  { id:"letter", file:"letter.html" },
  { id:"ending", file:"ending.html" }
];

const pageMarkup = {
  invitation: `
    <section class="invitation-layout">
      <div class="invitation-art">
        <img class="art" src="assets/images/invitation-envelope.png" alt="A handwritten invitation envelope addressed to Huda">
      </div>
      <div class="invitation-copy">
        <p class="message">For all the things<br>that make you<br>'YOU!' ♡</p>
        <a class="outline-button" href="welcome.html">OPEN <span aria-hidden="true">→</span></a>
        <div class="date-stamp">03<small>NOV</small></div>
      </div>
    </section>`,
  welcome: `
    <section class="welcome-layout">
      <div class="welcome-art">
        <img class="art" src="assets/images/welcome-calendar.png" alt="November calendar with the third marked">
      </div>
      <div class="welcome-copy">
        <p class="overline">THE DAY<br>THAT BELONGS TO</p>
        <h1>YOU ♡</h1>
        <p class="body-copy">Today is all about you, Huda —<br>the chaos, the kindness, the stories,<br>and the ordinary things that make you, you.</p>
      </div>
    </section>`,
  memories: `
    <section class="memories-layout">
      <div class="memories-heading">
        <h1>MEMORIES</h1>
        <p>A COLLECTION OF OUR<br>FAVOURITE MOMENTS ♡</p>
      </div>
      <div class="memories-illustration">
        <img class="art" src="assets/images/memories-collage.png" alt="Vintage camera, photographs and scrapbook details">
      </div>
      <div class="memory-cards">
        ${[1,2,3].map((n)=>`
          <button class="flip-card" type="button" aria-label="Flip memory ${n}" aria-pressed="false">
            <span class="flip-inner">
              <span class="flip-front">
                <img src="assets/photos/memory-${n}.jpg" alt="Memory ${n}" onerror="this.onerror=null;this.src='assets/photos/photo-placeholder.svg'">
                <span>${["that one lovely day","my favourite chaos","a little forever"][n-1]} ♡</span>
              </span>
              <span class="flip-back">
                <span>${[
                  "I wish I could press pause on moments like this and keep them forever.",
                  "Some of my happiest memories have you in them. Thank you for being you.",
                  "It may look like an ordinary picture, but it holds a memory I will always keep."
                ][n-1]}</span>
                <small>— with love</small>
              </span>
            </span>
          </button>`).join("")}
      </div>
    </section>`,
  playlist: `
    <section class="playlist-layout">
      <div class="vinyl-art">
        <img class="art" src="assets/images/playlist-vinyl.png" alt="A cherry album sleeve beside a burgundy vinyl record">
      </div>
      <div class="player">
        <h1>SOMETHING<br>FOR YOU ♡</h1>
        <p class="track-name" id="track-name">For all the moments yet to come...</p>
        <audio id="birthday-audio" preload="metadata" src="assets/audio/our-song.mp3"></audio>
        <input class="seek" id="seek" type="range" min="0" max="100" value="0" aria-label="Song progress">
        <div class="time-row"><span id="elapsed">0:00</span><span id="duration">0:00</span></div>
        <div class="player-controls">
          <button id="shuffle" type="button" aria-label="Shuffle">⤨</button>
          <button id="restart" type="button" aria-label="Restart song">|◀</button>
          <button class="play-button" id="play" type="button" aria-label="Play">▶</button>
          <button id="next-track" type="button" aria-label="Restart song">▶|</button>
          <button id="repeat" type="button" aria-label="Repeat">↻</button>
        </div>
      </div>
    </section>`,
  "little-things": `
    <section class="little-layout">
      <h1>LITTLE THINGS ABOUT US</h1>
      <p class="little-intro">ordinary days, favourite detours & everything in between ♡</p>
      <div class="little-cards">
        <figure class="little-card photo-card">
          <span class="photo-tape" aria-hidden="true"></span>
          <img src="assets/photos/us-1-mirror-selfie.jpg" alt="A mirror selfie of us together">
          <figcaption>the little detours</figcaption>
        </figure>
        <figure class="little-card photo-card">
          <span class="photo-tape" aria-hidden="true"></span>
          <img src="assets/photos/us-2-beach-day.jpg" alt="A beach day memory">
          <figcaption>sunny side of us</figcaption>
        </figure>
        <figure class="little-card photo-card">
          <span class="photo-tape" aria-hidden="true"></span>
          <img src="assets/photos/us-3-coffee-moment.jpg" alt="A coffee moment together">
          <figcaption>one more coffee?</figcaption>
        </figure>
        <figure class="little-card photo-card">
          <span class="photo-tape" aria-hidden="true"></span>
          <img src="assets/photos/us-4-photo-booth-strip.jpg" alt="Our photo booth picture strip">
          <figcaption>proof we were there</figcaption>
        </figure>
      </div>
    </section>`,
  unsaid: `
    <section class="unsaid-layout">
      <div class="unsaid-art"><img class="art" src="assets/images/unsaid-note.png" alt="A handwritten note with a botanical sprig"></div>
      <div class="unsaid-copy">
        <p>the things<br>i never say<br>but always feel... ♡</p>
        <button class="outline-button" id="read-note" type="button">READ <span aria-hidden="true">→</span></button>
      </div>
    </section>
    <div class="modal" id="note-modal" hidden>
      <article class="modal-card" role="dialog" aria-modal="true" aria-labelledby="note-title">
        <button class="modal-close" type="button" data-close="note-modal" aria-label="Close">×</button>
        <h2 id="note-title">Something I hope you never forget</h2>
        <p>Some people make you feel loved without even trying too hard. You're one of those people, Hudddd. Even with the distance, the busy days and our occasional disappearing acts, you've never made me feel like I've lost you. Thank you for staying, for checking on me, and for making me feel like I have someone I can always come back to. I hope you know that you deserve the same kind of love and care you give so effortlessly to others. Never doubt how much you mean to me. ♡</p>
      </article>
    </div>`,
  letter: `
    <section class="letter-layout">
      <div class="letter-art"><img class="art" src="assets/images/letter-book.png" alt="A burgundy keepsake book tied with twine"></div>
      <div class="letter-copy">
        <p>the final stop...</p>
        <button class="outline-button" id="open-letter" type="button">OPEN <span aria-hidden="true">♡</span></button>
      </div>
    </section>
    <div class="modal" id="letter-modal" hidden>
      <article class="modal-card letter-modal-card" role="dialog" aria-modal="true" aria-labelledby="letter-title">
        <button class="modal-close" type="button" data-close="letter-modal" aria-label="Close">×</button>
        <p class="letter-salutation" id="letter-title">To my Hudddd,</p>
        <p>Happy birthday, you little chaos. ❤️</p>
        <p>I don't think I tell you enough how grateful I am to have you in my life. And I don't mean that as just another birthday thing. I genuinely am.</p>
        <p>When so many people came and went, you stayed. Even during times when I barely made an effort, when I went quiet or got caught up in my own little world, you never really let us drift apart. You always found a way to reconnect, checked on me, and made sure I was doing okay. I don't think you realise how much those little things mean to me.</p>
        <p>We're doing different degrees, living our own lives, and we don't even talk every day. But somehow, I've never felt like I had to question whether you're still there. That's something I don't take for granted. You've given me a kind of reassurance that not everyone leaves, that some friendships don't need daily conversations or constant efforts to remain real.</p>
        <p>You're honestly my little mom. The one who looks after me, makes efforts, remembers the little things and somehow manages to handle things better than I do. It's funny how you can be so chaotic yourself and still be the person who takes care of me. And I love that about you.</p>
        <p>I think your best quality is how you make people feel loved. You don't just say you care; you show it. You make people feel remembered, considered and important. And I genuinely believe that making someone feel loved is one of the best things a person can ever do.</p>
        <p>You know, even the smallest change in your voice makes me worry. When you sound a little different, my heart sinks because I just want to know if you're okay. I hope you know that you never have to pretend with me either. I want to be someone you can lean on, just as you've always been someone I could lean on.</p>
        <p>I know I'm not always the best at showing up, and I probably don't express how much you mean to me as often as I should. But please never mistake my silence for a lack of love. You're one of the very few people I can call genuinely real, and I'm so glad life gave me you.</p>
        <p>I hope this year brings you everything you've been quietly wishing for. I hope you receive the same care, patience and love that you so effortlessly give to others. I hope you always have reasons to be happy, people who choose you, and a place where you never have to question how much you're loved.</p>
        <p>And no matter how busy life gets, I hope we always find our way back to each other.</p>
        <p>Thank you for staying, Hudddd. For being my little mom, my safe person, and one of the very few people who make this whole friendship thing feel easy and real.</p>
        <p class="letter-signoff">I love you. More than my terrible texting habits could ever show. Happy birthday, my girl. ❤️</p>
      </article>
    </div>`,
  ending: `
    <section class="ending-layout">
      <div class="ending-title">
        <p class="birthday">HAPPY BIRTHDAY,</p>
        <h1>HUDA ♡</h1>
        <small>may your year be as lovely as you are</small>
      </div>
      <span class="ending-gingham" aria-hidden="true"></span>
    </section>`
};
