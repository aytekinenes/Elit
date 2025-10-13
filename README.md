<<<<<<< HEAD
Elit - Image optimization helpers

What I changed

- Added a Node-based helper to convert existing JPG/PNG images in `img/` to WebP: `scripts/convert-webp.js` and `package.json`.
- Replaced inline `<img>` logo markup across multiple pages with a `<picture>` element that prefers `.webp` when available.
- Wrapped portfolio images in `index.html` with anchors `.lightbox-trigger` and `<picture>` so clicking opens the full-size original image in a minimal lightbox.
- Added `lightbox.css` and `lightbox.js` to provide a lightweight modal viewer (keyboard accessible: Esc, ArrowLeft, ArrowRight).

How to convert your images to WebP (Windows PowerShell)

1. Install Node.js if you don't have it: https://nodejs.org/
2. Open PowerShell in the project root (`c:\Users\Enes-PC\Desktop\Elit`).
3. Install dependencies:

   npm install

4. Run the converter:

   npm run convert-webp

This will create `.webp` files next to your existing images (e.g. `res2.webp`). The site uses the WebP files automatically via the `<picture>` tags, and falls back to the original JPG/PNG when WebP is not supported by the browser.

Notes & next steps

- The converter uses `sharp` and will overwrite existing `.webp` files with new versions.
- If you want to resize thumbnails to smaller sizes, we can extend the script to emit both thumbnails (e.g. `res2-thumb.webp`) and full-size webp files and switch the markup accordingly.
- If your hosting already serves WebP via server-side conversion or a CDN, you can drop the `scripts/` folder.

If you want, I can also:
- Generate thumbnail images and update the markup to use them for faster page load.
- Bulk compress existing JPG/PNG files to reduce disk space.

Generate thumbnails (recommended)

After converting to WebP you can also generate smaller thumbnails used on the portfolio grid. Run:

   npm run generate-thumbs

This creates `*-thumb.webp` images (e.g. `res2-thumb.webp`) in the `img/` folder. The site now uses these thumbnails for faster loading and the lightbox opens the full-size `.webp` when available.

Performance & Hosting recommendations (to address PageSpeed findings)

1) Preload the LCP image
   - Already applied: `index.html` now preloads `img/home.webp` with fetchpriority="high".

2) Serve resources with long cache lifetimes
   - Configure your web server or CDN to serve static assets (images, CSS, JS) with a long Cache-Control, for example:

     - For images, CSS, JS: Cache-Control: public, max-age=604800, immutable
     - For HTML: Cache-Control: no-cache (so you can update content while still caching other assets)

   - Example (NGINX):

     location ~* \.(?:png|jpg|jpeg|webp|avif|gif|svg)$ {
       add_header Cache-Control "public, max-age=604800, immutable";
     }

     location ~* \.(?:css|js)$ {
       add_header Cache-Control "public, max-age=604800, immutable";
     }

3) Defer non-critical CSS/JS
   - Lightbox CSS is loaded with `<link rel="preload" as="style" onload="this.rel='stylesheet'">` so it doesn't block LCP.
   - `lightbox.js` is loaded with `defer` to avoid blocking parsing.

4) Serve appropriately sized images for thumbnails
   - Thumbnails were generated at ~800px width. If PageSpeed suggests they should be smaller (e.g. 356×267), consider regenerating thumbs at those exact dimensions (e.g. 400px width) and update the thumbnail generator `thumbWidth` constant in `scripts/generate-thumbs.js`.

5) Combine & minify CSS where possible
   - Consider minifying `style.css` and `nav.css` into a single `bundle.css` for fewer requests. Or serve gzipped/bripped versions via server.

6) Use a CDN
   - If you host images and static assets behind a CDN (Cloudflare, Fastly, S3+CloudFront), you get faster delivery and automatic caching rules.

If you want, I can:
 - Reduce thumbnail width to 400px and regenerate thumbs.
 - Provide a minified `bundle.css` and `bundle.js` (non-invasive) and update HTML to use them.
 - Provide exact server configuration snippets for Apache, Nginx, or a Cloudflare worker.


=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> origin/ertan-branch
