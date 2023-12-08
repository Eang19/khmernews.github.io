const menu = [
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
    }
];

//menu data
var menuData = '';
      for(let i in menu){
        
         menuData +=` <li><a href="${menu[i]['linkpage']}">${menu[i]['key']}</a> </li>`;
      }
    document.getElementsByClassName('menu-box')[0].innerHTML=`<ul>${menuData}</ul>`

//home data
    const homeData = [
        {
            text:'Panda Cafee',
            text_1:'PANDA CAFE is a co-working space that was particularly designed for students who invest a lot of times on studying, doing research. Not only a cafe, but PANDA CAFE  has its  modern website which is fast, convenience, and simple to use for ordering a coffee or a drink with fast  delivery service.',
            btn:'Order Now' ,
            link_order:'./menu_page.html'
        }
       
           
    ];
    var dataInHome = '';
    for(let i in homeData){
        dataInHome+=`<h1>${homeData[i]['text']}</h1>
                     <p>${homeData[i]['text_1']}</p>
                     <button type="button" class="home-btn-order" id="btn-order"><a href="${homeData[i]['link_order']}">${homeData[i]['btn']}</a></button>`;
    }
    document.getElementsByClassName('home-body-text')[0].innerHTML = dataInHome;