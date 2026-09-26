"use strict";

document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector("#nav-links");
const mobileViewport = window.matchMedia("(max-width: 760px)");

function setMenuState(open) {
  if (!menuButton || !navigationLinks) return;

  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "Close" : "Menu";

  navigationLinks.classList.toggle("is-open", open);
}

function updateMenuForViewport() {
  if (!menuButton) return;

  menuButton.hidden = !mobileViewport.matches;
  setMenuState(false);
}

if (menuButton && navigationLinks) {
  updateMenuForViewport();

  menuButton.addEventListener("click", () => {
    const currentlyOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    setMenuState(!currentlyOpen);
  });

  navigationLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenuState(false);
      menuButton.focus();
    }
  });

  mobileViewport.addEventListener("change", updateMenuForViewport);
}

/*
 * Reveal a project overview when its card is selected
 * or its fragment appears in the page URL.
 */
function revealProjectFromHash(hash, scroll = true) {
  if (!hash || hash === "#") return;

  let id;

  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return;
  }

  const project = document.getElementById(id);

  if (!(project instanceof HTMLDetailsElement)) return;

  project.open = true;

  if (scroll) {
    requestAnimationFrame(() => {
      project.scrollIntoView({
        behavior: "auto",
        block: "start"
      });
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    revealProjectFromHash(link.getAttribute("href"), false);
  });
});

window.addEventListener("hashchange", () => {
  revealProjectFromHash(window.location.hash);
});

revealProjectFromHash(window.location.hash);

/* Keep the footer year current. */
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
