function submit(event){
    event.preventDefault();
     retrieveData();
    
    readingDataFromLocalStorage( );
   
  }
  let btn1= document.getElementById("btn")
  btn1.addEventListener('click',submit)
  var delete1 = document.getElementById("tbutton")
  delete1.addEventListener("click",()=>{
    localStorage.clear()
    document.getElementById("temail").textContent = '';
    document.getElementById("tname").textContent ='';
  })
  
  
  
  function retrieveData(){
  
    var mail1 = document.getElementById("email").value;
    var name1 = document.getElementById("name").value;
    localStorage.setItem("Email",mail1)
    localStorage.setItem("Name",name1)
   
  }
  
   function readingDataFromLocalStorage( data){
    
   var email = localStorage.getItem("Email");
  var name = localStorage.getItem("Name");
     document.getElementById("temail").textContent = email;
    document.getElementById("tname").textContent=name;
  }