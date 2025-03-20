"use strict";

    document.querySelector(".Add").addEventListener("click",function(e){
        e.preventDefault()
        if(document.querySelector("input").value===""){
            alert("Please enter some task")                
        }
        else{
            document.querySelector("ul").innerHTML+=`<li class="list">${document.querySelector("input").value} <span>❌</span></li>`
            document.querySelector("input").value=""
            savetask()
        }
    })

    document.querySelector("ul").addEventListener("click",function(e){
        if(e.target.tagName=="LI"){
        e.target.classList.toggle("toggle")
        savetask()
        }
        else{
        e.target.parentElement.remove()
        savetask()
        }
        
    });

    document.querySelector(".delete").addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(".listContainer").innerHTML="";
        savetask()
    })


    function savetask(){
        localStorage.setItem("data", document.querySelector(".listContainer").innerHTML)

    }

    function getTask(){
        document.querySelector(".listContainer").innerHTML= localStorage.getItem("data")
    }

    getTask()
