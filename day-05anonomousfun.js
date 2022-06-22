//Print odd numbers in an array
(()=>{                                                           
var oddarray=[];
let anofun=(function(array){
    for(let ele of array){                         
        if(ele%2!==0)
        oddarray.push(ele);
    }
    return oddarray;
})

console.log(anofun([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));
}) ()

//Convert all the strings to title caps in a string array
var caparray=[];                                            
let anofun2=(function(str){
    for (let iterator of str) {
    let a= iterator.toUpperCase(); 
    caparray.push(a);
    }
    return caparray;
 
}
);
console.log(anofun2(["karan","vijay","hello","guvi"]));

//sum of all numbers in an array
(()=>{                                                         
    var output=0;
    let anofun3=(function(str){
    for (let iterator of str) {
        output+=iterator;
    }
    return output;
    })
    console.log(anofun3([100,200,300,450]));
}) ()


//Return all the prime numbers in an array
primearray=[];
nonprimearray=[];                                               
let anofun4=(function(array){
    for (var iterator of array) {
        for (var i = 2; i < iterator; i++) {
            a=i;
            if(iterator%i==0){
            nonprimearray.push(iterator);
           break;}
        }   
        if(iterator%a!==0){
        primearray.push(iterator);}
}
return primearray;
}
)
console.log(anofun4([3,7,15,21,56,11]));

//Return all the palindromes in an array
(()=>{                                                                     
    var reversedName=[];
    var palindromeNames=[];  
    let anofun5=(function(array){
        for (var iterator of array) {
            for(i=iterator.length-1;i>=0;i--){
               reversedName.push(iterator[i]); 
               
            }
            reversedstring=reversedName.join("");
              
              if(reversedstring.toUpperCase() === iterator.toUpperCase())
              {console.log(reversedstring)}
             
              for(i=iterator.length-1;i>=0;i--){
                reversedName.pop(iterator[i]); 
                
             }
              
       }
        return 0;
    })
     console.log(anofun5(["racecar","madam","malayalam","guvi"])); 
}) ()

 
//Return median of two sorted arrays of the same size
 let anofun6=(arr1,arr2)=>{
      arr3=[...arr1,...arr2];
      
      for (i=0;i<arr3.length;i++) {
        for (j=0;j<arr3.length;j++) {
            if(arr3[i]<arr3[j])
            {
                temp=arr3[i];
                arr3[i]=arr3[j];
                arr3[j]=temp;
            }
        }    
      }
      index=arr3.length/2;
      //console.log(arr3[index]);
     // console.log(arr3[index+1]);
      median=(arr3[index]+arr3[index+1])/2;
      return median;

 }
 console.log(anofun6([45,34,78,27,61,55],[12,100,36,78]));

 //7)Remove duplicates from an array
 let anofun7=(arr1,arr2)=>{              
    arr3=[...arr1];
    for (i=0;i<arr3.length;i++) {
      for (j=1;j<arr3.length;j++) {
          if(arr3[i]==arr3[j] && i!==j)
          {
             arr3.splice(j,1);
          }
      }    
    }
    
    return arr3;

}
console.log(anofun7([78,61,55,78,78,45]));
   

 //Rotate an array by k times 
 (()=>{
    let rotateArray=function(arr,k){
        if(k==arr.length || k%arr.length==0)
        return arr;
        if(k>arr.length)
         k=k%arr.length;                                
         for(i=0;i<k;i++){
            use=arr[arr.length-1];
            arr.unshift(use);
            arr.length=arr.length-1;
         }
         return arr;
     }
    console.log(rotateArray([1,2,3,4],10));
 })()


 


