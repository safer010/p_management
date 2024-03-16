// Author's Name: Safer Marie Pattawi
// Last Updated:Feb 15,2024
// Description: This is the  js of hamrie shop page which is the newly added feature in hamrie

let quantity1 = document.getElementById("quantity1");
let quantity2 = document.getElementById("quantity2");
let quantity3 = document.getElementById("quantity3");
let quantity4 = document.getElementById("quantity4");
let quantity5 = document.getElementById("quantity5");
let quantity6 = document.getElementById("quantity6");
let quantity7 = document.getElementById("quantity7");
let quantity8 = document.getElementById("quantity8");
let quantity9 = document.getElementById("quantity9");
let quantity10 = document.getElementById("quantity10");
let quantity11 = document.getElementById("quantity11");
let quantity12= document.getElementById("quantity12");
let quantity13 = document.getElementById("quantity13");
let quantity14 = document.getElementById("quantity14");
let quantity15= document.getElementById("quantity15");
let quantity16 = document.getElementById("quantity16");
let quantity17 = document.getElementById("quantity17");
let quantity18= document.getElementById("quantity18");
let quantity19 = document.getElementById("quantity19");
let quantity20 = document.getElementById("quantity20");
let quantity21= document.getElementById("quantity21");
let quantity22 = document.getElementById("quantity22");
let quantity23 = document.getElementById("quantity23");
let quantity24= document.getElementById("quantity24");
let quantity25 = document.getElementById("quantity25");
let quantity26 = document.getElementById("quantity26");
let quantity27= document.getElementById("quantity27");
let quantity28 = document.getElementById("quantity28");
let quantity29 = document.getElementById("quantity29");
let quantity30= document.getElementById("quantity30");

let qtyMessage1 = document.getElementById("quantity-message1")
let qtyMessage2 = document.getElementById("quantity-message2")
let qtyMessage3 = document.getElementById("quantity-message3")
let qtyMessage4 = document.getElementById("quantity-message4")
let qtyMessage5 = document.getElementById("quantity-message5")
let qtyMessage6 = document.getElementById("quantity-message6")
let qtyMessage7 = document.getElementById("quantity-message7")
let qtyMessage8 = document.getElementById("quantity-message8")
let qtyMessage9 = document.getElementById("quantity-message9")
let qtyMessage10 = document.getElementById("quantity-message10")
let qtyMessage11= document.getElementById("quantity-message11")
let qtyMessage12 = document.getElementById("quantity-message12")
let qtyMessage13= document.getElementById("quantity-message13")
let qtyMessage14= document.getElementById("quantity-message14")
let qtyMessage15= document.getElementById("quantity-message15")
let qtyMessage16= document.getElementById("quantity-message16")
let qtyMessage17= document.getElementById("quantity-message17")
let qtyMessage18= document.getElementById("quantity-message18")
let qtyMessage19= document.getElementById("quantity-message19")
let qtyMessage20= document.getElementById("quantity-message20")
let qtyMessage21= document.getElementById("quantity-message21")
let qtyMessage22= document.getElementById("quantity-message22")
let qtyMessage23= document.getElementById("quantity-message23")
let qtyMessage24= document.getElementById("quantity-message24")
let qtyMessage25= document.getElementById("quantity-message25")
let qtyMessage26= document.getElementById("quantity-message26")
let qtyMessage27= document.getElementById("quantity-message27")
let qtyMessage28= document.getElementById("quantity-message28")
let qtyMessage29= document.getElementById("quantity-message29")
let qtyMessage30= document.getElementById("quantity-message30")

let bag = localStorage.getItem ("HamrieShopBag");
let bagProduct = (bag) ? JSON.parse(bag) : [];


// 1st carousel
function getValue(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Dried Vegetables",
                   pPrice: "350",
                   pQty: quantity1.value
                  };

    if(quantity1.value <= 0)
    {
        qtyMessage1.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage1.innerHTML=""
    }

    quantity1.value=""
}

function getValue2(event)
{
    event.preventDefault();
    let products = {
                    pName: "Pellets",
                    pDetail: "Grain formula",
                    pPrice: "400",
                    pQty: quantity2.value
                   };

    if(quantity2.value <= 0)
    {
        qtyMessage2.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage2.innerHTML=""
    }

    quantity2.value=""
}

function getValue3(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Dried Fruits",
                   pPrice: "100",
                   pQty: quantity3.value
                  };

    if(quantity3.value <= 0)
    {
        qtyMessage3.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage3.innerHTML=""
    }

    quantity3.value=""
}

function getValue4(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Dried Meal Worm",
                   pPrice: "200",
                   pQty: quantity4.value
                  };

    if(quantity4.value <= 0)
    {
        qtyMessage4.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage4.innerHTML=""
    }

    quantity4.value=""
}

function getValue5(event)
{
    event.preventDefault();
    let products = {
                   pName: "Pellet",
                   pDetail: "Luxury Formula",
                   pPrice: "450",
                   pQty: quantity5.value
                  };

    if(quantity5.value <= 0)
    {
        qtyMessage5.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage5.innerHTML=""
    }

    quantity5.value=""
}

function getValue6(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Sunflower Seeds",
                   pPrice: "100",
                   pQty: quantity6.value
                  };

    if(quantity6.value <= 0)
    {
        qtyMessage6.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage6.innerHTML=""
    }

    quantity6.value=""
}

function getValue7(event)
{
    event.preventDefault();
    let products = {
                   pName: "Pellet",
                   pDetail: "Luxury Formula",
                   pPrice: "550",
                   pQty: quantity7.value
                  };

    if(quantity7.value <= 0)
    {
        qtyMessage7.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage7.innerHTML=""
    }

    quantity7.value=""
}

function getValue8(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Meal Worm",
                   pPrice: "180",
                   pQty: quantity8.value
                  };

    if(quantity8.value <= 0)
    {
        qtyMessage8.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage8.innerHTML=""
    }

    quantity8.value=""
}

function getValue9(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Freeze Dried Cheese",
                   pPrice: "300",
                   pQty: quantity9.value
                  };

    if(quantity9.value <= 0)
    {
        qtyMessage9.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage9.innerHTML=""
    }

    quantity9.value=""
}

//2nd carousel
function getValue10(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Paper Bedding",
                   pPrice: "450",
                   pQty: quantity10.value
                  };

    if(quantity10.value <= 0)
    {
        qtyMessage10.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage10.innerHTML=""
    }

    quantity10.value=""
}

function getValue11(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Natural",
                   pPrice: "200",
                   pQty: quantity11.value
                  };

    if(quantity11.value <= 0)
    {
        qtyMessage11.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage11.innerHTML=""
    }

    quantity11.value=""
}

function getValue12(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Paper Bedding",
                   pPrice: "400",
                   pQty: quantity12.value
                  };

    if(quantity12.value <= 0)
    {
        qtyMessage12.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage12.innerHTML=""
    }

    quantity12.value=""
}

function getValue13(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Hay",
                   pPrice: "200",
                   pQty: quantity13.value
                  };

    if(quantity13.value <= 0)
    {
        qtyMessage13.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage13.innerHTML=""
    }

    quantity13.value=""
}

function getValue14(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Dessert Sand",
                   pPrice: "350",
                   pQty: quantity14.value
                  };

    if(quantity14.value <= 0)
    {
        qtyMessage14.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage14.innerHTML=""
    }

    quantity14.value=""
}

function getValue15(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Reptile Sand",
                   pPrice: "500",
                   pQty: quantity15.value
                  };

    if(quantity15.value <= 0)
    {
        qtyMessage15.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage15.innerHTML=""
    }

    quantity15.value=""
}

function getValue16(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Wood Shavings",
                   pPrice: "350",
                   pQty: quantity16.value
                  };

    if(quantity16.value <= 0)
    {
        qtyMessage16.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage16.innerHTML=""
    }

    quantity16.value=""
}

function getValue17(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Paper Bedding",
                   pPrice: "450",
                   pQty: quantity17.value
                  };

    if(quantity17.value <= 0)
    {
        qtyMessage17.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage17.innerHTML=""
    }

    quantity17.value=""
}

function getValue18(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Paper Bedding",
                   pPrice: "600",
                   pQty: quantity18.value
                  };

    if(quantity18.value <= 0)
    {
        qtyMessage18.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage18.innerHTML=""
    }

    quantity18.value=""
}

function getValue19(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Aquarium Sand",
                   pPrice: "550",
                   pQty: quantity19.value
                  };

    if(quantity19.value <= 0)
    {
        qtyMessage19.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage19.innerHTML=""
    }

    quantity19.value=""
}

function getValue20(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Colored Paper Bedding",
                   pPrice: "750",
                   pQty: quantity20.value
                  };

    if(quantity20.value <= 0)
    {
        qtyMessage20.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage20.innerHTML=""
    }

    quantity20.value=""
}

function getValue21(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Play Sand",
                   pPrice: "1000",
                   pQty: quantity21.value
                  };

    if(quantity21.value <= 0)
    {
        qtyMessage21.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage21.innerHTML=""
    }

    quantity21.value=""
}

//3rd carousel
function getValue22(event)
{
    event.preventDefault();
    let products = {
                   pName: "Wheel",
                   pDetail: "Plastic Wheel",
                   pPrice: "650",
                   pQty: quantity22.value
                  };

    if(quantity22.value <= 0)
    {
        qtyMessage22.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage22.innerHTML=""
    }

    quantity22.value=""
}

function getValue23(event)
{
    event.preventDefault();
    let products = {
                   pName: "Chew Toy",
                   pDetail: "Wood Chew Toy",
                   pPrice: "80",
                   pQty: quantity23.value
                  };

    if(quantity23.value <= 0)
    {
        qtyMessage23.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage23.innerHTML=""
    }

    quantity23.value=""
}

function getValue24(event)
{
    event.preventDefault();
    let products = {
                   pName: "Wheel",
                   pDetail: "Plastic wheel",
                   pPrice: "2500",
                   pQty: quantity24.value
                  };

    if(quantity24.value <= 0)
    {
        qtyMessage24.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage24.innerHTML=""
    }

    quantity24.value=""
}

function getValue25(event)
{
    event.preventDefault();
    let products = {
                   pName: "Hideout",
                   pDetail: "Multi Chamber Hideouts",
                   pPrice: "3500",
                   pQty: quantity25.value
                  };

    if(quantity25.value <= 0)
    {
        qtyMessage25.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage25.innerHTML=""
    }

    quantity25.value=""
}

function getValue26(event)
{
    event.preventDefault();
    let products = {
                   pName: "Hideout",
                   pDetail: "Ceramic Hideout",
                   pPrice: "550",
                   pQty: quantity26.value
                  };

    if(quantity26.value <= 0)
    {
        qtyMessage26.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage26.innerHTML=""
    }

    quantity26.value=""
}

function getValue27(event)
{
    event.preventDefault();
    let products = {
                   pName: "Hideout",
                   pDetail: "Ceramic Hideout",
                   pPrice: "500",
                   pQty: quantity27.value
                  };

    if(quantity27.value <= 0)
    {
        qtyMessage27.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage27.innerHTML=""
    }

    quantity27.value=""
}

function getValue28(event)
{
    event.preventDefault();
    let products = {
                   pName: "Wheel",
                   pDetail: "Metal Mesh Wheel",
                   pPrice: "150",
                   pQty: quantity28.value
                  };

    if(quantity28.value <= 0)
    {
        qtyMessage28.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage28.innerHTML=""
    }

    quantity28.value=""
}

function getValue29(event)
{
    event.preventDefault();
    let products = {
                   pName: "Toy",
                   pDetail: "Wood Tunel",
                   pPrice: "400",
                   pQty: quantity29.value
                  };

    if(quantity29.value <= 0)
    {
        qtyMessage29.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage29.innerHTML=""
    }

    quantity29.value=""
}

function getValue30(event)
{
    event.preventDefault();
    let products = {
                   pName: "Hideout",
                   pDetail: "Wood Hideout",
                   pPrice: "600",
                   pQty: quantity30.value
                  };

    if(quantity30.value <= 0)
    {
        qtyMessage30.innerHTML="Please add at least one quantity"
    }

    else
    {
        bagProduct.push (products);
        localStorage.setItem("HamrieShopBag", JSON.stringify(bagProduct));
        qtyMessage30.innerHTML=""
    }

    quantity30.value=""
}
