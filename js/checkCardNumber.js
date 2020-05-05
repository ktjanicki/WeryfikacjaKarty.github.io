
const checkCardNumber = cardNumber => {
    if (typeof cardNumber !== 'string') { throw new Error('Wprowadzona wartość nie jest typu string') };
    if (new RegExp(/[a-z]/gi).test(cardNumber)) { throw new Error('Numer karty nie może zawierać liter') };
    if (cardNumber === '') { return 'Nic nie wprowadzono' };

    const providers = [
        {
            'name': 'Diners Club',
            'prefix': [30],
            'length': [14]
        },
        {
            'name': 'American Express',
            'prefix': [34, 37],
            'length': [15]
        },
        {
            'name': 'JCB',
            'prefix': [35],
            'length': [16]
        },
        {
            'name': 'Visa',
            'prefix': [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
            'length': [13, 16]
        },
        {
            'name': 'MasterCard',
            'prefix': [22, 51, 52, 53, 54, 55],
            'length': [16]
        },
        {
            'name': 'Discover',
            'prefix': [60],
            'length': [16]
        }
    ];

    const providerCheck = cardNumber => {
        let result = false;
        providers.forEach(({ name, prefix, length }) => {
            if (prefix.includes(parseInt(cardNumber.match(/[0-9]{2,2}/))) && length.includes(cardNumber.match(/[0-9]/g).length)) {
                result = name;
            }
        });

        return result;
    }

    const luhnaCheck = cardNumber => {
        const even = index => (parseInt(index % 2) === 0);
        const multiplication = cardNumber.match(/[0-9]/g).reverse().map((num, index) => (!even(index)) ? parseInt(num * 2) : parseInt(num));
        const addition = multiplication.join('').split('').reduce((total, num) => total += parseInt(num), 0);

        return ((addition % 10) === 0) ? true : false;
    }

    return (luhnaCheck(cardNumber) && providerCheck(cardNumber)) ? providerCheck(cardNumber) : 'Numer karty jest niepoprawny';
}

export { checkCardNumber };