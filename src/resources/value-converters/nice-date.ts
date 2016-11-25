export class NiceDateValueConverter {
    toView(value) {
        let date = new Date(value);

        if (isNaN(date.getMonth)) {
            return value;
        }

        let d = date.getDate();
        let m = date.getMonth();
        let y = date.getFullYear();

        const getMonthName = (m) => {
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            return monthNames[m];
        };

        const getOrdinal = (d) => {
            const ordinal = ['st', 'nd', 'rd', 'th'];

            if (d > 3 && d < 21) {
                return oridinal[3];
            }

            let modulus = d % 10;

            if (modulus === 1) {
                return oridinal[0];
            } else if (modulus === 2) {
                return modulus[1];
            } else if (modulus === 3) {
                return modulus[2];
            }
        };

        return `${d}${getOrdinal(d)} ${monthNames[m} ${y}`;
    }
}
