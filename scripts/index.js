function showProjectInformation(projectId)
{
    const projectCheckbox = document.getElementById(projectId);
    const projects        = document.getElementsByClassName('show-project-checkbox');

    if(!projectCheckbox.checked)
    {
        for(let i = 0;i < projects.length; ++i)
        {
            if(projects[i].checked)
            {
                projects[i].click();
                break;
            }
        }

        projectCheckbox.click();
    }

    projectCheckbox.nextElementSibling.scrollIntoView(true);
}


function scrollCarousel(button, direction) //direction -> 'next'|'previous'
{
    const carousel = button.parentElement.getElementsByClassName('carousel')[0];
    const item     = carousel.children[0];
    
    if(direction === 'next')
        carousel.scrollBy({ left: item.offsetWidth, behavior: 'smooth' });
    else if(direction === 'previous')
        carousel.scrollBy({ left: -item.offsetWidth, behavior: 'smooth' });
}