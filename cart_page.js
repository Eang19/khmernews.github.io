const logo=[
    {
        'logo':'./images/cafe_logo.jpg'
    }
];
var getLogo = "";
for(let i in logo){
    getLogo = `<img src="${logo[i]['logo']}" alt="">`
}
document.getElementsByClassName('logo-box')[0].innerHTML=getLogo;

// cafe menu
const hotMenu = [
    {
        'key':'Home',
        'linkpage':'./cafe.html'
    },
    {
        'key':'Menu',
        'linkpage':'./menu_page.html'
    },
    {
        'key':'Cart',
        'linkpage':''
    },
    {
        'key':'Event',
        'linkpage':''
    },
    {
        'key':'Opportunity',
        'linkpage':''
    },
    {
        'key':'About Us',
        'linkpage':''
    },
];
var getHotMenu='';
for(let i in hotMenu){
    getHotMenu +=`<li><a href="${hotMenu[i]['linkpage']}">${hotMenu[i]['key']}</a></li>`
}
document.getElementsByTagName('ul')[0].innerHTML=`<ul>${getHotMenu}</ul>`;