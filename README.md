running `docker build -t cypress-pnpm-v10 .` fails wiht following error ` > [15/23] RUN pnpm exec cypress verify:
0.878 The cypress npm package is installed, but the Cypress binary is missing.
0.878
0.878 We expected the binary to be installed here: /root/.cache/Cypress/14.0.3/Cypress/Cypress
0.878
0.878 Reasons it may be missing:
0.878
0.878 - You're caching 'node_modules' but are not caching this path: /root/.cache/Cypress
0.878 - You ran 'npm install' at an earlier build step but did not persist: /root/.cache/Cypress
0.878
0.878 Properly caching the binary will fix this error and avoid downloading and unzipping Cypress.
0.878
0.878 Alternatively, you can run 'cypress install' to download the binary again.
0.878
0.878 https://on.cypress.io/not-installed-ci-error
0.878
0.878 ----------
0.878
0.878 Platform: linux-x64 (Debian - 12.9)
0.878 Cypress Version: 14.0.3
------
Dockerfile:23
--------------------
  21 |
  22 |     # Verify Cypress installation (ensures browsers and binaries are set up)
  23 | >>> RUN pnpm exec cypress verify
  24 |
  25 |     # Default command: run Cypress in headless mode`
