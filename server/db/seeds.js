use Shares_Portfolio;
db.dropDatabase();

db.shares.insertMany([
    {name : "bitcoin"},
    {name : "polygon"},
    {name : "xrp"}
]);