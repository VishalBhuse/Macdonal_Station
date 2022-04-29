

    let order = document.getElementById('order').addEventListener('click',getOrder);
    
    function checkstatus(){
        return true;
    }

    function getOrder(e)
    {
        event.preventDefault()
        
        const myPromise  = new Promise(function(resolve,reject){
            
        let status  = false;
        
        // let time = Math.random() * 10 * 1000;

        setTimeout(function(){
            status = checkstatus();
            if(status == true)
            {
                resolve("Order is confirmed..");
            }
            else
            {
                reject("Order is not confiremd");
            }
            
        },500)
        
    });
    
    myPromise
    .then(function(res){
        console.log('res:', res);

        let ids = Math.floor(Math.random() * 10000);
        console.log('ids:', ids)
        document.querySelector('.orders').innerHTML="Order ID <br>"+ids;

        
       let a1 = document.getElementById("item1").checked;
       let a2 = document.getElementById("item2").checked;
       let a3 = document.getElementById("item3").checked;
       let a4 = document.getElementById("item4").checked;
       let a5 = document.getElementById("item5").checked;
       let a6 = document.getElementById("item6").checked;
       console.log(a1,a2,a3,a4,a5,a6);

       let b1 = b2 = b3 = b4 = b5 =b6= false;

if (a1) {
  console.log("a1");
  let time = Math.random() * 10 * 1000;

  setTimeout(function () {
    b1 = true;
    b2 = false;
    b3 = false;
    b4 = false;
    b5 = false;
    b6 = false;
    displadata();
  }, time);
}

if (a2) {
  console.log("a2");

  let time = Math.random() * 10 * 1000;

  setTimeout(function () {
    b1 = false;
    b2 = true;
    b3 = false;
    b4 = false;
    b5 = false;
    b6 = false;

    displadata();
  }, time);
}

if (a3) {
  console.log("a3");

  let time = Math.random() * 10 * 1000;

  setTimeout(function () {
    b1 = false;
    b2 = false;
    b3 = true;
    b4 = false;
    b5 = false;
    b6 = false;

    displadata();
  }, time);
}

if (a4) {
  console.log("a4");

  let time = Math.random() * 10 * 1000;

  setTimeout(function () {
    b1 = false;
    b2 = false;
    b3 = false;
    b4 = true;
    b5 = false;
    b6 = false;

    displadata();
  }, time);
}

if (a5) {
  console.log("a5");

  let time = Math.random() * 10 * 1000;

  setTimeout(function () {
    b1 = false;
    b2 = false;
    b3 = false;
    b4 = false;
    b5 = true;
    b6 = false;

    displadata();
  }, time);
}

if (a6) {
  console.log("a6");

  let time = Math.random() * 10 * 1000;

  setTimeout(function () {
    b1 = false;
    b2 = false;
    b3 = false;
    b4 = false;
    b5 = false;
    b6 = true;

    displadata();
  }, time);
}



       const displadata = () =>{

           if(b1){
               console.log("b1")
               let h1 = document.querySelector('#callname').innerText = "Your Pizza is Ready.";
               document.getElementById("imgss1").style.display = "block";
            document.getElementById("imgss2").style.display = "none";
            document.getElementById("imgss3").style.display = "none";
            document.getElementById("imgss4").style.display = "none";
            document.getElementById("imgss5").style.display = "none";
            document.getElementById("imgss6").style.display = "none";
           }
          
           if(b2){
               console.log("b2")
               let h1 = document.querySelector('#callname').innerText = "Your Momos is Ready.";
               document.getElementById("imgss1").style.display = "none";
            document.getElementById("imgss2").style.display = "block";
            document.getElementById("imgss3").style.display = "none";
            document.getElementById("imgss4").style.display = "none";
                document.getElementById("imgss5").style.display = "none";   
                document.getElementById("imgss6").style.display = "none";
        }
          
            if(b3){
                console.log("b3")
               let h1 = document.querySelector('#callname').innerText = "Your Samosa is Ready.";
               document.getElementById("imgss1").style.display = "none";
            document.getElementById("imgss2").style.display = "none";
            document.getElementById("imgss3").style.display = "block";
            document.getElementById("imgss4").style.display = "none";
            document.getElementById("imgss5").style.display = "none";   
            document.getElementById("imgss6").style.display = "none";
        }
          
            if(b4){
                console.log("b4")
               let h1 = document.querySelector('#callname').innerText = "Your Pav Bhaji is Ready.";
               document.getElementById("imgss1").style.display = "none";
            document.getElementById("imgss2").style.display = "none";
            document.getElementById("imgss3").style.display = "none";
            document.getElementById("imgss4").style.display = "block";
            document.getElementById("imgss5").style.display = "none";  
            document.getElementById("imgss6").style.display = "none";
         }
           
           
            if(b5){
                console.log("b5")
               let h1 = document.querySelector('#callname').innerText = "Your Nuddles is Ready.";
               document.getElementById("imgss1").style.display = "none";
            document.getElementById("imgss2").style.display = "none";
            document.getElementById("imgss3").style.display = "none";
            document.getElementById("imgss4").style.display = "none";
            document.getElementById("imgss5").style.display = "block"; 
            document.getElementById("imgss6").style.display = "none";
          }
         
         
            if(b6){
                console.log("b6")
               let h1 = document.querySelector('#callname').innerText = "Your Roll is Ready.";
               document.getElementById("imgss1").style.display = "none";
            document.getElementById("imgss2").style.display = "none";
            document.getElementById("imgss3").style.display = "none";
            document.getElementById("imgss4").style.display = "none";
            document.getElementById("imgss5").style.display = "none";
            document.getElementById("imgss6").style.display = "block";           }
       }
       


    })
    .catch(function(err){
        console.log('err:', err)
    })
    
    
}