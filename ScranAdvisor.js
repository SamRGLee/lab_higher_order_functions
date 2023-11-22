const ScranAdvisor = function(restaurants)
{
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.noOfRestaurants = function ()
{
    return this.restaurants.length;
}


ScranAdvisor.prototype.findByName = function (name)
{
    return this.restaurants.find(restaurant => restaurant.name === name);
}

ScranAdvisor.prototype.allNames = function ()
{
    return this.restaurants.map(restaurant => restaurant.name);
}

ScranAdvisor.prototype.findAllByCity = function (name)
{
    return this.restaurants.filter(restaurant => restaurant.location.town === name);
}

module.exports = ScranAdvisor;