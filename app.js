const tabs = document.querySelectorAll('.tab_btn');
const all_contents = document.querySelectorAll('.content');


tabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');



all_contents.forEach(content=>{content.classList.remove('active')});
        all_contents[index].classList.add('active');
    })
})


