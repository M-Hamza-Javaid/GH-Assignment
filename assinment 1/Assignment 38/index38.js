var DescribeCity = function (City, Country) {
    if (City === void 0) { City = "Karachi"; }
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(Country));
};
DescribeCity();
DescribeCity("Lahore");
DescribeCity("London", "England");
