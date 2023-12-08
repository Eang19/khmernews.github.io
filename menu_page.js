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
const menuPage = [
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
        'linkpage':'./cart_page.html'
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
var getMenuPage='';
for(let i in menuPage){
    getMenuPage +=`<li><a href="${menuPage[i]['linkpage']}">${menuPage[i]['key']}</a></li>`
}
document.getElementsByTagName('ul')[0].innerHTML=`<ul>${getMenuPage}</ul>`;

const drinkType = [
    {
        'drink':'Hot Drink'
    },
    {
        'drink':'Ice Drink'
    },
    {
        'drink':'Frape Drink'
    }
];
var getdrinkType = "";
for(let i in drinkType){
    getdrinkType += `<th><strong>${drinkType[i]['drink']}</strong></th>`
}
document.getElementsByTagName('tr')[0].innerHTML=`<tr>${getdrinkType}</tr>`;

//hot drink
const drink = [
    {
        'cafe':'Hot coffee is one of the most famous drink in PANDA CAFE. There are various of different flavors that you are able to choose.',
        'image':'./images/hot.png'
    },
    {
        'cafe':'Ice coffee is the most supported drink.  Test it to experience a unique flavor from our CAFE. Different types of Ice coffee are available according to your preferences.',
        'image':'./images/ices.png'
    },
    {
        'cafe':'Frape coffee is a tactic of our CAFE that we try to do in order to help those who  are difficult to drink coffee. We add several ingredients that you will enjoy.',
        'image':'./images/frape.png'
    }
   
];
var getDrink = '';
for(let i in drink){
    getDrink += ` <td>
                     <div class="drink">
                         <div class="menu-textbox">
                            <p>${drink[i]['cafe']}</p>
                         </div>
                         <div class="menu-imgbox">
                            <img src="${drink[i]['image']}" alt="" >
                         </div>
                      </div>
                  </td> `
}
document.getElementsByTagName('tr')[1].innerHTML=`<tr>${getDrink}</tr>`;

//button order
const order = [
    {
        'text':'Get more',
        'getmore-link':'./hot_cafe.html'
    },
    {
        'text':'Get more',
        'getmore-link':'./ice_cafe.html'
    },
    {
        'text':'Get more',
        'getmore-link':''
    }
]
var getOrder = '';
for(let i in order){
    getOrder +=`<td>
                    <br>
                    <button><a href="${order[i]['getmore-link']}">${order[i]['text']}</a></button>
                </td>`
}
document.getElementsByTagName('tr')[2].innerHTML=`<tr>${getOrder}</tr>`;

//footer
const bottomPage = [
    {
        'h3':'Contact Us',
        'contact-social':'',
        'label':''
    },
    {
        'h3':'',
        'contact-social':'081012345',
        'label':'<i class="fa-solid fa-phone fa-xl"></i>'
    },
    {
        'h3':'',
        'contact-social':'https://www.facebook.com/sreyleang.thong.50',
        'label':'<i class="fa-brands fa-facebook fa-xl"></i>'
    },
    {
        'h3':'',
        'contact-social':'https://www.instagram.com/sreyleangthong/',
        'label':'<i class="fa-brands fa-instagram fa-xl"></i>'
    }
];
var getFooter = '';
for(let i in bottomPage){
    getFooter +=` <li><h3>${bottomPage[i]['h3']}</h3></li>
                  <li><a target="_blank" href="${bottomPage[i]['contact-social']}" >${bottomPage[i]['label']} ${bottomPage[i]['contact-social']} </a></li>`
}
document.getElementsByClassName('footer')[0].innerHTML=`<div class="footer">
                                                           <div class="row">
                                                              <div class="cols-md-4">
                                                                  <ul> ${getFooter} </ul>
                                                               </div>
                                                           </div>
                                                        </div>`;