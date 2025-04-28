// Refactored Hotspot Renderer
// Now accepting a container parameter and no longer using global IDs or codeModal

function renderHotspots(hotspots, container) {
  if (!container || !Array.isArray(hotspots)) return;

  // Remove previous hotspot elements in this container
  container.querySelectorAll('.hotspot-point, .hotspot-overlay, .hotspot-line, .hotspot-line-vertical')
           .forEach(el => el.remove());

  let activeOverlay = null;

  hotspots.forEach((h, i) => {
    // Create hotspot point
    const point = document.createElement('div');
    point.className = 'hotspot-point cursor-pointer z-10';
    point.style.top  = h.top;
    point.style.left = h.left;
    container.appendChild(point);

    // Create overlay box
    const overlay = document.createElement('div');
    overlay.className = 'hotspot-overlay hidden';
    overlay.style.top   = h.overlay?.top  || `calc(${h.top} - 10%)`;
    overlay.style.left  = h.overlay?.left || '5%';
    overlay.style.width = h.overlay?.width || '220px';
    overlay.innerHTML   = h.content;
    container.appendChild(overlay);

    // Create connector lines
    const lineH = document.createElement('div');
    const lineV = document.createElement('div');
    lineH.className = 'hotspot-line hidden';
    lineV.className = 'hotspot-line hotspot-line-vertical hidden';
    container.appendChild(lineH);
    container.appendChild(lineV);

    // Hover event handlers
    point.addEventListener('mouseenter', () => {
      // Hide previous
      if (activeOverlay && activeOverlay !== overlay) {
        activeOverlay.classList.add('hidden');
        activeOverlay.lineH.classList.add('hidden');
        activeOverlay.lineV.classList.add('hidden');
      }
      // Show current
      overlay.classList.remove('hidden');
      lineH.classList.remove('hidden');
      lineV.classList.remove('hidden');
      activeOverlay = overlay;
      activeOverlay.lineH = lineH;
      activeOverlay.lineV = lineV;

      // Position lines
      const overlayMidY  = overlay.offsetTop + overlay.offsetHeight / 2;
      const overlayRight = overlay.offsetLeft + overlay.offsetWidth;
      const pointX       = (parseFloat(h.left) / 100) * container.offsetWidth;
      const pointY       = (parseFloat(h.top)  / 100) * container.offsetHeight;

      lineH.style.top   = `${overlayMidY}px`;
      lineH.style.left  = `${overlayRight}px`;
      lineH.style.width = `${pointX - overlayRight}px`;

      lineV.style.top    = `${Math.min(pointY, overlayMidY)}px`;
      lineV.style.left   = `${pointX}px`;
      lineV.style.height = `${Math.abs(pointY - overlayMidY)}px`;

      // Highlight corresponding UNS entry(s)
      if (window.updateActiveUns) window.updateActiveUns(i);
    });

    point.addEventListener('mouseleave', () => {
      if (activeOverlay === overlay) {
        overlay.classList.add('hidden');
        lineH.classList.add('hidden');
        lineV.classList.add('hidden');
        activeOverlay = null;
        if (window.updateActiveUns) window.updateActiveUns(-1);
      }
    });
  });
}

window.renderHotspots = renderHotspots;
