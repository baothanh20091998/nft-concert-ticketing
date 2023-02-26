import numeral from "numbro";
import bigdecimal from "bigdecimal";

export const formatAddress = (str = "", limit = 10, separators = "...") => {
    if (!str) return "";
    str = str.toString();

    const pre = str.split("").slice(0, limit).join("");
    const suf = str.split("").reverse().slice(0, limit).reverse().join("");
    return `${pre}${separators}${suf}`;
};

export const convertWeiToBalance = (
    strValue,
    iDecimal = 18,
    format = false
) => {
    try {
        if (parseFloat(strValue) === 0) return 0;
        const multiplyNum = new bigdecimal.BigDecimal(Math.pow(10, iDecimal));
        const convertValue = new bigdecimal.BigDecimal(String(strValue));
        if (format) {
            return numeral(
                convertValue.divide(multiplyNum).toPlainString()
            ).format({
                mantissa: 6,
                thousandSeparated: true,
                trimMantissa: true,
            });
        }
        return convertValue.divide(multiplyNum).toPlainString();
    } catch (err) {
        return 0;
    }
};

export const countDots = (strString, strLetter) => {
    const string = strString.toString();
    return (string.match(RegExp(strLetter, "g")) || []).length;
};

export const formatNumberBro = (
    number,
    mantissa = 4,
    isReturnNaN,
    textNa,
    trimMantissa = true,
    isMoreThan
) => {
    if (
        number !== false &&
        number !== "null" &&
        !(number === null) &&
        !isNaN(number) &&
        !(number === undefined) &&
        number !== "NaN" &&
        number !== Infinity
    ) {
        if (number.toString().length > 0 && !isMoreThan) {
            // eslint-disable-next-line no-useless-escape
            return numeral(number.toString().replace(/\,/g, "")).format({
                trimMantissa,
                thousandSeparated: true,
                mantissa,
            });
        }

        // isMoreThan ...
        if (number.toString().length > 0 && isMoreThan) {
            // eslint-disable-next-line no-useless-escape
            const newNumber = numeral(
                number.toString().replace(/\,/g, "")
            ).format({
                trimMantissa,
                thousandSeparated: true,
                mantissa,
            });
            const indexE = number.toString().indexOf("e");
            const dotsCount = countDots(number.toString(), "\\.");
            let decimalCount = 0;
            if (dotsCount === 1) {
                decimalCount =
                    number.toString().length -
                    number.toString().indexOf(".") -
                    1;
            }

            if (
                (newNumber.toString() === "0" && indexE !== -1) ||
                (newNumber.toString() === "0" && mantissa < decimalCount)
            ) {
                return parseInt(newNumber).toFixed(mantissa) + "...";
            }
            return newNumber;
        }
    }
    return isReturnNaN ? textNa || "N/A" : 0;
};

export * from "./apiRequest";
