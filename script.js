function addNewWEField()
{
   //console.log("Adding new field");
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");

   let weOb=document.getElementById("we");
   let weAddButtonOb=document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField()
{
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");

   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewccField()
{
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("ccField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");

   let ccOb=document.getElementById("cc");
   let ccAddButtonOb=document.getElementById("ccAddButton");

   ccOb.insertBefore(newNode, ccAddButtonOb);
}

function addNewproField()
{
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("proField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");

   let proOb=document.getElementById("pro");
   let proAddButtonOb=document.getElementById("proAddButton");

   proOb.insertBefore(newNode, proAddButtonOb);
}

function addNewskillsField()
{
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("skillsField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");

   let skillsOb=document.getElementById("skills");
   let skillsAddButtonOb=document.getElementById("skillsAddButton");

   skillsOb.insertBefore(newNode, skillsAddButtonOb);
}




//generating CV
function generateCV(id="generate")
{
   let nameField=document.getElementById("nameField").value;

   let nameT1=document.getElementById("nameT1");

   nameT1.innerHTML=nameField;

   document.getElementById("nameT2").innerHTML=nameField;


   document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

   document.getElementById("linkedT").innerHTML=document.getElementById("lField").value;

   document.getElementById("instaT").innerHTML=document.getElementById("igField").value;

   document.getElementById("fbT").innerHTML=document.getElementById("fField").value;

   document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;


   //we
   let wes=document.getElementsByClassName("weField");

   let str="";

   for(let e of wes)
   {
      str = str + `<li> ${e.value} </li>`;
   }

   document.getElementById("weT").innerHTML=str;


   //aq
   let aqs=document.getElementsByClassName("eqField");
   let str1="";
   for(let e of aqs)
   {
      str1= str1 + `<li> ${e.value} </li>`;
   }
   document.getElementById("aqT").innerHTML=str1;

   //cc
   let ccs=document.getElementsByClassName("ccField");
   let str2="";
   for(let e of ccs)
   {
      str2 = str2+ `<li> ${e.value} </li>`;
   }
   document.getElementById("ccT").innerHTML=str2;

   //skills
   let sss=document.getElementsByClassName("skillsField");
   let str3="";
   for(let e of sss)
   {
      str3 = str3 + `<li> ${e.value} </li>`;
   }
   document.getElementById("skillsT").innerHTML=str3;


   
   //pro
   let pros=document.getElementsByClassName("prosField");
   let str4="";
   for(let e of pros)
   {
      str4 = str4+ `<li> ${e.value} </li>`;
   }
   document.getElementById("proT").innerHTML=str2;


   //setting profile picture
   let file=document.getElementById("imgField").files[0];
   console.log(file);
   let reader=new FileReader();
   reader.readAsDataURL(file);
   console.log(reader.result);

   //set image to template
   reader.onloadend=function()
   {
      document.getElementById("imgT").src=reader.result;
   };



   document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-template").style.display='block';

}

   //print cv
   function printCV()
   {
      window.print();
   }




