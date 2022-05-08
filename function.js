// function isIMEI (s) {
//     var etal = /^[0-9]{15}$/;
//       if (!etal.test(s))
//         return false;
//       sum = 0; mul = 2; l = 14;
//       for (i = 0; i < l; i++) {
//         digit = s.substring(l-i-1,l-i);
//         tp = parseInt(digit,10)*mul;
//         if (tp >= 10)
//              sum += (tp % 10) +1;
//         else
//              sum += tp;
//         if (mul == 1)
//              mul++;
//         else
//              mul--;
//         }
//       chk = ((10 - (sum % 10)) % 10);
//       if (chk != parseInt(s.substring(14,15),10))
//         return false;
//       return true;
//     }

// console.log(isIMEI(350077523237513));


function sumDig(n)
    {
        let a = 0;
        while (n > 0)
        {
            a = a + n % 10;
            n = parseInt(n / 10, 10);
        }
        return a;
    }
 
    function isValidIMEI(n)
    {
 
        // Converting the number into
        // String for finding length
        let s = n.toString();
        let len = s.length;
 
        if (len != 15)
            return false;
 
        let sum = 0;
        for(let i = len; i >= 1; i--)
        {
          let d = (n % 10);
 
          // Doubling every alternate digit
          if (i % 2 == 0)
              d = 2 * d;
 
          // Finding sum of the digits
          sum += sumDig(d);
          n = parseInt(n / 10, 10);
        }
 
        return (sum % 10 == 0);
    }
 

    let n = 490154203237518;
 
    if (isValidIMEI(n))
        console.log("Valid IMEI Code");
    else
        console.log("Invalid IMEI Code");


module.exports=isValidIMEI;