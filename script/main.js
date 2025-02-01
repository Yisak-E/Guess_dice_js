
const img = document.querySelector('img');
const btn = document.getElementsByTagName('button')

const result = document.getElementById('result');
const percentage = document.getElementById('percentage');

    let correct =  0;
    let count =  0;



    
function changes(x) {


    count++;
    let random = Math.floor(Math.random() * 6)+1;

    if (parseInt(x) == random) {
        correct++;
    };
     result.value = ` ${correct} `;
    percentage.value = ` ${Math.floor((correct / count)* 100) }% `;
    

            img.src=`assets/die_${random}.jpg`;
       
    console.log(result.value);
    console.log(percentage.value);
    console.log(count) 
setTimeout(() => {
     img.src=`assets/die_0.jpg`;
}, 1500); // 2000 milliseconds = 2 seconds

}
if (count > 0) {
    percentage.value = `${Math.floor((correct * 100) / count)}%`;
}


    
  
          
  
