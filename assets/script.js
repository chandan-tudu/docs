const rootEl = document.documentElement;
const bodyEl = document.querySelector('body');
const headEl = document.querySelector('head');
const header = document.querySelector('.header');
const footer = document.getElementById('footer');

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

const gadsJS = createEl('script', {
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8278722404316022',
    crossorigin:'anonymous'
});

headEl.insertAdjacentElement('beforeend', gadsJS);


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
    href:'https://www.devbabu.com/docs/index.html'
});
logo.innerText = 'DevBabu.Com';

const themeBtn = createEl('button', { class: 'theme-switch' });

const searchForm = createEl('form',{
    method:'GET',
    class:'searchForm',
    action:'https:www.devbabu.com/'
});

const searchInput = createEl('input',{
    type:'search',
    name:'s',
    required:true,
    autocomplete:'off',
    placeholder:'Search...'
});

const searchSubmit = createEl('input',{
    type:'submit',
    value:'Search'
});

searchForm.appendChild(searchInput)
searchForm.appendChild(searchSubmit)
themeBtn.innerHTML = moon;
navbar.appendChild(logo);
navbar.appendChild(searchForm)
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

// GDPR Consent

if(document.cookie.indexOf('DevBDocsCookie=1')){
    const consentDiv = createEl('div',{
        class:'gdpr-msg'
    });
    const privacyLink = createEl('a',{
                href:'https://www.devbabu.com/privacy-policy/'
            });
            privacyLink.innerText = 'Privacy'
            const acceptBtn = createEl('button')
            acceptBtn.innerText = "Accept"
            acceptBtn.addEventListener('click', () => {
                document.cookie = "DevBDocsCookie=1; max-age=" + 60*60*24*30;
                if(document.cookie){
                    consentDiv.style.display = "none";
                }else{
                    alert("Cookie Can't be set!");
                }
            })

    consentDiv.innerText = "We use cookies to ensure that we give you the best experience on our website.";
    consentDiv.appendChild(privacyLink);
    consentDiv.appendChild(acceptBtn);
    bodyEl.insertAdjacentElement('beforeend', consentDiv);
}


if(footer){
    const footerList = createEl('ul', { 
        class: 'footer-list',
    });
    const footerLinks = {
        about:'https://www.devbabu.com/about-us/',
        contact:'https://www.devbabu.com/contact-us/',
        privacy:'https://www.devbabu.com/privacy-policy/'
    }

    for (const key in footerLinks) {
        const li = createEl('li')
        const link = createEl('a',{
            href:footerLinks[key]
        });
        link.innerText = key.toUpperCase()
        li.appendChild(link)
        footerList.appendChild(li)
    }

    footer.insertAdjacentElement('afterbegin',footerList)
    
}