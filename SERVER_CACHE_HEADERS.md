# Server cache header examples — ready to apply

This file contains ready-to-copy configuration snippets for setting strong cache headers for static assets (images, CSS, JS, fonts) and conservative caching for HTML. Use the snippet that matches your hosting (NGINX, Apache, or Cloudflare). After applying the configuration, verify with the `curl` or PowerShell commands listed below.

Recommendations (summary)
- Images, CSS, JS, fonts: `Cache-Control: public, max-age=604800, immutable` (7 days) — good for a simple setup.
- HTML: `Cache-Control: no-cache` (so browsers revalidate the HTML on each visit but keep cached assets).
- When you deploy new assets, use hashed filenames (e.g. `app.abcdef.css`) so you can set long cache TTL safely.

---

## NGINX

Add the following to your Nginx config (inside the `server { ... }` block) or a file included by it. This sets long cache for static file extensions and short/no-cache for HTML.

```nginx
# inside server { ... }
location ~* \.(?:ico|css|js|gif|jpe?g|png|webp|avif|svg|woff2?|ttf|eot)$ {
  expires 7d;
  add_header Cache-Control "public, max-age=604800, immutable";
  access_log off;
  log_not_found off;
}

# HTML: always revalidate (adjust if you want longer caching)
location ~* \.(?:html|htm)$ {
  add_header Cache-Control "no-cache";
}

# If you use far-future cache for hashed assets, you can also add:
location ~* \.(?:css|js)$ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}
```

After editing, test and reload nginx:

```powershell
# test config
nginx -t
# reload
nginx -s reload
```

If you are on a managed host (cPanel, Plesk), look for "Additional Nginx directives" or similar, or ask hosting support to add the blocks.

---

## APACHE (.htaccess or virtual host)

Place this in your site's `.htaccess` (or inside the `<VirtualHost>` config) to set cache headers:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 7 days"
  ExpiresByType image/jpeg "access plus 7 days"
  ExpiresByType image/png "access plus 7 days"
  ExpiresByType text/css "access plus 7 days"
  ExpiresByType application/javascript "access plus 7 days"
  ExpiresByType font/woff2 "access plus 7 days"
  ExpiresByType font/woff "access plus 7 days"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\.(?:ico|css|js|gif|jpe?g|png|webp|avif|svg|woff2?|ttf|eot)$">
    Header set Cache-Control "public, max-age=604800, immutable"
  </FilesMatch>
  <FilesMatch "\.(?:html|htm)$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>
```

Restart Apache if you modified the VirtualHost file:

```powershell
# On many systems (Linux):
sudo systemctl reload apache2
# or
sudo systemctl reload httpd
```

If you use shared hosting and cannot edit server-level config, place the `.htaccess` in your site's root.

---

## Cloudflare (recommended quick option)

If your domain uses Cloudflare, you can apply long cache TTL via Cloudflare Page Rules or via Transform Rules/Workers.

### Page Rule (simpler)
- Pattern: `*elitled.com/*.css` → Cache Level: Cache Everything (optional) / Edge Cache TTL: 7 days
- Pattern: `*elitled.com/*.js` → Edge Cache TTL: 7 days
- Pattern: `*elitled.com/*.(png|jpg|jpeg|webp|avif|svg)` → Edge Cache TTL: 7 days

Page Rules are applied left-to-right; you can also use a single rule with a wildcard to match multiple extensions.

### Cloudflare Worker (complete control)

If you prefer to set response headers at the edge, use a small Worker that sets Cache-Control for static assets.

Example worker code (JavaScript):

```js
addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(req) {
  const url = new URL(req.url);
  const res = await fetch(req);
  const headers = new Headers(res.headers);
  if (url.pathname.match(/\.(?:css|js|png|jpg|jpeg|webp|avif|svg|woff2?|ttf)$/i)){
    headers.set('Cache-Control','public, max-age=604800, immutable');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
  }
  if (url.pathname.match(/\.(?:html|htm)$/i)){
    headers.set('Cache-Control','no-cache');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
  }
  return res;
}
```

Apply the worker to your domain routes in Cloudflare dashboard.

---

## Verification (PowerShell / curl)

After you apply changes, verify the response headers with these commands.

PowerShell (Windows):

```powershell
# HEAD request and show Cache-Control header
(Invoke-WebRequest -Uri "https://elitled.com/img/res2-thumb.webp" -Method Head).Headers['Cache-Control']

# Or show all headers
(Invoke-WebRequest -Uri "https://elitled.com/img/res2-thumb.webp" -Method Head).Headers
```

curl (cross-platform):

```powershell
curl.exe -I "https://elitled.com/img/res2-thumb.webp"
curl.exe -I "https://elitled.com/"
```

You should see `Cache-Control: public, max-age=604800, immutable` for images/CSS/JS and `Cache-Control: no-cache` (or similar) for HTML.

---

## Extra notes & migration tips
- Use hashed filenames for assets (e.g. `app.ab12cd.css`) when using long TTL so that clients always pick up new versions after deploy.
- If you use a CDN in front of your origin (recommended), apply cache TTL at the CDN layer. Cloudflare Page Rules/Workers are easiest when using Cloudflare.
- If you don't have direct server access, ask hosting support to apply Nginx/Apache blocks or use Cloudflare if possible.

If you tell me which hosting provider you use (shared hosting, cPanel, Plesk, Hetzner, DigitalOcean, nginx server, Apache server, Cloudflare-only, Netlify, Vercel, etc.), I can produce an exact, copy-paste config and a short deployment checklist specific to your environment.