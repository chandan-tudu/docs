const rootEl = document.documentElement;
const bodyEl = document.querySelector('body');
const headEl = document.querySelector('head');
const header = document.querySelector('.header');

const moon =
    '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const sun =
    '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle fill="currentColor" cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
const createEl = (type, attr = {}) => {
    const el = document.createElement(type);
    for (i in attr) {
        el.setAttribute(i, attr[i]);
    }
    return el;
};
// Load Scripts
(function(){
    const findPreEl = document.querySelector("pre[class*='language-']");
    if (findPreEl) {
        const prismScript = createEl('script', {
            src: 'https://cdn.jsdelivr.net/gh/chandan-tudu/docs@master/assets/prism.js',
        });
        const prismStyle = createEl('link', {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/gh/chandan-tudu/docs@master/assets/prism.min.css',
        });
    
        headEl.insertAdjacentElement('beforeend', prismStyle);
        bodyEl.insertAdjacentElement('beforeend', prismScript);
    }

    const gTag = createEl('script',{
        async:true,
        src:'https://www.googletagmanager.com/gtag/js?id=G-1EGRP1HSLV'
    });
    const gTagCode = createEl('script',{
        src:'https://cdn.jsdelivr.net/gh/chandan-tudu/docs@master/assets/analytics.js'
    });
    bodyEl.insertAdjacentElement('beforeend', gTag);
    bodyEl.insertAdjacentElement('beforeend', gTagCode);
})();

const navbar = createEl('div', {
    class: 'navbar',
});

const logo = createEl('a', { 
    class: 'logo',
    href:'https://www.devbabu.com'
});
logo.innerText = 'DevBabu.Com';

const themeBtn = createEl('button', { class: 'theme-switch' });
themeBtn.innerHTML = moon;
navbar.appendChild(logo);
navbar.appendChild(themeBtn);
header.appendChild(navbar);

const changeTheme = () => {
    if (rootEl.hasAttribute('dark-theme')) {
        rootEl.toggleAttribute('dark-theme');
        localStorage.setItem('page-theme', 'light');
        themeBtn.innerHTML = moon;
        return;
    }
    rootEl.toggleAttribute('dark-theme');
    localStorage.setItem('page-theme', 'dark');
    themeBtn.innerHTML = sun;
};

if (localStorage.getItem('page-theme') === 'dark') {
    rootEl.setAttribute('dark-theme', true);
    themeBtn.innerHTML = sun;
}
themeBtn.addEventListener('click', changeTheme);
