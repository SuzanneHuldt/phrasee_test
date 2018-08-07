
var chai = require('chai');
var expect = require('chai').expect;
const Controller = require('./../utils/Controller.js');
const controller = new Controller;
const notifications = require('./../notifications.json');
const id1 = 'b1638f970c3ddd528671df76c4dcf13e';
const id2 = '7d78ff348647b782cb3027d836d23e09';
const id3 = '57e0d6328c9287bd1b66bc327efbcdfa';
const id4 = '57e9d6328c9257bfaked1b66bq327efbcmsfa'
const string1 = "Mary T. Price, Suoma Narjus, Sandra Ortega, William Hunt, and An Mao liked your post Acme Inc dynamically scales niches worldwideYour post Acme Inc dynamically scales niches worldwide was commented on: Suoma Narjus commented on your post with: Acme remains one of my fave company ever! The way they scale is so dynamic that makes HTML5 look static!";
const string2 = "Bojana Novaković, Mr Smartypants, Katie Blackman, Chuck Looij, Hamish Sutcliffe, and Eugenio Bertè liked your post How to professionally administrate seamless growth strategies in 10 steps";
const string3 = "Your post Boom&Bust to uniquely coordinate standardized meta-services was commented on: Chuck Looij commented on your post with: Here we go again!";
const string4 = "This post received no notifcations or was not found"

it('should return expected string output for id1', function(){
    expect(controller.showNotifications(id1, notifications)).to.equal(string1);
});
it('should return expected string output for id2', function(){
    expect(controller.showNotifications(id2, notifications)).to.equal(string2);
});
it('should return expected string output for id3', function(){
    expect(controller.showNotifications(id3, notifications)).to.equal(string3);
});
it('should return Not Found message for id4', function(){
    expect(controller.showNotifications(id4, notifications)).to.equal(string4);
});
