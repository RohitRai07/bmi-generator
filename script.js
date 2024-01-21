const form = document.querySelector("form")
//  now when we submit form woh two types se submit hota hai(form ka action) post or get & when it submits jo value hai woh ya toh URl ya fir Server ke pass jaati hai
// & hume usko stop karna hoga because hum server par toh bhej nahi rahe  so jo bhi default action hai form ka usko rok lo so for that hume events par ek method
//  milta hai 

// & here hume callback me milega ek event jise humne e naam de dia kuch bhi you give its a parameter jisme value store hogi
form.addEventListener("submit", function(e){
    e.preventDefault() // it means jo bhi default action hai mat karo matlab submit mat karo, now we need values
    const height=parseInt(document.querySelector("#height").value) // .value likhne se humne value mil jaaegi woh (e) variable me  & value jo milti hai wo string me hoti hai, but 
                                                    // hume value jo hai woh int me chayie so hum pure isko parseInt me wrap kar denge
    const weight=parseInt(document.querySelector("#weight").value )
    const results=document.querySelector("#results")
    //  now will check if sab shi hai then results me value add kar denge
    if(height === "" || height < 0 || isNaN(height)){ // like if ye saari cheeze nahi hai toh waha use ko bolo please give a valid height 
        results.innerHTML=`please give a valid ${height}`
      }
       else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML=`please give a valid ${weight}`
      }
      // here in else part if sab cheez sahi hai then BMI calculate karlo(aur humne condition daal di ki ye sab check karo if sahi hai then come to else part)
  else{
    const bmi = (weight /((height*height)/10000)).toFixed(2)
    // now result me display karana hai so show  the result
    results.innerHTML=`<span>${bmi}</span>` 
    // ye jo hai humne js ke through html me inject kar dia
  }

})


// if(bmi<18.6)
//   {
//     results.innerHTML="your bmi is " +`<span>${bmi}</span>` +". you are under weight"
//   }
//   else if(bmi>=18.6 && bmi < 24.9){
//     results.innerHTML="your bmi is "+`<span>${bmi}</span>` + ". normal range"
//   }
//   else if (bmi > 24.9){
//     results.innerHTML="your bmi is " + `<span>${bmi}</span>` + ". you are overweight"
//   }
//  else{
//   results.innerHTML="ram ram saryane"
//  }
// now the task is result ke niche message print ho ki ye under weight hai  normal ya fir over weight hai jo humare frotend par displayED  usko dynamicaally print kara do