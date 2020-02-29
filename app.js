function checkPrime(inputNumber) {
    {
        // Neu n < 2 thi khong phai la SNT
        if (inputNumber < 2){
            return false;
        }

        for (let i = 2; i<(inputNumber - 1); i++){
        if (inputNumber % i === 0){
            return false;
        }
    }

        return true;
    }
}
let prime = parseInt(document.getElementById("number").value);
let result = checkPrime(prime);
document.getElementById("IsPrime").innerHTML=result;

