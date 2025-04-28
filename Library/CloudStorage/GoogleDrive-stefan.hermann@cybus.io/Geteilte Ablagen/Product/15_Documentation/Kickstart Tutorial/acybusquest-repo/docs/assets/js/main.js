window.addEventListener('DOMContentLoaded', () => {
  // Lightbox-Container anlegen
const globalLightbox = document.createElement('div');
globalLightbox.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 hidden';
const globalImg = document.createElement('img');
globalImg.className = 'max-w-full max-h-full rounded-lg';
globalLightbox.appendChild(globalImg);
document.body.appendChild(globalLightbox);

// Klick auf Overlay schließt die Lightbox
globalLightbox.addEventListener('click', () => {
  globalLightbox.classList.add('hidden');
});
  // Prism YAML Highlighting laden
  const yamlPlugin = document.createElement('script');
  yamlPlugin.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-yaml.min.js';
  document.head.appendChild(yamlPlugin);

  const burgerBtn    = document.getElementById('burger-btn');
  const sidebar      = document.getElementById('sidebar');
  const sidebarLinks = sidebar.querySelectorAll('nav a[data-md]');
  const contentEl    = document.getElementById('content');

  // Wrapper für Code-Modal positionieren
  const wrapperDiv = contentEl.parentElement.parentElement;
  wrapperDiv.classList.add('relative');

  // Code-Modal erstellen
  const codeOverlay = document.createElement('div');
  codeOverlay.className = 'absolute inset-0 bg-black bg-opacity-75 z-50 hidden flex justify-center items-start p-4 overflow-auto';
  const overlayContent = document.createElement('div');
  overlayContent.className = 'relative bg-gray-800 rounded-lg w-full h-full max-w-none max-h-none overflow-auto';
  const controlBar = document.createElement('div');
  controlBar.className = 'flex justify-end space-x-2 p-2 border-b border-gray-700 bg-gray-900';
  const copyBtn = document.createElement('button'); copyBtn.textContent = 'Copy'; copyBtn.className = 'px-3 py-1 bg-primary text-black rounded';
  const dlBtn   = document.createElement('a');    dlBtn.textContent = 'Download'; dlBtn.className   = 'px-3 py-1 bg-primary text-black rounded';
  const closeBtn= document.createElement('button'); closeBtn.textContent= 'Close'; closeBtn.className= 'px-3 py-1 bg-primary text-black rounded';
  controlBar.append(copyBtn, dlBtn, closeBtn);
  const pre   = document.createElement('pre'); pre.className = 'p-4 overflow-auto whitespace-pre language-yaml'; pre.style.maxHeight = 'calc(100vh - 4rem)';
  const code  = document.createElement('code'); code.className = 'language-yaml'; pre.appendChild(code);
  overlayContent.append(controlBar, pre);
  codeOverlay.appendChild(overlayContent);
  wrapperDiv.appendChild(codeOverlay);
  closeBtn.addEventListener('click', () => {
    codeOverlay.classList.add('hidden');
    if (codeOverlay._prevScrollY != null) {
      window.scrollTo({ top: codeOverlay._prevScrollY, behavior: 'smooth' });
    }
  });

  // Styling-Helper
  function updateActiveLinkStyling(link) {
    sidebarLinks.forEach(a => a.classList.remove('bg-primary', 'text-white'));
    link.classList.add('bg-primary', 'text-white');
  }

  // UNS-Hervorhebung
  window.updateActiveUns = idx => {
    document.querySelectorAll('.hotspot-block li[data-idx], .slideshow-block li[data-idx]')
          .forEach(li => li.classList.remove('text-primary'));

    // Hebe nur den aktuellen Eintrag hervor
  document.querySelectorAll(
    `.hotspot-block li[data-idx="${idx}"], .slideshow-block li[data-idx="${idx}"]`
  ).forEach(li => li.classList.add('text-primary'));
  };

  // Burger Menü Toggle
  burgerBtn.addEventListener('click', () => sidebar.classList.toggle('hidden'));

  // Seite laden & Rendern
  async function loadPage(mdPath) {
    window.updateActiveUns(-1);
    try {
      const res = await fetch(mdPath);
      if (!res.ok) throw new Error(`Fetch failed: ${mdPath}`);
      const text = await res.text();
      const match = text.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
      if (!match) {
        contentEl.innerHTML = text;
      } else {
        const meta = jsyaml.load(match[1]);
        contentEl.innerHTML = marked.parse(match[2]);

        contentEl.querySelectorAll('p a, li a').forEach(link => {
          const txt = link.textContent || '';
        
          // → Download-Link
          if (txt.startsWith('DL:')) {
            link.textContent = txt.replace(/^DL:\s*/, '');
            link.setAttribute('download', '');
            link.classList.add('download-link');
          }
        
          // → Code-Modal-Link
          if (txt.startsWith('CODE:')) {
            link.textContent = txt.replace(/^CODE:\s*/, '');
            link.classList.add('code-link');
          }
        });
        
        /* Code Highlighting */
                // Code-Blocks mit Toolbar versehen
                contentEl.querySelectorAll('pre > code').forEach(codeBlock => {
                  const pre = codeBlock.parentElement;
                  const langMatch = codeBlock.className.match(/language-(\w+)/);
                  const lang = langMatch ? langMatch[1] : '';
        
                  // Wrapper um <pre>
                  const wrapper = document.createElement('div');
                  wrapper.className = 'code-block';
        
                  // Toolbar erstellen
                  const toolbar = document.createElement('div');
                  toolbar.className = 'code-toolbar';
        
                  // Label
                  const label = document.createElement('span');
                  label.className = 'code-label uppercase text-xs';
                  label.textContent = lang;
                  toolbar.appendChild(label);
        
                  // Copy-Button
                  const btn = document.createElement('button');
                  btn.className = 'code-copy float-right text-xs';
                  btn.textContent = 'COPY';
                  btn.addEventListener('click', () => {
                    navigator.clipboard.writeText(codeBlock.textContent);
                    btn.textContent = 'Copied!';
                    setTimeout(() => btn.textContent = 'COPY', 1500);
                  });
                  toolbar.appendChild(btn);
        
                  // pre klonen und Toolbar INSIDE pre einfügen
                  const preClone = pre.cloneNode(true);
                  preClone.insertBefore(toolbar, preClone.firstChild);
                  wrapper.appendChild(preClone);
                  pre.replaceWith(wrapper);
                });

        // Shortcode-Blöcke finden
        const blocks = contentEl.querySelectorAll('.hotspot-block');
        for (const block of blocks) {
          const imagePath   = block.dataset.image;
          const snippetPath = block.dataset.snippet;

          // Bild-Container erzeugen
          const blockContainer = document.createElement('div');
          blockContainer.className = 'relative overflow-hidden rounded-lg';
          const img = document.createElement('img');
          img.src = `assets/images/${imagePath.split('/').pop()}`;
          img.className = 'w-full h-auto';
          blockContainer.appendChild(img);
          block.appendChild(blockContainer);

          // für **jedes** img in einem Hotspot-Block:
          blockContainer
            .querySelectorAll('img')
            .forEach(imgEl => {
              imgEl.addEventListener('click', () => {
                globalImg.src = imgEl.src;
                globalLightbox.classList.remove('hidden');
              });
            });

          // Wenn kein Snippet, skippe Hotspots
          if (!snippetPath) continue;

          // UNS-Liste erzeugen
          const blockUnsList = document.createElement('div');
          blockUnsList.className = 'prose prose-invert mt-4';
          block.appendChild(blockUnsList);

          // Snippet laden & rendern
          try {
            let resp = await fetch(snippetPath);
            if (!resp.ok && snippetPath.endsWith('.yaml')) {
              const alt = snippetPath.replace(/\.yaml$/, '.md');
              resp = await fetch(alt);
              if (resp.ok) snippetPath = alt;
            }
            if (!resp.ok) {
              console.error(`Snippet nicht gefunden: ${snippetPath}`, resp.status);
              blockContainer.remove();
              blockUnsList.remove();
              continue;
            }
            const hsText = await resp.text();
            const hotspots = jsyaml.load(hsText);
            if (!Array.isArray(hotspots)) {
              console.error('Erwartet Array in Snippet-YAML, bekam:', hotspots);
              blockContainer.remove();
              blockUnsList.remove();
              continue;
            }
            if (hotspots.length) {
              blockUnsList.innerHTML = `
                <h3 class=\"font-bold\">Unified Namespace</h3>
                <ul class=\"list-none pl-0\">
                  ${hotspots.map((h, i) => `<li data-idx=\"${i}\" class=\"truncate py-0\">${h.uns}</li>`).join('')}
                </ul>`;
              window.renderHotspots(hotspots, blockContainer);
              // direkt nach window.renderHotspots(hotspots, blockContainer);
              blockContainer.addEventListener('click', e => {
                const rect = blockContainer.getBoundingClientRect();
                const xPx  = e.clientX - rect.left;
                const yPx  = e.clientY - rect.top;
                const xPct = (xPx / rect.width) * 100;
                const yPct = (yPx / rect.height) * 100;
                console.log(`Mouse (px):   X=${xPx.toFixed(0)}, Y=${yPx.toFixed(0)}`);
                console.log(`Mouse (%):    top: ${yPct.toFixed(2)}% left: ${xPct.toFixed(2)}%`);
              });
            } else {
              blockContainer.remove();
              blockUnsList.remove();
            }
          } catch (err) {
            console.error('Hotspot-Snippet konnte nicht geladen werden:', snippetPath, err);
            blockContainer.remove();
            // Wenn UNS-Liste existiert
            const ul = block.querySelector('div.prose-invert');
            if (ul) ul.remove();
          }
        }

        // Code-Modal Links
        contentEl.querySelectorAll('a.code-link').forEach(link => {
          link.addEventListener('click', async e => {
            e.preventDefault();
            codeOverlay._prevScrollY = window.pageYOffset;
            try {
              const resp = await fetch(link.href);
              if (!resp.ok) throw new Error(`Fetch failed: ${link.href}`);
              const txt = await resp.text();
              code.textContent = txt;
              Prism.highlightElement(code);
              // Download-Button im Modal bleibt, falls gewünscht
              dlBtn.href     = link.href;
              dlBtn.download = link.href.split('/').pop();
              copyBtn.onclick = () => navigator.clipboard.writeText(txt);
              codeOverlay.classList.remove('hidden');
              overlayContent.scrollTop = 0;
            } catch (err) {
              console.error(err);
            }
          });
        });

      }
    } catch (err) {
      console.error(err);
      contentEl.innerHTML = '<p class=\"text-red-500\">Fehler beim Laden der Seite.</p>';
    }
    // Slideshow-Snippets initialisieren (werden dynamisch ins DOM eingefügt)
    if (window.initSlideshows) window.initSlideshows(contentEl);
  }

  // Routing & Layout
  function onPageChange() {
    const params = new URLSearchParams(location.search);
    let page = params.get('page');
    if (!page && sidebarLinks[0]) {
      page = sidebarLinks[0].href.split('=')[1];
      history.replaceState(null, '', `?page=${page}`);
    }
    const link = Array.from(sidebarLinks).find(a => a.getAttribute('href') === `?page=${page}`);
    if (!link) return;

    // Vollbild-Layout
    contentEl.classList.remove('w-full', 'lg:w-1/2', 'lg:w-3/4', 'max-w-none');
    contentEl.classList.add('w-full', 'max-w-none');

    sidebarLinks.forEach(l => l.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'page');
    updateActiveLinkStyling(link);

    loadPage(link.dataset.md);
  }

  // Link-Handler
  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      history.pushState(null, '', link.href);
      onPageChange();
    });
  });
  window.addEventListener('popstate', onPageChange);

  // Initialisieren
  onPageChange();

});
