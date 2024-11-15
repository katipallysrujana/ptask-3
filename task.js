//printing minimum no-prime number
num=prompt("enter a number:")
nonprimes=""
for(i of num){
    if(i>1)
        for(j=2;j<i;j++){
    if(i%j==0){
        nonprimes+=i
        break
    }
    }
}
console.log(nonprimes)
min=nonprimes[0]
for(k=1;k<nonprimes.length;k++){
    if(min>nonprimes[k])
        min=nonprimes[k]
}
console.log("minimum nonprime:"+min)


//primesum is more/nonprime sum is more

num=prompt("enter a number:")
primesum=0
nonprimesum=0
for(i of num){
    if(i>1){
        isprime=true
        for(j=2;j<1;j++){
            if(i%j==0){
                isprime=false
                break
            }
        }
    if(isprime){
        primesum+=Number(i);
    }
    else{
        nonprime+=Number(i)
    }
    }
    }
    res=(primesum>nonprimesum)?"primesum is more":(primesum<nonprimesum)?"nonprime sum is more":"both are equal"
    console.log(res)


    //printing harshad number
    originalsum=prompt("enter a number:")
    digitsum=0
    for(i of originalsum){
        digitsum+=Number(i)
    }
    result=(originalsum%digitsum==0)?
    "harshad number" : "not a harshad number"
    console.log(result)
    