
(() => {
  "use strict";
  const pageId = document.body.dataset.page;
  const currentIndex = storyPages.findIndex(page => page.id === pageId);
  const contentRoot = document.getElementById("page-content");
  contentRoot.innerHTML = pageMarkup[pageId] || "";

  // Page changes happen only when a navigation arrow or a page link is clicked.
  const previous = document.querySelector(".page-arrow.previous");
  const next = document.querySelector(".page-arrow.next");
  if (currentIndex > 0) previous.href = storyPages[currentIndex - 1].file;
  else previous.setAttribute("aria-hidden", "true");
  if (currentIndex < storyPages.length - 1) next.href = storyPages[currentIndex + 1].file;
  else next.setAttribute("aria-hidden", "true");

  // Flip memory Polaroids on tap/click.
  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
    });
  });

  // Modal helpers for the note and letter.
  const openModal = id => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.hidden = false;
      modal.querySelector(".modal-close")?.focus();
    }
  };
  document.getElementById("read-note")?.addEventListener("click", () => openModal("note-modal"));
  document.getElementById("open-letter")?.addEventListener("click", () => openModal("letter-modal"));
  document.querySelectorAll("[data-close]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.close);
      if (modal) modal.hidden = true;
    });
  });
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
      if (event.target === modal) modal.hidden = true;
    });
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") document.querySelectorAll(".modal:not([hidden])").forEach(modal => modal.hidden = true);
  });

  // Single-song audio player; controls remain useful even before the MP3 is added.
  const audio = document.getElementById("birthday-audio");
  if (audio) {
    const playButton = document.getElementById("play");
    const seek = document.getElementById("seek");
    const elapsed = document.getElementById("elapsed");
    const duration = document.getElementById("duration");
    const formatTime = value => {
      if (!Number.isFinite(value)) return "0:00";
      return `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, "0")}`;
    };
    playButton.addEventListener("click", async () => {
      if (audio.paused) {
        try { await audio.play(); playButton.textContent = "Ⅱ"; }
        catch { playButton.textContent = "▶"; }
      } else {
        audio.pause(); playButton.textContent = "▶";
      }
    });
    audio.addEventListener("timeupdate", () => {
      elapsed.textContent = formatTime(audio.currentTime);
      seek.value = audio.duration ? String((audio.currentTime / audio.duration) * 100) : "0";
    });
    audio.addEventListener("loadedmetadata", () => duration.textContent = formatTime(audio.duration));
    audio.addEventListener("ended", () => playButton.textContent = "▶");
    seek.addEventListener("input", () => {
      if (Number.isFinite(audio.duration)) audio.currentTime = (Number(seek.value) / 100) * audio.duration;
    });
    document.getElementById("restart").addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play().then(() => playButton.textContent = "Ⅱ").catch(() => {});
    });
    document.getElementById("next-track").addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play().then(() => playButton.textContent = "Ⅱ").catch(() => {});
    });
    document.getElementById("shuffle").addEventListener("click", event => event.currentTarget.classList.toggle("active"));
    document.getElementById("repeat").addEventListener("click", event => {
      audio.loop = !audio.loop;
      event.currentTarget.classList.toggle("active", audio.loop);
    });
  }
})();
