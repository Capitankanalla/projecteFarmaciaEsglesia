const footerScriptUrl = document.currentScript?.src;

if (!footerScriptUrl) {
    throw new Error('No s’ha pogut determinar la ruta de footer.js.');
}

const projectRootUrl = new URL('../../', footerScriptUrl);
const footerStylesheet = document.createElement('link');
footerStylesheet.rel = 'stylesheet';
footerStylesheet.href = new URL('assets/css/footer.css', projectRootUrl);
document.head.appendChild(footerStylesheet);

const COOKIE_CONSENT_KEY = 'cookieConsent';

fetch(new URL('html/footer.html', projectRootUrl))
    .then(response => {
        if (!response.ok) {
            throw new Error(`No s’ha pogut carregar html/footer.html: ${response.status}`);
        }
        return response.text();
    })
    .then(html => {
        document.body.insertAdjacentHTML('beforeend', html);

        const year = document.getElementById('currentYear');
        if (year) {
            year.textContent = new Date().getFullYear();
        }

        if (window.location.hash) {
            document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
                ?.scrollIntoView();
        }

        const cookieBanner = document.getElementById('cookie-banner');
        const cookieAccept = document.getElementById('cookie-accept');
        const cookieReject = document.getElementById('cookie-reject');

        if (!cookieBanner || !cookieAccept || !cookieReject) {
            throw new Error('Falten elements necessaris del banner de cookies al footer.');
        }

        const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
        cookieBanner.hidden = savedConsent === 'accepted' || savedConsent === 'rejected';

        const saveConsent = consent => {
            localStorage.setItem(COOKIE_CONSENT_KEY, consent);
            cookieBanner.hidden = true;
        };

        cookieAccept.addEventListener('click', () => saveConsent('accepted'));
        cookieReject.addEventListener('click', () => saveConsent('rejected'));
    })
    .catch(error => {
        console.error('Error carregant o inicialitzant el footer:', error);
    });
