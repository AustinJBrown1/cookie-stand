var hoursArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
var seattle = {
  customerMax: 65,
  customerMin: 23,
  averageCookiesSales: 2.3,
  cookiesPerHr: [],
  customersPerHr: [],
  custPerHour: function(){
    console.log('hello world')
    for(var i = 0; i < hoursArray.length; i++){
      var random = randomNumber(this.customerMax, this.customerMin);      
      // var random = randomNumber(this.customerMax, this.customerMin);
      this.customersPerHr.push(random);
      // cookiesSoldPerHr.push(cookiesSold);
      console.log(this.customersPerHr);
    }
  },
  cookiesPerHour: function(){
    console.log('hello world')
    for(var i = 0; i < hoursArray.length; i++){
      var random = randomNumber((this.customerMax, this.customerMin)*this.averageCookiesSales);      
      var random = randomNumber(this.customerMax, this.customerMin);
      this.cookiesPerHr.push(random);
      // cookiesSoldPerHr.push(cookiesSold);
      console.log(this.cookiesPerHr);
    }
    function randomNumber(max, min){
      return Math.floor(Math.random()*(max - min ) + min);
    }
    function randomNumber(max, min){
      return Math.floor(Math.random()*(max - min ) + min);
    }
    console.log(seattle.custPerHour());
    console.log(randomNumber());
    console.log(seattle.cookiesPerHour());
  }
};
