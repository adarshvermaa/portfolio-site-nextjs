"use client";

import { useEffect } from "react";

export function DevToolsHider() {
    useEffect(() => {
        // Nuke it from the DOM
        const hideDevTools = () => {
            // Selectors for various Next.js versions
            const selectors = [
                '[data-nextjs-toast]',
                '[data-nextjs-toast-wrapper]',
                '[data-nextjs-dev-tools]',
                '.nextjs-toast-errors-parent',
                '#next-route-announcer',
                'nextjs-portal', // Shadow host
            ];

            selectors.forEach((selector) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach((el) => {
                    el.remove(); // Hard remove
                });
            });

            // Shadow DOM handling (The underlying tech often uses Shadow DOM)
            // This is harder to select, but we can try to find the container
            const shadowHosts = document.querySelectorAll('body > div');
            shadowHosts.forEach((host) => {
                if (host.shadowRoot) {
                    // If it's a shadow root attached by Next.js (often has specific styles)
                    // We can't know for sure, but we can try to hide known shadow internals
                    // Or just hide the host if it's the specific dev tools look
                    if (host.innerHTML.includes('nextjs') || host.shadowRoot.innerHTML.includes('nextjs')) {
                        host.remove();
                    }
                }
            });
        };

        // Run immediately
        hideDevTools();

        // Run on mutations (if it gets re-added)
        const observer = new MutationObserver((mutations) => {
            hideDevTools();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // Inject strong CSS style
        const style = document.createElement('style');
        style.innerHTML = `
            [data-nextjs-toast],
            [data-nextjs-toast-wrapper],
            div:where([class*="nextjs-toast"]),
            div:where([class*="nextjs-dev"]),
            nextjs-portal {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
                width: 0 !important;
                height: 0 !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            observer.disconnect();
            style.remove();
        };
    }, []);

    return null;
}
