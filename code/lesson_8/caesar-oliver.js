function caesarEncrypt(txtPlain) {
    txtCae = ""
    alphabet = "abcdefghijklmnopqrstuvwxyzäöüßABCDEFGHIJKLMNOPQRSTUVWXYZÖÄÜ"
    for (i = 0; i <= txtPlain.length - 1; i++) {
        if (txtPlain[i] === " " || txtPlain[i] === "," || txtPlain[i] === "." || txtPlain[i] === ":" || txtPlain[i] === ";" || txtPlain[i] === "!" || txtPlain[i] === "?" || txtPlain[i] === "(" || txtPlain[i] === ")" ) {
            txtCae = txtCae + txtPlain[i]; 
        }
        else 
        {
            for (j = 0; j <= alphabet.length - 1; j++) {
                if (txtPlain[i] === alphabet[j])
                    txtCae = txtCae + alphabet[j + 3];
            }
        }
    }
    //console.log("\n>>> This was the plain text: \n"+ txtPlain + "\n")
    console.log("\n>>> And this is the Caesar-encrypted text: \n"+ txtCae + "\n")
    
}
​
wikiCaes = "Die Caesar-Verschlüsselung (auch als Cäsar-Chiffre, Cäsar-Algorithmus, Caesar-Verschiebung, Verschiebechiffre oder als Einfacher Caesar bezeichnet) ist ein einfaches symmetrisches Verschlüsselungsverfahren, das auf der monographischen und monoalphabetischen Substitution basiert."
​
caesarEncrypt(wikiCaes);