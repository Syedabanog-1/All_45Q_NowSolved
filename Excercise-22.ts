/* 22.	Intentional Error: If you haven’t received an array index 
error in one of your programs yet, try to make one happen. Change
 an index in one of your programs to produce an index error. Make sure
  you correct the error before closing the program.*/


  let hospital:string []= ['Jinnah','civil','agha khan','zia uddin','liakat'];
  
  
     let hos = hospital.length;
     hospital.push('ahmed');
 for (hos = 0; hos < hospital.length; hos++)
  
   console.log(hospital[hos], ':Defined values');
 
console.log(hospital[7] ,':Error : Array index value is bigger than defined');
  
  console.log(hospital[5],':value is defined');