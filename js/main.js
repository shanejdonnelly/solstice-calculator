var w16 = moment('2016-12-21 05:44');
var now = moment();
var diff = w16.diff(now, 'days');
var other_side = diff > 0 ? w16.subtract(diff, 'days') : w16.add(diff, 'days');

var $entry = document.getElementById('entry');
var $today = '<p>Today is ' + now.format("dddd, MMMM Do YYYY") + '</p>';
var $diff = '<p>You are ' + diff + ' days away from the solstice.</p>';
var $other_side_day ='<p>Today is equivalent in day length to ' + other_side.format("dddd, MMMM Do YYYY") + '</p>'; 
$entry.innerHTML = $today + $diff + $other_side_day;


