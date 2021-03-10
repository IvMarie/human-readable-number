module.exports = function toReadable(number) {
    const nums = new Map([
        ['1', "one"],
        ['2', "two"],
        ['3', "three"],
        ['4', "four"],
        ['5', "five"],
        ['6', "six"],
        ['7', "seven"],
        ['8', "eight"],
        ['9', "nine"]
    ]);

    const numTeen = new Map([
        ['0', "ten"],
        ['1', "eleven"],
        ['2', "twelve"],
        ['3', "thirteen"],
        ['4', "fourteen"],
        ['5', "fifteen"],
        ['6', "sixteen"],
        ['7', "seventeen"],
        ['8', "eighteen"],
        ['9', "nineteen"]
    ]);
    
    const numTy = new Map([
        ['2', "twenty"],
        ['3', "thirty"],
        ['4', "forty"],
        ['5', "fifty"],
        ['6', "sixty"],
        ['7', "seventy"],
        ['8', "eighty"],
        ['9', "ninety"]
    ]);
    number = String(number).split('').reverse();

    let a = (number[2]) ? `${nums.get(number[2])} hundred` : '';
    let b = '';
    let c = '';

    if (number[1] == '1') {
      b = numTeen.get(number[0]);} else 
    if (number[1] >= 2 && number[0] == '0') {
        b = numTy.get(number[1]);} else  
    if (!number[1] && !number[2] && number[0] == '0') { 
        c = 'zero'} else {
            c = (number[0] && number[0] !== '0') ? nums.get(number[0]): '';
            b = (number[1] && number[1] !== '0') ? numTy.get(number[1]) : '';
    }

    number = [a, b, c];
    return number.filter(String).join(' ');

}
