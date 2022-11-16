/**
 * Defines Global Variables
 */
const sectionTag = document.querySelector('.obj_issue_toc .section h3');
const sectionTag2 = document.querySelector('.obj_issue_toc .section h2');
const mainSections = document.querySelectorAll('.journals h3 a');
const navAnchor = document.querySelector('.link_to_search_paper');
const navAnchor2 = document.querySelector('.link_to_essd');
const navAnchor3 = document.querySelector('.link_to_archive');
const navAnchor4 = document.querySelector('.link_to_resourceeding');
const fixedHeaderBar = document.querySelector('.custom-nav-bar');

/**
 * End Global Variables
 * Starts Helper Functions
 * IMPORTANT: in my js script, helper fn means a small function that I can declare separately away from the main fn that I will call this small fn in.
 */

        if (navAnchor.innerHTML===sectionTag.innerHTML) {
            navAnchor.addEventListener('click', () => {
                sectionTag.scrollIntoView();
            });
        } else if (navAnchor.innerHTML===sectionTag2.innerHTML) {
            navAnchor.addEventListener('click', () => {
                sectionTag2.scrollIntoView();
            });
        } else {
            navAnchor.addEventListener('click', () => {
                navAnchor.href = '#article-862';
                navAnchor.href = '#article-875';
                navAnchor.href = '#article-618';
            });
        }




// change header styles on scroll
window.addEventListener('scroll', () => {
    fixedHeaderBar.classList.toggle('window-scroll', window.scrollY > 50)
})


// navigation bar for main page
for (const section of mainSections) {
    if (navAnchor2.getAttribute('data-navigation')===section.innerText) {
        navAnchor2.addEventListener('click', () => {
            section.scrollIntoView();
        });
    }
}

for (const section of mainSections) {
    if (navAnchor3.getAttribute('data-navigation')===section.innerText) {
        navAnchor3.addEventListener('click', () => {
            section.scrollIntoView();
    });
}
}

for (const section of mainSections) {
    if (navAnchor4.getAttribute('data-navigation')===section.innerText) {
        navAnchor4.addEventListener('click', () => {
            section.scrollIntoView();
        });
    }
}
