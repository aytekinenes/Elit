(function(){
  // Create lightbox DOM
  var overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.innerHTML = '\n    <button class="lb-close" aria-label="Kapat">\u00d7</button>\n    <button class="lb-prev" aria-label="Önceki">\u2039</button>\n    <div class="lb-content">\n      <img class="lb-image" src="" alt="">\n      <div class="lb-caption"></div>\n    </div>\n    <button class="lb-next" aria-label="Sonraki">\u203a</button>\n  ';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector('.lb-image');
  var captionEl = overlay.querySelector('.lb-caption');
  var closeBtn = overlay.querySelector('.lb-close');
  var prevBtn = overlay.querySelector('.lb-prev');
  var nextBtn = overlay.querySelector('.lb-next');

  var triggers = Array.prototype.slice.call(document.querySelectorAll('.lightbox-trigger'));
  var currentIndex = -1;

  function open(index){
    if (index < 0 || index >= triggers.length) return;
    currentIndex = index;
    var a = triggers[index];
    var href = a.getAttribute('href');
    var fallback = a.getAttribute('data-fallback');
    var caption = a.getAttribute('data-caption') || '';
    captionEl.textContent = caption;
    // try href first (prefer webp), but fall back to fallback if provided
    imgEl.src = href || fallback || '';
    imgEl.alt = caption;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    imgEl.onload = function(){ overlay.classList.add('loaded'); };
    imgEl.onerror = function(){
      if (fallback && imgEl.src !== fallback){
        imgEl.src = fallback;
      } else {
        captionEl.textContent = 'Görsel yüklenemedi.';
      }
    };
  }
  function close(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    imgEl.src = '';
    currentIndex = -1;
  }
  function prev(){ open((currentIndex - 1 + triggers.length) % triggers.length); }
  function next(){ open((currentIndex + 1) % triggers.length); }

  // attach handlers
  triggers.forEach(function(a, i){
    a.addEventListener('click', function(e){
      e.preventDefault();
      open(i);
    });
  });
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function(e){ if (e.target === overlay) close(); });
  prevBtn.addEventListener('click', function(e){ e.stopPropagation(); prev(); });
  nextBtn.addEventListener('click', function(e){ e.stopPropagation(); next(); });
  document.addEventListener('keydown', function(e){
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

})();
