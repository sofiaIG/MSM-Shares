use Shares_Portfolio;
db.dropDatabase();

db.shares.insertMany([
    {
        name : "bitcoin",
        shares_held : 2
    },
    {
        name : "polygon",
        shares_held : 3
    },
    {
        name : "xrp",
        shares_held : 1
    }
]);