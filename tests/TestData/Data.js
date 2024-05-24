const base = require('@playwright/test')

exports.Customtest = base.test.extend(
    {
        testdataforcontactus: {
            firstName: "snehal",
            lastName: "kamble",
            email: "snehalkamble1564@gmail.com",
            msg: "I am learning JavaScript"
        }
    })