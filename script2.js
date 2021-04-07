const url="https://raw.githubusercontent.com/SashaKorniichuk/JS/main/json/details.json"
onload=Info();
function Info()
{
    let data=localStorage.getItem("obj");
    let obj=JSON.parse(data);
    getDetails(obj.Id,obj.Category);
}
let contacts=new Array();
function getDetails(Id,categories)
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => {
        let items = JSON.parse(xhr.response);
             let itemFilters;
            for(let index=0;index<items.length;index++)
            {
                if(items[index].id==Id)
                {
                    itemFilters=items[index];
                    console.log(itemFilters.id);
                   
                }
            }
            contacts=itemFilters.author.contacts;
            
            initInfo(itemFilters,categories);
    }
}

function initInfo(item,categories)
{
let name=document.querySelector("#name");
name.innerHTML=item.name;


let category=document.querySelector("#category");
category.innerHTML=categories;


let imgDiv=document.querySelector("#img")
let img=document.createElement("img");
img.src="./att/att/"+item.icon+".png";
img.classList.add("img2");

imgDiv.appendChild(img);


let gallery=document.querySelector("#gallery");

for(let index=0;index<item.attachments.length;index++)
{
    let div=document.createElement("div");
    div.classList.add("col-4");

    let img1=document.createElement("img");
    img1.src="./att/"+item.attachments[index]+".png";
    img1.classList.add("img2");
    img1.classList.add("pt-2");
    
    div.appendChild(img1);
   gallery.appendChild(div);
}
let description=document.querySelector("#description");
description.innerHTML=item.description;

let review=document.querySelector("#Reviews");
review.innerHTML="Reviews (0 Total)";


let buy=document.querySelector("#nameBuy");
buy.innerHTML=item.name;


let buy1=document.querySelector("#categoryBuy");
buy1.innerHTML=categories;

let price=document.querySelector("#price");
price.innerHTML="$"+item.price;;

let div=document.querySelector("#views")
let span3=document.createElement("span");
let i2=document.createElement("i");
i2.classList.add("fa");
i2.classList.add("fa-eye")
span3.appendChild(i2);
i2.classList.add("IColor")
let span4=document.createElement("span");
span4.innerHTML=" "+item.view;
span3.appendChild(span4);
div.appendChild(span3);



let div41=document.querySelector("#stars")
for(let index=0;index<item.rating;index++)
{
    let span=document.createElement("span");
    span.innerHTML="&#9733";
    div41.appendChild(span);
 }
 let span=document.createElement("span");
 span.innerHTML="("+item.voted+")";
 div41.appendChild(span);

 let Price=document.querySelector("#Price");
 Price.innerHTML="$"+item.price;;


let rate=document.querySelector("#rate");
rate.innerHTML=item.rating



let calendar=document.querySelector("#calendar");
calendar.innerHTML=item.time_deliv



let sale=document.querySelector("#sale");
sale.innerHTML=item.sales


let author=document.querySelector("#author");
author.innerHTML=item.author.name;

let location=document.querySelector("#Location");
location.innerHTML=item.author.location;

let languages=document.querySelector("#Languages");
languages.innerHTML=item.author.Lang;


let bio=document.querySelector("#bio");
bio.innerHTML=item.author.Bio;
}

function Facebook()
{
document.location.href="http://"+contacts.fb;
}
function Twitter()
{
document.location.href="http://"+contacts.twitter;
}
function Pinterest()
{
document.location.href="http://"+contacts.pinterest;
}