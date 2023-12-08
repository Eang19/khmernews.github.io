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
var getHotMenu='';
for(let i in hotMenu){
    getHotMenu +=`<li><a href="${hotMenu[i]['linkpage']}">${hotMenu[i]['key']}</a></li>`
}
document.getElementsByTagName('ul')[0].innerHTML=`<ul>${getHotMenu}</ul>`;

// cafe category
const categories = [
    {
        'cafe_img':'./images/hot.png',
        'cafe_name':'Americano',
        'cafe_price':'2',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe_img':'./images/hot.png',
        'cafe_name':'Cappuccino',
        'cafe_price':'3',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe_img':'./images/hot.png',
        'cafe_name':'Americano',
        'cafe_price':'2',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe_img':'./images/hot.png',
        'cafe_name':'Cappuccino',
        'cafe_price':'3',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe_img':'./images/hot.png',
        'cafe_name':'Americano',
        'cafe_price':'2',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe_img':'./images/hot.png',
        'cafe_name':'Cappuccino',
        'cafe_price':'3',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe_img':'./images/hot.png',
        'cafe_name':'Americano',
        'cafe_price':'2',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
    {
        'cafe_img':'./images/hot.png',
        'cafe_name':'Cappuccino',
        'cafe_price':'3',
        'btn-addto-cart':'Add to Cart',
        'link-btn':''
    },
];
var getCategories ='';
for(let i in categories){
    getCategories += ` <div class="col-md-3">
                        <div class="sub-col">
                           <center>
                               <div class="hot-img"> <img src="${categories[i]['cafe_img']}" alt=""></div>
                           </center>
                           <div class="hot-text">
                               <p>${categories[i]["cafe_name"]}</p>
                               <p>Price: ${categories[i]['cafe_price']} $</p>
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

const search=async()=>{
    const respone= await fetch(url);
    const dataApi = await respone.json();
    const list = [...new Set(dataApi.map((item)=>{
        return item;
    }))];
    document.getElementById('searchItem').addEventListener('cafe-name', (e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = list.filter((item)=>{
            return item.cafe_name.toLowerCase().includes(searchData);
        });
        desplayItem(filterData);
    });
    const desplayItem=((item)=>{
        document.getElementById('root').innerHTML= item.map((item)=>{
            const{cafe_img, cafe_name, cafe_price, }=item;
            return(`<div class="col-md-3">
                     <div class="sub-col">
                        <center>
                            <div class="hot-img"> <img src="${cafe_img}" alt=""></div>
                        </center>
                        <div class="hot-text">
                            <p>${cafe_name}</p>
                            <p>Price: ${cafe_price} $</p>
                         </div>
                     <button type="button" class="btn-addtocart">${categories[i]['btn-addto-cart']}</button>
                     </div>
                 </div>`)
        })
    })
}