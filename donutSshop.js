$(document).ready(function() {   
    
    var $image_top = $('#image_top');
    $image_top.click(function() {
    $image_top.fadeOut('slow');
    $('<div id="image_top2"></div>').click(function() {
     $(this).fadeOut('slow');
     $image_top.fadeIn('slow');
    })
    .insertAfter($image_top);
    });
  
    $('table').hide();
    $("#newInput").hide();

    $('#buttonAll').click(function() {
       $('button[id!=buttonAll]').toggle();
       $('#buttonSubmit').slideToggle();
       $('#newInput').slideToggle();
       $('table').slideToggle();
       if ($('buttonSubmit') != null) {
           $('#buttonSubmit').click(function() {
              var submit = confirm('Are you sure you want to submit new information?');
              if (submit != null) {
              updateShopInformationByUserInput();
              createMyTableRowForAllLocations();
              clearInput();
              }
              else {
              clearInput();
              }
            });
      }
       createMyTableRowForAllLocations();
    }); 

   $('#buttonDTown').click(function() {
     $('button[id!=buttonDTown]').toggle();
     $('#buttonSubmit').slideToggle();
     $('#newInput').slideToggle();
     $('table').slideToggle();
     if ($('buttonSubmit') != null) {
           $('#buttonSubmit').click(function() {
              var submit = prompt('Are you sure you want to submit new information?');
              if (submit != null) {
              updateShopInformationByUserInput();
              createMyTableRowForALocation("Downtown");
              clearInput();
              }
              else {
              clearInput();
              }
            });
      }
     createMyTableRowForALocation("Downtown");
    });

  $('#buttonCapHill').click(function() {
     $('button[id!=buttonCapHill]').toggle();
     $('#buttonSubmit').slideToggle();
     $('#newInput').slideToggle();
     $('table').slideToggle();
     if ($('buttonSubmit') != null) {
           $('#buttonSubmit').click(function() {
              var submit = prompt('Are you sure you want to submit new information?');
              if (submit != null) {
              updateShopInformationByUserInput();
              createMyTableRowForALocation("Capital Hill");
              clearInput();
              }
              else {
              clearInput();
              }
            });
      }
     createMyTableRowForALocation("Capital Hill");
    });

  $('#buttonSLake').click(function() {
     $('button[id!=buttonSLake]').toggle();
     $('#buttonSubmit').slideToggle();
     $('#newInput').slideToggle();
     $('table').slideToggle();
     if ($('buttonSubmit') != null) {
           $('#buttonSubmit').click(function() {
              var submit = prompt('Are you sure you want to submit new information?');
              if (submit != null) {
              updateShopInformationByUserInput();
              createMyTableRowForALocation("South Lake Union");
              clearInput();
              }
              else {
              clearInput();
              }
            });
      }
     createMyTableRowForALocation("South Lake Union");
    });

  $('#buttonWWood').click(function() {
     $('button[id!=buttonWWood]').toggle();
     $('#buttonSubmit').slideToggle();
     $('#newInput').slideToggle();
     $('table').slideToggle();
     if ($('buttonSubmit') != null) {
           $('#buttonSubmit').click(function() {
              var submit = prompt('Are you sure you want to submit new information?');
              if (submit != null) {
              updateShopInformationByUserInput();
              createMyTableRowForALocation("Wedgewood");
              clearInput();
              }
              else {
              clearInput();
              }
            });
      }
     createMyTableRowForALocation("Wedgewood");
   });

  $('#buttonBallard').click(function() {
     $('button[id!=buttonBallard]').toggle();
     $('#buttonSubmit').slideToggle();
     $('#newInput').slideToggle();
     $('table').slideToggle();
     if ($('buttonSubmit') != null) {
           $('#buttonSubmit').click(function() {
              var submit = prompt('Are you sure you want to submit new information?');
              if (submit != null) {
              updateShopInformationByUserInput();
              createMyTableRowForALocation("Ballard");
              clearInput();
              }
              else {
              clearInput();
              }
            });
      }
     createMyTableRowForALocation("Ballard");
   });

}); 

var hourOfOperation = 11; //7am-6pm
 
function shopLocation (shopName, openingTime, closingTime, minCustomersPerHour, maxCustomersPerHour, avgDonutsPerCustomer) {
  this.shopName = shopName;       
	this.openingTime = openingTime;
	this.closingTime = closingTime;
	this.minCustomersPerHour = minCustomersPerHour;
	this.maxCustomersPerHour = maxCustomersPerHour;
	this.avgDonutsPerCustomer = avgDonutsPerCustomer;
	this.randomCustomerPerHour = function() {
  		return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
	};
	this.donutsToBakePerHour = function() {
		var numberOfDonuts = Math.round(this.randomCustomerPerHour() * this.avgDonutsPerCustomer);
		console.log(numberOfDonuts);
    return numberOfDonuts;
	};
	this.donutsToBakePerDay = function() {
		var numberOfDonutsDay = Math.round(hourOfOperation * this.randomCustomerPerHour() * this.avgDonutsPerCustomer);
		console.log(numberOfDonutsDay);
    return numberOfDonutsDay;
	};
}
var downtown = new shopLocation ("Downtown","7:00 AM", "6:00 PM", 8, 43, 4.50);
var capitolHill = new shopLocation ("Capital Hill", "7:00 AM", "6:00 PM", 4, 37, 2.00);
var southLakeUnion = new shopLocation ("South Lake Union", "7:00 AM", "6:00 PM", 9, 23, 6.33);
var wedgewood = new shopLocation ("Wedgewood", "7:00 AM", "6:00 PM", 2, 28, 1.25);
var ballard = new shopLocation ("Ballard", "7:00 AM", "6:00 PM", 8, 58, 3.75);

var shops = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];
/*var shop;
for(var i = 0; i < shops.length; i++) {
    shop = shops[i];
    shop.donutsToBakePerHour();
    shop.donutsToBakePerDay();
}*/

function updateShopInformationByUserInput() {
      var newMinCustHr = document.getElementById('newMinCustHr').value; 
      var newMaxCustHr = document.getElementById('newMaxCustHr').value;
      var newAvgDonutsCust = document.getElementById('newAvgDonutsCust').value; 
      shops.forEach(function(shop){
        shop.minCustomersPerHour = newMinCustHr;
        shop.maxCustomersPerHour = newMaxCustHr;
        shop.avgDonutsPerCustomer = newAvgDonutsCust;
      });
}

function createMyTableRowForAllLocations() {
  var $tableBody = $('table').find('tbody');

  clearAllTableRows();
  shops.forEach(function(shop) {
      var $tableRow, shopName, opening, closing, minCust, maxCust, avgDonut, donutsHr, donutsDay;
      shopName = shop.shopName;
      opening = shop.openingTime;
      closing = shop.closingTime;
      minCust = shop.minCustomersPerHour;
      maxCust = shop.maxCustomersPerHour
      avgDonut = shop.avgDonutsPerCustomer
      donutsHr = shop.donutsToBakePerHour();
      donutsDay = shop.donutsToBakePerDay();
      $tableRow = $("<tr>" + 
                  "<th>" + shopName + "</th>" + 
                  "<td>" + opening + "</td>" + 
                  "<td>" + closing + "</td>" + 
                  "<td>" + minCust + "</td>" + 
                  "<td>" + maxCust + "</td>" + 
                  "<td>" + avgDonut + "</td>" + 
                  "<td>" + donutsHr + "</td>" + 
                  "<td>" + donutsDay + "</td>" + 
                  "</tr>");
      $tableRow.appendTo($tableBody);  
    });
};
      
function createMyTableRowForALocation(location) {
  var $tableBody = $('table').find('tbody');
  clearAllTableRows();
  shops.forEach(function(shop) {
    var $tableRow, shopName, opening, closing, minCust, maxCust, avgDonut, donutsHr, donutsDay;
    shopName = shop.shopName;
    opening = shop.openingTime;
    closing = shop.closingTime;
    minCust = shop.minCustomersPerHour;
    maxCust = shop.maxCustomersPerHour
    avgDonut = shop.avgDonutsPerCustomer
    donutsHr = shop.donutsToBakePerHour();
    donutsDay = shop.donutsToBakePerDay();
    $tableRow = $("<tr>" + 
                  "<th>" + shopName + "</th>" + 
                  "<td>" + opening + "</td>" + 
                  "<td>" + closing + "</td>" + 
                  "<td>" + minCust + "</td>" + 
                  "<td>" + maxCust + "</td>" + 
                  "<td>" + avgDonut + "</td>" + 
                  "<td>" + donutsHr + "</td>" + 
                  "<td>" + donutsDay + "</td>" + 
                  "</tr>");
    if (location === shop.shopName) {
      $tableRow.appendTo($tableBody);
      $("#newInput").show(); 
      document.getElementById('newMinCustHr').value; 
      document.getElementById('newMaxCustHr').value;
      document.getElementById('newAvgDonutsCust').value;  
      }
  });
};

function clearInput() {
      document.getElementById('newMinCustHr').value = '0'; 
      document.getElementById('newMaxCustHr').value = '0';
      document.getElementById('newAvgDonutsCust').value = '0'; 
}

function clearAllTableRows() {
  var $tableRows = $('tbody').find('tr');
  $tableRows.each(function() {
    $(this).remove();
  });
};



