
const url="https://raw.githubusercontent.com/SashaKorniichuk/JS/main/json/categories%20(1).json";
const url2="https://raw.githubusercontent.com/SashaKorniichuk/JS/main/json/products.json";
function Works()
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    
    xhr.send();

    xhr.onload = () => {
        let items = JSON.parse(xhr.response);
        
           initBlock(items.data);
         console.log(items);
    }
}
function initBlock(data)
{
    DeleteWorks();
    let li=document.querySelector("#work");
    li.style.position="absolute";
    li.style.zIndex="10";
    li.classList.add("block");
   
    let div = document.createElement("div");
    div.id="child1";
    div.classList.add("row");
    let col1 = document.createElement("div");
    col1.classList.add("col-12");
    col1.innerText="All Categories";
    col1.classList.add("text11");
    col1.classList.add("m-3");
    
    col1.style.fontSize="20px";
    div.appendChild(col1);


    let div2=document.createElement("div");
    div2.id="child2";
    div2.classList.add("row");
    div2.classList.add("justify-content-between");
    div2.classList.add("text-left");
   
     for(let index=1;index<data.length;index++)
     {
         let col = document.createElement("div");
         col.classList.add("col-5");
         col.classList.add("text-left")
         col.classList.add("text11");
         col.classList.add("ml-2");
         col.classList.add("mb-2");

         col.innerHTML=data[index].name;
         div2.appendChild(col);

      }
    li.appendChild(div);
    li.appendChild(div2);
}

function DeleteWorks()
{ 
    let li=document.querySelector("#work");
    while(li.firstChild)
    {
        li.removeChild(li.firstChild);

    }
}

onload=function(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url2);
    xhr.send();
    xhr.onload = () => {
        let items = JSON.parse(xhr.response);
        
           initCard(items.data);
         console.log(items);
    }
}

function initCard(items)
{
 items.length=items.length-1;
   let cards=items.map(item=>{
       let div=document.createElement("div");
      // div.classList.add("card");
       div.classList.add("col-xl-2");
       div.classList.add("col-lg-2");
       div.classList.add("col-md-5");
       div.classList.add("col-sm-5");
       div.classList.add("p-1");
       
      


       let divFinaly=document.createElement("div");
       divFinaly.classList.add("cardBox");
       divFinaly.classList.add("card");
       divFinaly.classList.add("p-2");
       divFinaly.style.height="100%";
      
       
       let img=document.createElement("img");
       img.classList.add("card-img-top");
       img.classList.add("img");
       
       img.src="./att/att/"+item.icon+".png";
       

       let hr2=document.createElement("hr");
       hr2.classList.add("m-0");

       let div2=document.createElement("div");
       
       div2.innerHTML=item.name;
       div2.style.height="100%";

       div2.classList.add("text12");
       let hr=document.createElement("hr");
       hr.classList.add("m-0");

       let div3=document.createElement("div");
       div3.classList.add("row");
       div3.classList.add("justify-content-between");
       div3.classList.add("p-1");
       div3.classList.add("pr-3");
       div3.classList.add("pl-3");


       let div31=document.createElement("col-6");
       let span3=document.createElement("span");
       let i2=document.createElement("i");
       i2.classList.add("fa");
       i2.classList.add("fa-eye")
       span3.appendChild(i2);
       let span4=document.createElement("span");
       span4.innerHTML=item.view;
       span3.appendChild(span4);
       div31.appendChild(span3);
       div3.appendChild(div31);

       let div32=document.createElement("col-6");
       let span5=document.createElement("span");
       span5.innerHTML="$"+item.price+".00";
       div32.appendChild(span5);
       div3.appendChild(div32);

       
       
       let div4=document.createElement("div");
       div4.classList.add("row");
       div4.classList.add("justify-content-between");
       div4.classList.add("p-1");
       div4.classList.add("pr-3");
       div4.classList.add("pl-3");
       let div41=document.createElement("col-6");
       
       for(let index=0;index<item.rating;index++)
       {
           let span=document.createElement("span");
           span.innerHTML="&#9733";
           div41.appendChild(span);
        }
        let span=document.createElement("span");
        span.innerHTML="("+item.voted+")";
        div41.appendChild(span);
        
        let div42=document.createElement("col-6");
        
        let span2=document.createElement("span");
        let i=document.createElement("i");
        i.classList.add("fa");
        i.classList.add("fa-save")
        span2.appendChild(i);

        div42.appendChild(span2);


       div4.appendChild(div41); 
       div4.appendChild(div42); 

       let div5=document.createElement("div");
       div5.classList.add("row");
       let div51=document.createElement("div");
       div51.classList.add("col-12");
       div51.innerHTML=item.author;
       div5.appendChild(div51);



       divFinaly.appendChild(img);
       divFinaly.appendChild(div2);
       divFinaly.appendChild(hr);
       divFinaly.appendChild(div5);
       divFinaly.appendChild(hr2);
       divFinaly.appendChild(div3);
       divFinaly.appendChild(div4); 
       div.appendChild(divFinaly);
       return div;
   });
   cards.forEach(element => {
    document.querySelector("#all").appendChild(element);
});
}
