// assets/js/slideshow.js

/**
 * Initialisiert eine Slideshow-Block mit sliding transition, Pips und Hotspots pro Slide.
 * Klick auf Bild öffnet eine In-Page Lightbox, kein Fullscreen
 * @param {HTMLElement} block Der .slideshow-block Container
 */
function initSlideshow(block) {
  const images   = (block.dataset.images  || '').split(',').map(s => s.trim()).filter(Boolean);
  const snippets = (block.dataset.snippets || '').split(',').map(s => s.trim()).filter(Boolean);
  const duration = parseInt(block.dataset.duration, 10) || 3000;
  if (!images.length) return;

  let current = 0;
  let playing = true;

  // Block vorbereiten
  block.classList.add('relative', 'overflow-hidden');

  // Lightbox Overlay
  const lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 hidden';
  const lightImg = document.createElement('img');
  lightImg.className = 'max-w-full max-h-full rounded-lg';
  lightbox.appendChild(lightImg);
  document.body.appendChild(lightbox);
  lightbox.addEventListener('click', () => lightbox.classList.add('hidden'));

  // Slider-Wrapper
  const slider = document.createElement('div');
  slider.className = 'flex transition-transform duration-500 ease-in-out';
  slider.style.width = `${images.length * 100}%`;
  block.appendChild(slider);

  const step = 100 / images.length;

  // Slides
  images.forEach(src => {
    const slide = document.createElement('div');
    slide.style.flex = `0 0 ${step}%`;
    slide.className = 'relative';
    const img = document.createElement('img');
    img.src = src;
    img.className = 'w-full h-auto object-cover cursor-pointer rounded-lg';
    slide.appendChild(img);
    slider.appendChild(slide);

    // Lightbox toggeln
    img.addEventListener('click', () => {
      lightImg.src = src;
      lightbox.classList.remove('hidden');
    });
  });

  // UNS-Liste
  const unsList = document.createElement('div');
  unsList.className = 'prose prose-invert mt-4';
  block.appendChild(unsList);

  // Pips
  const pager = document.createElement('div');
  pager.className = 'flex justify-center mt-4 space-x-2';
  const dots = images.map((_, i) => {
    const d = document.createElement('button');
    d.className = 'w-3 h-3 rounded-full border-2 border-primary';
    d.dataset.index = i;
    d.addEventListener('click', () => {
      playing = false;
      show(i);
    });
    pager.appendChild(d);
    return d;
  });
  block.appendChild(pager);

  async function show(i) {
    current = (i + images.length) % images.length;
    slider.style.transform = `translateX(-${current * step}%)`;
    dots.forEach((d, idx) => d.classList.toggle('bg-primary', idx === current));

    // Hotspots
    unsList.innerHTML = '';
    const snippet = snippets[current];
    const slideEl = slider.children[current];
    slideEl.querySelectorAll('.hotspot-point, .hotspot-overlay, .hotspot-line, .hotspot-line-vertical').forEach(e => e.remove());
    if (snippet) {
      try {
        const res = await fetch(snippet);
        if (res.ok) {
          const text = await res.text();
          const hotspots = jsyaml.load(text) || [];
          window.renderHotspots(hotspots, slideEl);
          if (hotspots.length) {
            const title = document.createElement('h3');
            title.className = 'font-bold';
            title.textContent = 'Unified Namespace';
            const ul = document.createElement('ul'); ul.className = 'list-none pl-0';
            hotspots.forEach((h, i) => {
              const li = document.createElement('li');
              li.dataset.idx = i;      // hier data-idx setzen
              li.className = 'truncate py-0';
              li.textContent = h.uns;
              ul.appendChild(li);
            });
            unsList.append(title, ul);
          }
        }
      } catch (e) {
        console.error('Hotspot-Fehler:', snippet, e);
      }
    }
  }

  // Autoplay
  setInterval(() => { if (playing) show(current + 1); }, duration);
  block.addEventListener('mouseenter', () => playing=false);
  block.addEventListener('mouseleave', () => playing=true);

  // Start
  show(0);
}

function initSlideshows(ctx = document) {
  ctx.querySelectorAll('.slideshow-block').forEach(initSlideshow);
}

document.addEventListener('DOMContentLoaded', () => initSlideshows());
window.initSlideshows = initSlideshows;
