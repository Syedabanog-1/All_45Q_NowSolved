/* 22.	Intentional Error: If you haven’t received an array index
error in one of your programs yet, try to make one happen. Change
 an index in one of your programs to produce an index error. Make sure
  you correct the error before closing the program.*/
var hospital = ['Jinnah', 'civil', 'agha khan', 'zia uddin', 'liakat'];
console.log(hospital[0], ': defined index values');
var hos = hospital.length;
if (hos = 0, hos < hospital.length, hos++) {
    console.log(hospital[hos]);
}
else
    console.log('\n\tError : Array index value is bigger than defined\n\t');
hospital.push();
console.log(hospital[4], ': defined index values');
