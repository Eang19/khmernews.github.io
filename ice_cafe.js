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
const iceMenu = [
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
var getIceMenu='';
for(let i in iceMenu){
    getIceMenu +=`<li><a href="${iceMenu[i]['linkpage']}">${iceMenu[i]['key']}</a></li>`
}
document.getElementsByTagName('ul')[0].innerHTML=`<ul>${getIceMenu}</ul>`;

// cafe category
const categories = [
    {
        'cafe-img':'./images/ices.png',
        'cafe-name':'Ice Latte',
        'cafe-price':'2',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe-img':'./images/ices.png',
        'cafe-name':'Ice Latte',
        'cafe-price':'3',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe-img':'./images/ices.png',
        'cafe-name':'Ice Latte',
        'cafe-price':'2',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe-img':'./images/ices.png',
        'cafe-name':'Ice Latte',
        'cafe-price':'3',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe-img':'./images/ices.png',
        'cafe-name':'Ice Latte',
        'cafe-price':'2',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe-img':'./images/ices.png',
        'cafe-name':'Ice Latte',
        'cafe-price':'3',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe-img':'./images/ices.png',
        'cafe-name':'Ice Latte',
        'cafe-price':'2',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe-img':'./images/ices.png',
        'cafe-name':'Ice Latte',
        'cafe-price':'3',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
];
var getCategories ='';
for(let i in categories){
    getCategories += ` <div class="col-md-3">
                        <div class="sub-col">
                           <center>
                               <div class="hot-img"> <img src="${categories[i]['cafe-img']}" alt=""></div>
                           </center>
                           <div class="hot-text">
                               <p>${categories[i]["cafe-name"]}</p>
                               <p>Price: ${categories[i]['cafe-price']} $</p>
                            </div>
                        <button type="button" class="btn-addtocart">${categories[i]['btn-addto-cart']}</button>
                        </div>
                    </div>`
}
document.getElementsByClassName('row')[0].innerHTML= `<div class="row">${getCategories}</div>`;

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

