use Shares_Portfolio;
db.dropDatabase();

db.shares.insertMany([
    {
        name : "bitcoin",
        shares_held : 2,
        buy_price : 3000
    },
    {
        name : "polygon",
        shares_held : 10,
        buy_price : 1
    },
    {
        name : "xrp",
        shares_held : 1,
        buy_price : 0.7
    }
]);