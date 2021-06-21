const cipher = {

    encode: function (offset, text) {

        if (typeof offset !== "number") {
            throw TypeError("Ops! Chave errada, precisamos de um número.")
        }
        if (typeof text !== "string") {
            throw TypeError("Ops! Chave errada, precisamos de um texto.")
        }

        let result = ""


        for (let start = 0; start < text.length; start++) {
            let encrypt = text.charCodeAt(start)
            let result1 = ""
            if (encrypt >= 65 && encrypt <= 90) {
                result1 = ((encrypt - 65 + offset) % 26) + 65

            }
            else if (encrypt >= 97 && encrypt <= 122) {
                result1 =  ((encrypt - 97 + offset) % 26) + 97
            }
            else if (encrypt >= 32 && encrypt <= 64) {
                result1 = ((encrypt - 32 + offset) % 33) + 32
            }

            result += String.fromCharCode(result1)

        }
        return result;
    },


    decode: function (offset, text) {


        if (typeof offset !== "number") {
            throw TypeError("Ops! Chave errada, precisamos de um número.")
        }
        if (typeof text !== "string") {
            throw TypeError("Ops! Chave errada, precisamos de um texto.")
        }

        let decryptText = ""


        for (let start = 0; start < text.length; start++) {
            
            let decrypt = text.charCodeAt(start)
            let result2 = ""
            
            if (decrypt >= 65 && decrypt <= 90) {
                result2 = ((decrypt + 65 - offset) % 26) + 65

            }
            else if (decrypt >= 97 && decrypt <= 122) {
                result2 = 122 - ((122 - decrypt + offset) % 26)
            }
            else if (decrypt >= 32 && decrypt <= 64) {
                result2 = 64 - ((64 - decrypt + offset) % 33)
            }

            decryptText += String.fromCharCode(result2)

        }
        return decryptText;
    },

};
export default cipher;