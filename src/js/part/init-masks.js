// document.addEventListener('DOMContentLoaded', () => {

//     const elements = document.querySelectorAll('[data-mask="phone"]')
//     if (!elements) return
//     const phoneOptions = {
//         mask: '(000) 000 00 00'
//     }
//     elements.forEach(el => {
//         IMask(el, phoneOptions)
//     })

// });


document.addEventListener('DOMContentLoaded', () => {

    const mask = (dataValue, options) => {
        const elements = document.querySelectorAll(`[data-mask="${dataValue}"]`);
        if (!elements) return;

        elements.forEach(el => {
            IMask(el, options)
        });
    }

    // Phone number
    mask('phone', {
        mask: '000 000 000'
    });

    // Маска для почтового индекса
    mask('cartNumber', {
      mask: '0000 0000 0000 0000'
    });

    // Маска для почтового индекса
    mask('code', {
        mask: '000'
    });

    //verification code
    mask('verification', {
        mask: '000000'
    });

    // Date mask
    mask('date', {
        mask: '00/00'
    });

    // Amout number mask
    mask('number', {
        mask: Number,
        min: 100,
        max: 50000,
        thousandsSeparator: ' '
    });

  })
