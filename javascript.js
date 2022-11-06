/**
 * Defines Global Variables
 */
const sectionTag = document.querySelector('.obj_issue_toc .section h3');
const sectionTag2 = document.querySelector('.obj_issue_toc .section h2');
const navAnchor = document.querySelector('.link_to_search_paper');
const fixedHeaderBar = document.querySelector('.custom-nav-bar');

/**
 * End Global Variables
 * Starts Helper Functions
 * IMPORTANT: in my js script, helper fn means a small function that I can declare separately away from the main fn that I will call this small fn in.
 */







        if (navAnchor.innerHTML===sectionTag.innerHTML || navAnchor.innerHTML===sectionTag2.innerHTML) {
            navAnchor.addEventListener('click', (event) => {
                event.preventDefault();
                sectionTag.scrollIntoView({behavior:"smooth"});
                sectionTag2.scrollIntoView({behavior:"smooth"});
            });
        }




// change header styles on scroll
window.addEventListener('scroll', () => {
    fixedHeaderBar.classList.toggle('window-scroll', window.scrollY > 50)
})
