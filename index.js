const brand = document.querySelector(".brand");
const brandOverlay = document.querySelector(".brandOverlay");
const brandOverlayBackground = document.querySelector(
  ".brandOverlayBackground"
);

if (brand) {
  brand.addEventListener("click", () => {
    brandOverlay.classList.toggle("active");
    brandOverlayBackground.classList.toggle("active");

    brandOverlayBackground.addEventListener("click", (e) => {
      brandOverlay.classList.remove("active");
      brandOverlayBackground.classList.remove("active");
    });
  });
}

const desktopBrand = document.querySelector(".desktopBrand");
const brandOverlayDesktop = document.querySelector(".brandOverlayDesktop");
const desktopOverlayBG = document.querySelector(".desktopOverlayBG");
let desktopBrandIsActive = false;
if (desktopBrand) {
  desktopBrand.addEventListener("click", () => {
    if (desktopBrandIsActive != true) {
      brandOverlayDesktop.classList.add("active");
      desktopOverlayBG.classList.add("active");
      desktopBrandIsActive = true;

      desktopOverlayBG.addEventListener("click", () => {
        brandOverlayDesktop.classList.remove("active");
        desktopOverlayBG.classList.remove("active");
        desktopBrandIsActive = false;
      });
    } else {
      brandOverlayDesktop.classList.remove("active");
      desktopOverlayBG.classList.remove("active");
      desktopBrandIsActive = false;
    }
  });
}


var desktopLang = document.querySelector('.desktopLang');
var desktopLangModal = document.querySelector('.desktopLangModal');
var langModal = false

if (desktopLang) {
  desktopLang.addEventListener('click', () => {
    if (langModal == false) {
      desktopLangModal.classList.add('active');
      desktopOverlayBG.classList.add('active');
      langModal = true;

      desktopOverlayBG.addEventListener('click', (e) => {
        desktopLangModal.classList.remove('active');
        e.target.classList.remove('active');
        langModal = false;

      })

    } else {
      desktopLangModal.classList.remove('active');
      desktopOverlayBG.classList.remove('active');
      langModal = false;
    }
  });

}





const menuOverlay = document.querySelector(".menuOverlay");
const hamburger = document.querySelector(".hamburger");
let menuOpen = false;

if (hamburger) {
  hamburger.addEventListener("click", () => {
    if (!menuOpen) {
      hamburger.classList.add("open");
      menuOverlay.classList.add("show");
      html.classList.add('modalActive');

      menuOpen = true;
    } else {
      hamburger.classList.remove("open");
      menuOverlay.classList.remove("show");
      html.classList.remove('modalActive');
      menuOpen = false;
    }
  });
}

const aboutLandyButton = document.querySelector(".aboutLandyButton");
const aboutLandyContent2 = document.querySelector(".aboutLandyContent2");
const aboutLandyTriangle = document.querySelector(".aboutLandyTriangle");
const aboutLandyDesktopButton = document.querySelector('.aboutLandyDesktopButton');

if (aboutLandyButton) {
  aboutLandyButton.addEventListener("click", () => {
    aboutLandyTriangle.classList.toggle("active");
    aboutLandyContent2.classList.toggle("active");
  });
}

if (aboutLandyDesktopButton) {
  aboutLandyDesktopButton.addEventListener("click", () => {
    aboutLandyDesktopButton.classList.toggle("active");
    aboutLandyContent2.classList.toggle("active");
  });
}




const prevIcon = '<img src="./images/left.png" alt="left">';
const nextIcon = '<img src="./images/right.png" alt="right">';
const owlStageOuter = $(".owl-stage-outer");
const owlNav = $(".owl-nav");

if ($("#owl-one").owlCarousel) {
  $(document).ready(function () {
    $("#owl-one").owlCarousel();
  });

  $("#owl-one").owlCarousel({

    margin: 0,
    nav: true,
    rewind: true,
    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(document).ready(function () {
    $("#owl-two").owlCarousel();
  });

  $("#owl-two").owlCarousel({
    margin: 20,
    nav: true,
    rewind: true,

    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(document).ready(function () {
    $("#owl-three").owlCarousel();
  });



};

if ($(".workSlideContainer").owlCarousel) {
  $(document).ready(function () {
    $(".workSlideContainer").owlCarousel({
      nav: true,
      margin: 0,
      items: 1,
      singleItem: true,
      stagePadding: 0,
      navText: [prevIcon, nextIcon],
      rewind: true,
      nestedItemSelector: 'item',




    });
  });

  $(document).ready(function () {
    $(".workStoryItemWrap").owlCarousel({
      nav: true,
      margin: 0,
      items: 1,
      stagePadding: 0,
      navText: [prevIcon, nextIcon],



    });
  });
};

if ($(".specSlideContainer").owlCarousel) {
  $(document).ready(function () {
    $(".specSlideContainer").owlCarousel({
      nav: true,
      margin: 0,
      items: 1,
      singleItem: true,
      stagePadding: 0,
      navText: [prevIcon, nextIcon],
      rewind: true,
      nestedItemSelector: 'item',




    });
  });
}









////////////////////////////////////////////////////////////////////
//////////////contact.html page/////////////////////////////////


var contactTabTarget = document.querySelectorAll('[data-contact-target]')
var contactTabContent = document.querySelectorAll('[data-contact-content]')


if (window.location.href.match('contact.html')) {
  window.addEventListener('load', (e) => {
    if (window.location.hash) {
      contactTabTarget.forEach(removeActive)
      contactTabContent.forEach(removeActive)
      var targetTabLoad = window.location.hash.substr(1)
      document.querySelector("[data-contact-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
      var targetTabContent = document.querySelectorAll("[data-contact-content=" + CSS.escape(targetTabLoad) + "]");
      targetTabContent.forEach(element => {
        element.classList.add('active');
      });

    }
  })

  window.addEventListener('hashchange', (e) => {
    if (window.location.hash) {
      contactTabTarget.forEach(removeActive)
      contactTabContent.forEach(removeActive)
      var targetTabLoad = window.location.hash.substr(1)
      document.querySelector("[data-contact-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
      var targetTabContent = document.querySelectorAll("[data-contact-content=" + CSS.escape(targetTabLoad) + "]");
      targetTabContent.forEach(element => {
        element.classList.add('active');
      });

    }
  })

  contactTabTarget.forEach(button => {
    button.addEventListener('click', (e) => {
      contactTabTarget.forEach(removeActive)
      contactTabContent.forEach(removeActive)
      e.currentTarget.classList.add('active');
      var targetTab = e.currentTarget.dataset.contactTarget
      var targetTabContent = document.querySelectorAll("[data-contact-content=" + CSS.escape(targetTab) + "]")
      targetTabContent.forEach(element => {
        element.classList.add('active');
      });
      history.pushState(null, null, "/contact.html#" + targetTab)




    })
  });
}











const faqTitleWrapAll = document.querySelectorAll(
  ".faqTitleWrap,.faqTitle,.faqTitleIcon"
);
const faqTitlesWrap = document.querySelectorAll(".faqTitleWrap");
const faqTitleIcon = document.querySelectorAll(".faqTitleIcon");

if (window.location.href.match('contact.html')) {
  window.addEventListener('load', () => {
    faqTitlesWrap[0].nextElementSibling.style.maxHeight = "100%";
  });
}



faqTitlesWrap.forEach(element => {
  element.addEventListener('click', (e) => {
    var content = e.currentTarget.nextElementSibling
    e.currentTarget.classList.toggle('active');
    e.currentTarget.nextElementSibling.classList.toggle('active');
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.children[1].innerHTML = "-";
      content.style.maxHeight = content.scrollHeight + "px";

    } else {
      e.currentTarget.children[1].innerHTML = "+";
      content.style.maxHeight = null;
    }

  })
});

var map1;
var map1Position = {
  lat: 35.0116,
  lng: 135.7681,
};
var map2;
var map2Position = {
  lat: 33.0116,
  lng: 131.7681,
};

function initMap() {
  map1 = new google.maps.Map(document.getElementById("map1"), {
    center: map1Position,
    zoom: 14,
  });

  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: map2Position,
    zoom: 14,
  });

  var marker1 = new google.maps.Marker({
    map: map1,
    position: map1Position,
    title: "Hello World!",
  });

  var marker2 = new google.maps.Marker({
    map: map2,
    position: map2Position,
    title: "Hello World!",
  });
}

var mapButton = document.querySelectorAll('[data-map-modal]');
var modalContainer = document.querySelector('.modalContainer');
var modalContainerWrap = document.querySelector('.modalContainerWrap');
var modalItem = document.querySelectorAll('.modalItem');
var modalItemClose = document.querySelector('.modalItemClose');

var mapButtonTarget

if (mapButton) {
  mapButton.forEach(button => {
    button.addEventListener('click', (e) => {

      modalItem.forEach(element => {
        element.classList.remove('active');
      });

      mapButtonTarget = e.target.dataset.mapModal;
      document.querySelector("." + mapButtonTarget).classList.add('active');
      modalContainerWrap.classList.add('active');
      html.classList.add("modalActive");


    })
  });
}

if (modalItemClose) {
  modalItemClose.addEventListener('click', (e) => {
    modalContainerWrap.classList.remove('active');
    html.classList.remove("modalActive");

  })
}


if (modalContainerWrap) {
  modalContainerWrap.addEventListener('click', (e) => {
    e.target.classList.remove('active');
    html.classList.remove("modalActive");
  })
}






////////////////////////////////////////////////////////////
////////////////////////design.html//////////////////////
var sliderMin
var sliderMax
let my_range

const mobileFilterSUbmitWrap = document.querySelector('.mobileFilterSUbmitWrap')
const filterMobileReset = document.querySelector('.filterMobileReset');
const filterButton = document.querySelector(".filterMobileIcon");
const mobileFilter = document.querySelector(".filter");
let filterOpen = false;
const filterCloseButton = document.querySelector(".filterOverlayClose");
var filterSliderItem = document.querySelector(".filterSliderItem");
var designCardContainer = document.querySelector(".designCardContainer");

var landAny
var landMinValue
var landMaxValue
var spaceAny
var spaceMinValue
var spaceMaxValue
var bedAny
var bedValue
var toiletAny
var toiletValue
var floorAny
var floorValue
var searchValue
var priceQuery
var landQuery
var spaceQuery
var bedQuery
var toiletQuery
var floorQuery
var searchQuery
var quickSortClick = false;
var newDesign
var soldDesign
var oneFloorDesign
var threeFloorDesign
var modernDesign
var moreBedDesign
var lessThanFourMil
var moreThanFifteenMil
var highToLowPrice
var lowToHighPrice

var filterReset = document.querySelector('.filterReset');
var sortSelect = document.querySelector(".sortingSelect")
var sortedFilter
var houseCompare = document.querySelector('.houseCompare');
var houseCompareClose = document.querySelector('.houseCompareClose');
var chooseCompare
var houseCompareArray = new Array
var designCardCompare
var designCardWishlist
var wishlistArray = new Array
var targetWish
var targetCompare 


function houseTemplate(house) {
  return `
  <div class="designCard" href="">
                    <div class="designCardThumb">
                        <img src="${house.thumb}" alt="">
                        <div class="designCardButtonWrap">
                            <img class="designCardWishlist" src="/images/design/button wishlist.svg" alt="">
                            <img class="designCardCompare" src="/images/design/button compare.svg" alt="">

                        </div>
                    </div>

                    <div class="designCardContent">
                        <div class="designCardText">
                            <p class="designCardTextTitle">${house.name}</p>
                            <span class="textDetailWrap">
                                <p>ขนาดอาคาร: ${house.buildSize[0]} x ${house.buildSize[1]}  ม.</p>
                                <p>ขนาดที่ดิน: ${house.landSize} ตร.ม.</p>
                                <p>พื้นที่ใช้สอย: ${house.useSpace} ตร.ม.</p>
                                <p>จำนวนชั้น: ${house.floor} ชั้น</p>
                            </span>
                        </div>
                        <div class="designCardIconWrap">
                            <div class="designCardIcon">
                                <div class="designIcon"><img src="/images/design/shower.png" alt=""></div>
                                <p>${house.toilet}</p>

                            </div>
                            <div class="designCardIcon">
                                <div class="designIcon"><img src="/images/design/bed.png" alt=""></div>
                                <p>${house.bed}</p>
                            </div>
                            <div class="designCardIcon">
                                <div class="designIcon"><img src="/images/design/car.png" alt=""></div>
                                <p>${house.parking}</p>
                            </div>
                        </div>
                    </div>
                    <div class="designCardPrice">
                        <p>ราคา ${house.cost}บาท</p>
                    </div>
                </div>
  
  
  
  
  
  
  
  `
}

function houseCompareTemplate(house){
  return`
  <div class="houseCompareItem">
                <img src =${house.thumb}>
                <p>Name: ${house.name}</p>
                <p>Build Size: ${house.buildSize[0]}x${house.buildSize[1]}</p>
                <p>Land Size: ${house.landSize}</p>
                <p>Use Space: ${house.useSpace}</p>
                <p>Toilet: ${house.toilet}</p>
                <p>Bed: ${house.bed}</p>
                <p>Parking: ${house.parking}</p>
                <p>Floor: ${house.floor}</p>
                <p>Cost: ${house.cost}</p>
                <p>Created: ${house.created}</p>
                <p>Sold: ${house.sold}</p>
                <p>Style: ${house.style}</p>
  </div>`
}

function createDefultCard() {
  designCardContainer.innerHTML = `${houseData.map(houseTemplate).join('')}`
}

function collectFilterValue() {

  if (houseFilter[1].value == "any") {
    landAny = true
  } else {
    landAny = false
    landMinValue = parseInt(houseFilter[1].value.split(',')[0])
    landMaxValue = parseInt(houseFilter[1].value.split(',')[1]);
  }

  if (houseFilter[2].value == "any") {
    spaceAny = true
  } else {
    spaceAny = false
    spaceMinValue = parseInt(houseFilter[2].value.split(',')[0])
    spaceMaxValue = parseInt(houseFilter[2].value.split(',')[1]);
  }

  if (houseFilter[3].value == "any") {
    bedAny = true
  } else {
    bedAny = false
    bedValue = parseInt(houseFilter[3].value);
  }
  if (houseFilter[4].value == "any") {
    toiletAny = true
  } else {
    toiletAny = false
    toiletValue = parseInt(houseFilter[4].value);
  }

  if (houseFilter[5].value == "any") {
    floorAny = true
  } else {
    floorAny = false
    floorValue = parseInt(houseFilter[5].value);
  }

  searchValue = houseFilter[6].value.toLowerCase()


};

function findAllFilter() {
  priceQuery = houseData.filter((house) => {
    return house.cost >= sliderMin && house.cost <= sliderMax
  })
  landQuery = priceQuery.filter((house) => {
    if (landAny == true) {
      return priceQuery
    } else {
      return house.landSize >= landMinValue && house.landSize <= landMaxValue
    }
  })
  spaceQuery = landQuery.filter((house) => {
    if (spaceAny == true) {
      return landQuery
    } else {
      return house.useSpace >= spaceMinValue && house.useSpace <= spaceMaxValue
    }
  })
  bedQuery = spaceQuery.filter((house) => {
    if (bedAny == true) {
      return spaceQuery
    } else {
      return house.bed == bedValue
    }
  })
  toiletQuery = bedQuery.filter((house) => {
    if (toiletAny == true) {
      return bedQuery
    } else {
      return house.toilet == toiletValue
    }
  })
  floorQuery = toiletQuery.filter((house) => {
    if (floorAny == true) {
      return toiletQuery
    } else {
      return house.floor == floorValue
    }
  })
  searchQuery = floorQuery.filter((house) => {
    if (searchValue == '') {
      return floorQuery
    } else {
      return house.lowerName.includes(searchValue);
    }
  })
  
  newDesign = searchQuery.filter((house) => {
    var y = new Date()
    if (quickeSortItem[0].classList.contains('active') == false) {
      return searchQuery
    } else {
      return house.created == y.getFullYear()
    }
  })

  soldDesign = newDesign.filter((house) => {
    if (quickeSortItem[1].classList.contains('active') == false) {
      return newDesign
    } else {
      return house.sold >= 10
    }
  })

  oneFloorDesign = soldDesign.filter((house) => {
    if (quickeSortItem[2].classList.contains('active') == false) {
      return soldDesign
    } else {
      return house.floor == 1
    }
  })

  threeFloorDesign = oneFloorDesign.filter((house) => {
    if (quickeSortItem[3].classList.contains('active') == false) {
      return oneFloorDesign
    } else {
      return house.floor == 3
    }
  });

  modernDesign = threeFloorDesign.filter((house) => {
    if (quickeSortItem[4].classList.contains('active') == false) {
      return threeFloorDesign
    } else {
      return house.style == "modern"
    }
  });

  moreBedDesign = modernDesign.filter((house) => {
    if (quickeSortItem[5].classList.contains('active') == false) {
      return modernDesign
    } else {
      return house.bed > 3
    }
  });

  lessThanFourMil = moreBedDesign.filter((house) => {
    if (quickeSortItem[6].classList.contains('active') == false) {
      return moreBedDesign
    } else {
      return house.cost < 4000000
    }
  });

  moreThanFifteenMil = lessThanFourMil.filter((house) => {
    if (quickeSortItem[7].classList.contains('active') == false) {
      return lessThanFourMil
    } else {
      return house.cost > 15000000
    }
  });

  sortedFilter = moreThanFifteenMil.sort(function (a, b) {
    if (sortSelect.value == "highLow") {
      return b.cost - a.cost
    } else if (sortSelect.value == "lowHigh") {
      return a.cost - b.cost
    }
  })
};

function createFilteredCard() {
  designCardContainer.innerHTML = `${sortedFilter.map(houseTemplate).join('')}`
}

function display12() {
  var list = sortedFilter;
  var pageList = new Array();
  var currentPage = 1;
  var numberPerPage = 12;
  var numberOfPages = Math.ceil(list.length / numberPerPage);

  document.getElementById('last').addEventListener('click', lastPage)

  document.getElementById('first').addEventListener('click', firstPage)

  document.getElementById('next').addEventListener('click', nextPage)

  document.getElementById('previous').addEventListener('click', previousPage)

  function nextPage() {
    currentPage += 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function previousPage() {
    currentPage -= 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function firstPage() {
    currentPage = 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function lastPage() {
    currentPage = numberOfPages;
    loadList();
    compareDesign();
    addToWishlist()
  }








  function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
  }

  function drawList() {
    designCardContainer.innerHTML = "";
    for (r = 0; r < pageList.length; r++) {
      designCardContainer.innerHTML = `${pageList.map(houseTemplate).join('')}`
    }
  }

  function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  }

  loadList();

}

function display24() {
  var list = sortedFilter;
  var pageList = new Array();
  var currentPage = 1;
  var numberPerPage = 24;
  var numberOfPages = Math.ceil(list.length / numberPerPage);

  document.getElementById('last').addEventListener('click', lastPage)

  document.getElementById('first').addEventListener('click', firstPage)

  document.getElementById('next').addEventListener('click', nextPage)

  document.getElementById('previous').addEventListener('click', previousPage)

  function nextPage() {
    currentPage += 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function previousPage() {
    currentPage -= 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function firstPage() {
    currentPage = 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function lastPage() {
    currentPage = numberOfPages;
    loadList();
    compareDesign();
    addToWishlist()
  }

  







  function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
  }

  function drawList() {
    designCardContainer.innerHTML = "";
    for (r = 0; r < pageList.length; r++) {
      designCardContainer.innerHTML = `${pageList.map(houseTemplate).join('')}`
    }
  }

  function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  }

  loadList();

}

function display48() {
  var list = sortedFilter;
  var pageList = new Array();
  var currentPage = 1;
  var numberPerPage = 48;
  var numberOfPages = Math.ceil(list.length / numberPerPage);

  document.getElementById('last').addEventListener('click', lastPage)

  document.getElementById('first').addEventListener('click', firstPage)

  document.getElementById('next').addEventListener('click', nextPage)

  document.getElementById('previous').addEventListener('click', previousPage)

  function nextPage() {
    currentPage += 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function previousPage() {
    currentPage -= 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function firstPage() {
    currentPage = 1;
    loadList();
    compareDesign();
    addToWishlist()
  }

  function lastPage() {
    currentPage = numberOfPages;
    loadList();
    compareDesign();
    addToWishlist()
  }








  function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
  }

  function drawList() {
    designCardContainer.innerHTML = "";
    for (r = 0; r < pageList.length; r++) {
      designCardContainer.innerHTML = `${pageList.map(houseTemplate).join('')}`
    }
  }

  function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  }

  loadList();

}

function toDisplay() {
  if (sortedFilter.length == 0) {
    designCardContainer.innerHTML = `<div class="noResult"> No Result</div>`;
  } else if (displayPerPage[0].classList.contains('active')) {
    return display12();
  } else if (displayPerPage[1].classList.contains('active')) {
    return display24();
  } else if (displayPerPage[2].classList.contains('active')) {
    return display48();
  }
};

function addToCompareArray(e){
  targetCompare = e.currentTarget.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML

  if(houseCompareArray.length==0){
    houseCompareArray.push(e.currentTarget.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML)

    showAddOneMore()
    
    


  } else if(houseCompareArray.length==1){
    houseCompareArray.push(e.currentTarget.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML);     
    houseCompare.classList.add('active');
    html.classList.add('modalActive');
    chooseCompare = houseData.filter((house)=>{
    return house.name == houseCompareArray[0] || house.name == houseCompareArray[1]
    })
    houseCompareWrap.innerHTML=`${chooseCompare.map(houseCompareTemplate).join('')}`
    }
}

function compareDesign(){
    designCardCompare = document.querySelectorAll('.designCardCompare');
    
    designCardCompare.forEach(element => {
      element.addEventListener('click',(e)=>{
        addToCompareArray(e);  
      
      })
    });
};

function showAddOneMore(){
  var x = document.querySelector('.addOneMore');

  x.classList.add('show')

  setTimeout(function(){ x.classList.remove('show') }, 3000);
}

function showAddedToWishlist(){
  var y = document.querySelector('.addedToWishlist');

  y.classList.add('show')

  setTimeout(function(){ y.classList.remove('show') }, 3000);

}

function addToWishlist(){
  designCardWishlist = document.querySelectorAll('.designCardWishlist');

  designCardWishlist.forEach(element => {
    element.addEventListener('click',(e)=>{
      targetWish = e.currentTarget.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML

      if(wishlistArray.indexOf(targetWish)===-1){
        wishlistArray.push(targetWish);
        showAddedToWishlist()
      }

      
      
    })
  });
}





var displayPerPage = document.querySelectorAll('.displayPerPage');
var houseFilter = document.querySelectorAll('.houseFilter');
var quickeSortItem = document.querySelectorAll('.quickeSortItem');
var designCardWishlist = document.querySelectorAll('.designCardWishlist')
var houseCompareWrap = document.querySelector('.houseCompareWrap');

if (window.location.href.match('design.html')) {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 40000000,
    skin: "square",
    grid: true,
    postfix: " บาท",
    decorate_both: false,
    values_separator: "  -  ",
    grid: false,
    hide_min_max: true,
    force_edges: true,
    onStart: function (data) {
      sliderMin = data.from
      sliderMax = data.to
    },
    onChange: function (data) {
      sliderMin = data.from
      sliderMax = data.to
      collectFilterValue();
      findAllFilter();
      toDisplay();
      compareDesign();
      
    },

  });
  my_range = $(".js-range-slider").data("ionRangeSlider");

  window.addEventListener('load', () => {
    collectFilterValue();
    findAllFilter();
    toDisplay();
    setTimeout(() => {
      compareDesign()
      addToWishlist()
    }, 50);
    


  });





  houseData.forEach(element => {
    element["lowerName"] = element['name'].toLowerCase()
  });

  displayPerPage.forEach(element => {
    element.addEventListener('click', (e) => {
      displayPerPage.forEach(element => {
        element.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
      collectFilterValue();
      findAllFilter();
      toDisplay();
      compareDesign()
      addToWishlist()
    })
  });

  houseFilter.forEach(element => {
    element.addEventListener('change', () => {
      collectFilterValue();
      findAllFilter();
      toDisplay();
      compareDesign();
      addToWishlist()






    })
  });

  houseFilter[6].addEventListener('keyup', () => {
    collectFilterValue();
    findAllFilter();
    toDisplay();
    compareDesign();
    addToWishlist()
  });

  quickeSortItem.forEach(element => {
    element.addEventListener('click', (e) => {
      element.classList.toggle('active');
      collectFilterValue();
      findAllFilter();
      toDisplay();
      compareDesign();
      addToWishlist()

    })
  });

  sortSelect.addEventListener('change', () => {
    collectFilterValue();
    findAllFilter();
    toDisplay();
    compareDesign();
    addToWishlist()







  })

  filterReset.addEventListener('click', () => {
    my_range.reset()
    sliderMin = my_range.old_from
    sliderMax = my_range.old_to
    houseFilter.forEach(element => {
      element.selectedIndex = 0;
      houseFilter[6].value = '';
    });

    quickeSortItem.forEach(element => {
      element.classList.remove('active');
    });


    collectFilterValue();
    findAllFilter();
    toDisplay();
    compareDesign();
    addToWishlist()
  });

  filterMobileReset.addEventListener('click', () => {
    my_range.reset()
    sliderMin = my_range.old_from
    sliderMax = my_range.old_to
    houseFilter.forEach(element => {
      element.selectedIndex = 0;
      houseFilter[6].value = '';
    });

    quickeSortItem.forEach(element => {
      element.classList.remove('active');
    });


    collectFilterValue();
    findAllFilter();
    toDisplay();
    compareDesign();
    addToWishlist()
  });

  filterButton.addEventListener("click", () => {
    if (!filterOpen) {
      mobileFilter.classList.add("showFilter");
      filterOpen = true;
    }
  });

  filterCloseButton.addEventListener("click", () => {
    if (filterOpen == true) {
      mobileFilter.classList.remove("showFilter");
      filterOpen = false;
    }
  });

  mobileFilterSUbmitWrap.addEventListener("click", () => {
    if (filterOpen == true) {
      mobileFilter.classList.remove("showFilter");
      filterOpen = false;
    }
  });

  houseCompareClose.addEventListener('click',()=>{
    houseCompareArray = [];
    houseCompare.classList.remove('active');
    html.classList.remove('modalActive');
  })

  
  







 

  





















}










/////////////////////////////////////////////////////////////
////////////////////////step.html///////////////////////////



var desktopTimeline = function () {
  let stepDesktop = document.querySelector('.stepDesktop')
  let stepStart = document.querySelector(".stepDesktopStart");
  let stepDesktopLine = document.querySelector(".stepDesktopLine");
  let stepDesktopDot = document.querySelectorAll(".stepDesktopDot")[3];
  let stepMobileDot = document.querySelectorAll(".stepDesktopDotRight")[6];
  let stepStartLength = stepStart.getBoundingClientRect().y;
  let stepDesktopDotLength = stepDesktopDot.getBoundingClientRect().y;
  let stepMobileDotLength = stepMobileDot.getBoundingClientRect().y;
  let desktopLineLength = stepDesktopDotLength - stepStartLength;
  let mobileLineLength = stepMobileDotLength - stepStartLength;


  if (window.innerWidth >= 1024) {
    stepDesktopLine.style.height = (desktopLineLength - 20) + "px";
    stepDesktop.style.height = (desktopLineLength +250) + "px";
    
    
  } else if (window.innerWidth <= 1023) {
    stepDesktopLine.style.height = (mobileLineLength - 20) + "px";
    stepDesktop.style.height = (desktopLineLength +450) + "px";
  }
}

if (window.location.href.match('step.html')) {
  window.addEventListener('load', desktopTimeline);
  window.addEventListener('resize', desktopTimeline);
}


var stepButton = document.querySelectorAll("[data-step-Button");
var stepModal = document.querySelector('.stepModal');
var stepModalClose = document.querySelector('.stepModalClose');
var stepModalItem = document.querySelectorAll('.stepModalItem')
var body = document.getElementsByTagName("BODY")[0];
var html = document.getElementsByTagName("HTML")[0];
var stepButtonTarget

stepButton.forEach(button => {
  button.addEventListener('click', (e) => {
    stepModalItem.forEach(element => {
      element.classList.remove('active');
    });
    stepModal.classList.add('active');
    html.classList.add('modalActive');
    stepButtonTarget = document.querySelector("." + e.target.dataset.stepButton);
    stepButtonTarget.classList.add('active');


  })
});
if (stepModalClose) {
  stepModalClose.addEventListener('click', () => {
    stepModal.classList.remove('active');

    body.classList.remove('active');
    stepModalItem.forEach(element => {
      element.classList.remove('active');
    });

  })

}


if (stepModal) {
  stepModal.addEventListener('click', (e) => {
    e.target.classList.remove('active');
    html.classList.remove('modalActive');

  })
}


//////////////////////////////////////////////////////////////
/////////////////////////system.html/////////////////////////
////////////////////////////////////////////////////////////
function removeActive(e) {
  e.classList.remove("active");
}

systemTabTarget = document.querySelectorAll('[data-tab-target]');
systemTabContent = document.querySelectorAll('[data-tab-content');
frameTabTarget = document.querySelectorAll('[data-frame-target');
frameTabContent = document.querySelectorAll('[data-frame-content');
specTabTarget = document.querySelectorAll('[data-spec-target');
specTabContent = document.querySelectorAll('[data-spec-content');


if (window.location.href.match('system.html')) {


  window.addEventListener('load', (e) => {
    if (window.location.hash) {
      systemTabTarget.forEach(removeActive)
      systemTabContent.forEach(removeActive)
      var targetTabLoad = window.location.hash.substr(1)

      if (targetTabLoad.includes("frame")) {
        frameTabTarget.forEach(removeActive)
        frameTabContent.forEach(removeActive)
        document.querySelector("[data-tab-target='buildContent']").classList.add('active');
        document.querySelector("#buildContent").classList.add('active');
        document.querySelector("[data-frame-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
        document.querySelector("#" + targetTabLoad).classList.add('active')


      } else if (targetTabLoad.includes("spec")) {
        specTabTarget.forEach(removeActive)
        specTabContent.forEach(removeActive)
        document.querySelector("[data-tab-target='materialContent']").classList.add('active');
        document.querySelector("#materialContent").classList.add('active');
        document.querySelector("[data-spec-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
        document.querySelector("#" + targetTabLoad).classList.add('active')


      } else {
        document.querySelector("[data-tab-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
        document.querySelector("#" + targetTabLoad).classList.add('active')
      }






    }
  })

  window.addEventListener('hashchange', (e) => {
    if (window.location.hash) {
      systemTabTarget.forEach(removeActive)
      systemTabContent.forEach(removeActive)
      var targetTabLoad = window.location.hash.substr(1)

      if (targetTabLoad.includes("frame")) {
        frameTabTarget.forEach(removeActive)
        frameTabContent.forEach(removeActive)
        document.querySelector("[data-tab-target='buildContent']").classList.add('active');
        document.querySelector("#buildContent").classList.add('active');
        document.querySelector("[data-frame-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
        document.querySelector("#" + targetTabLoad).classList.add('active')


      } else if (targetTabLoad.includes("spec")) {
        specTabTarget.forEach(removeActive)
        specTabContent.forEach(removeActive)
        document.querySelector("[data-tab-target='materialContent']").classList.add('active');
        document.querySelector("#materialContent").classList.add('active');
        document.querySelector("[data-spec-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
        document.querySelector("#" + targetTabLoad).classList.add('active')


      } else {
        document.querySelector("[data-tab-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
        document.querySelector("#" + targetTabLoad).classList.add('active')
      }






    }
  })

  systemTabTarget.forEach(button => {
    button.addEventListener('click', (e) => {
      systemTabTarget.forEach(removeActive)
      systemTabContent.forEach(removeActive)
      e.currentTarget.classList.add('active');
      var targetTab = e.currentTarget.dataset.tabTarget
      document.querySelector('#' + targetTab).classList.add('active')
      history.pushState(null, null, "/system.html#" + targetTab)




    })
  });

  frameTabTarget.forEach(button => {
    button.addEventListener('click', (e) => {
      frameTabTarget.forEach(removeActive);
      frameTabContent.forEach(removeActive);
      e.currentTarget.classList.add('active');
      var targetTab = e.currentTarget.dataset.frameTarget
      document.querySelector('#' + targetTab).classList.add('active')
      history.pushState(null, null, "/system.html#" + targetTab)
    })
  });

  specTabTarget.forEach(button => {
    button.addEventListener('click', (e) => {
      specTabTarget.forEach(removeActive);
      specTabContent.forEach(removeActive);
      e.currentTarget.classList.add('active');
      var targetTab = e.currentTarget.dataset.specTarget
      document.querySelector('#' + targetTab).classList.add('active')
      history.pushState(null, null, "/system.html#" + targetTab)
    })
  });
}

var frameSliderWrap = document.querySelector('.frameSliderWrap');
var prevSet = document.querySelector('.prevSet');
var nextSet = document.querySelector('.nextSet');
var cpDesign = document.querySelector("[data-frame-target='frameCpDesign']");
var cap = document.querySelector("[data-frame-target='frameCap']");

console.log(frameSliderWrap);
console.log(cap);
var maxLength

var findMaxLength = function () {
  if (frameSliderWrap.clientWidth >= frameSliderWrap.scrollWidth) {
    maxLength = frameSliderWrap.clientWidth - frameSliderWrap.scrollWidth
  } else if (frameSliderWrap.clientWidth < frameSliderWrap.scrollWidth) {
    maxLength = frameSliderWrap.scrollWidth - frameSliderWrap.clientWidth
  }

}
if (window.location.href.match('system.html')) {

  window.addEventListener('load', findMaxLength);
  window.addEventListener('resize', findMaxLength);

};

var checkScroll = function () {



  if (frameSliderWrap.scrollLeft <= maxLength + 1 && frameSliderWrap.scrollLeft >= maxLength - 1) {
    nextSet.classList.remove('active');
    prevSet.classList.add('active');
  } else if (frameSliderWrap.scrollLeft <= 1) {
    nextSet.classList.add('active');
    prevSet.classList.remove('active');


  }

}

var checkTouch = function () {
  if (frameSliderWrap.scrollLeft > 0) {
    prevSet.classList.add('active')
  } else {
    prevSet.classList.remove('active');
  }
  if (frameSliderWrap.scrollLeft < maxLength - 5) {
    nextSet.classList.add('active');
  } else {
    nextSet.classList.remove('active')
  }

}

if (frameSliderWrap) {
  frameSliderWrap.addEventListener('touchmove', () => {
    checkTouch();
  })
}

if (frameSliderWrap) {
  frameSliderWrap.addEventListener('mousewheel', () => {
    checkTouch();
  })
}

if (prevSet) {
  prevSet.addEventListener('click', () => {
    findMaxLength;
    frameSliderWrap.scrollBy(-1100, 0);
    setTimeout(checkScroll, 900);



  })
}

if (nextSet) {
  nextSet.addEventListener('click', () => {
    ;
    frameSliderWrap.scrollBy(1100, 0);
    setTimeout(checkScroll, 900);



  })
}









//////////////////////////////////////////////////////
//////////////////////reason.html////////////////////

var reasonTab = document.querySelectorAll('[data-reason-target]');
var reasonContent = document.querySelectorAll('[data-reason-content');

if (window.location.href.match('reason.html')) {
  window.addEventListener('load', (e) => {
    if (window.location.hash) {
      reasonTab.forEach(removeActive)
      reasonContent.forEach(removeActive)
      var targetTabLoad = window.location.hash.substr(1)
      document.querySelector("[data-reason-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
      document.querySelector("#" + targetTabLoad).classList.add('active')


    }
  })

  window.addEventListener('hashchange', (e) => {
    if (window.location.hash) {
      reasonTab.forEach(removeActive)
      reasonContent.forEach(removeActive)
      var targetTabLoad = window.location.hash.substr(1)
      document.querySelector("[data-reason-target=" + CSS.escape(targetTabLoad) + "]").classList.add('active')
      document.querySelector("#" + targetTabLoad).classList.add('active')


    }
  })



  reasonTab.forEach(button => {
    button.addEventListener('click', (e) => {
      reasonTab.forEach(removeActive)
      reasonContent.forEach(removeActive)
      e.currentTarget.classList.add('active');
      var targetTab = e.currentTarget.dataset.reasonTarget
      document.querySelector('#' + targetTab).classList.add('active')
      history.pushState(null, null, "/reason.html#" + targetTab)




    })
  });
}









///////////////////////////////////////////////////////
///////////////////////promotion.html////////////////

var promoSlider = document.querySelector('.promotionSliderWrap');
var promoPrev = document.querySelector('.promoPrev');
var promoNext = document.querySelector('.promoNext');
var promoItem = document.querySelector('.promotionItemWrap');
var maxPromoLength
var wheelDirection

var findMaxPromoLength = function () {
  if (promoSlider.clientWidth >= promoSlider.scrollWidth) {
    maxPromoLength = promoSlider.clientWidth - promoSlider.scrollWidth
  } else if (promoSlider.clientWidth < promoSlider.scrollWidth) {
    maxPromoLength = promoSlider.scrollWidth - promoSlider.clientWidth
  }
}

var checkPromoScroll = function () {



  if (promoSlider.scrollLeft <= maxPromoLength + 1 && promoSlider.scrollLeft >= maxPromoLength - 1) {
    promoNext.classList.remove('active');
    promoPrev.classList.add('active');
  } else if (promoSlider.scrollLeft <= 1) {
    promoNext.classList.add('active');
    promoPrev.classList.remove('active');


  }

}
var checkPromoTouch = function () {
  if (promoSlider.scrollLeft > 0) {
    promoPrev.classList.add('active')
  } else {
    promoPrev.classList.remove('active');
  }
  if (promoSlider.scrollLeft < maxPromoLength - 5) {
    promoNext.classList.add('active');
  } else {
    promoNext.classList.remove('active')
  }

}

if (window.location.href.match('promotion.html')) {

  window.addEventListener('load', findMaxPromoLength);
  window.addEventListener('resize', findMaxPromoLength);

};

if (promoNext) {
  promoNext.addEventListener('click', () => {
    findMaxPromoLength;
    promoSlider.scrollBy(promoItem.parentElement.clientWidth, 0);
    setTimeout(checkPromoScroll, 900);
    setTimeout(checkPromoTouch, 900);
  })
}

if (promoPrev) {
  promoPrev.addEventListener('click', () => {
    findMaxPromoLength;
    promoSlider.scrollBy(-promoItem.parentElement.clientWidth, 0);
    setTimeout(checkPromoScroll, 900);
    setTimeout(checkPromoTouch, 900);
  })
}



let start
let end
var mouseWheelEnable = true;
var wheelX;
var findWheelX = function () {
  wheelX = event.deltaX;
}

var scrollFunction = function (event) {

  findWheelX();
  if (wheelX > 0) {
    promoSlider.scrollBy(promoSlider.clientWidth, 0);

  } else if (wheelX < 0) {
    promoSlider.scrollBy(-promoSlider.clientWidth, 0);

  }
}


if (promoSlider) {
  promoSlider.addEventListener('touchstart', (event) => {
    event.preventDefault();
    start = event.changedTouches[0].screenX;
    console.log(start);
    checkPromoTouch();
  })
  promoSlider.addEventListener('touchend', (event) => {
    event.preventDefault();
    end = event.changedTouches[0].screenX;
    if (start > end) {
      promoSlider.scrollBy(promoSlider.clientWidth, 0);
      setTimeout(checkPromoTouch, 800)
      checkPromoScroll();
    } else if (start < end) {
      promoSlider.scrollBy(-promoSlider.clientWidth, 0);
      setTimeout(checkPromoTouch, 800)
      checkPromoScroll();


    }
  })
  promoSlider.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (!mouseWheelEnable) return;

    mouseWheelEnable = false;
    scrollFunction();
    setTimeout(() => mouseWheelEnable = true, 1100);
    setTimeout(checkPromoTouch, 900);



  });
}