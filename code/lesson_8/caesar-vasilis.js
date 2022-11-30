examplestring = "Why do zebras have stripes? Because they dont want to be spotted.";


function ceasarCipher(inputString, mode, shiftnumber) {
    input = inputString.toLowerCase()
    output = "";
    plain = "abcdefghijklmnopqrstuvwxyz .?!%&";

    for (i = 0; i < input.length; i++) {
        if (!plain.includes(input[i])) {
            output += input[i];
        } else {
            if (mode === "cipher") {
                cipherindex = plain.indexOf(input[i]) + shiftnumber;
                if (cipherindex > plain.length - 1) {
                    cipherindex -= plain.length;
                }
                output += plain[cipherindex];

            } else {
                decipherindex = plain.indexOf(input[i]) - shiftnumber;
                if (decipherindex < 0) {
                    decipherindex += plain.length;
                }
                output += plain[decipherindex];
            }
        }
    }

    return output;
}

console.log(ceasarCipher(examplestring, "cipher", 3));