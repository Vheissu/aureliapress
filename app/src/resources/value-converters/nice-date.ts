export class NiceDateValueConverter {
    toView(value) {
        let date = new Date(value);

        if (isNaN(date.getMonth())) {
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

            if (d === 1 || d === 21 || d === 31) {
                return ordinal[0];
            }

            if (d === 2 || d === 22) {
                return ordinal[1];
            }

            if (d === 3 || d === 23) {
                return ordinal[2];
            }

            return ordinal[3];
        };

        return `${d}${getOrdinal(d)} ${getMonthName(m)} ${y}`;
    }
}
