// alert("Check Out Our Stores!!!")

const buisnessHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"] 

let Seattle =  {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookie: 0,

    getCustomersPerHour: function() {
        
        for (let index = 0; index < buisnessHours.length; index++) {
           
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
       
        console.log("loaded up the customers....")
    },

        getcookiesSoldPerHour: function() {
            totalDailyCookies = 0;
            this.getCustomersPerHour(); 
  
            for (let index = 0; index < this.customersPerHour.length; index++) {
              
                let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookies);
          
                this.cookiesSoldPerHour.push(dailyCookies);        
               
                this.totalDailyCookies+=dailyCookies;
            }
        },
        
        show() {
            this.cookiesSoldPerHour(); 
            const unorderedlist = document.getElementById('Seattle');
            for (let b = 0; b < buisnessHours.length; b++) {
                const listitem = document.createElement('li');
                // 6am: 16 cookies
                listitem.textContent = buisnessHours[b] + ';' + this.cookiesSoldPerHour[b] + 'cookies';
                unorderedList.appendChild(listItem);
            }
            const listItem = document.createElement('li');
            listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
            unorderedList.appendChild(listItem);
        }


   
}



function getRandomNumberOfCustomersGivenARange(minCustomers,maxCustomers) {
    
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
}

Seattle.getCustomersPerHour();

for (let index = 0; index < Seattle.customersPerHour; index++) {
    console.log(Seattle.customersPerHour[index]);
    
}




let Tokyo =  {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookie: 0,

    getCustomersPerHour: function() {
        
        for (let index = 0; index < buisnessHours.length; index++) {
           
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
       
        console.log("loaded up the customers....")
    },

        getcookiesSoldPerHour: function() {
            totalDailyCookies = 0;
            this.getCustomersPerHour(); 
  
            for (let index = 0; index < this.customersPerHour.length; index++) {
              
                let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
          
                this.cookiesSoldPerHour.push(dailyCookies);        
               
                this.totalDailyCookies+=dailyCookies;
            }
        }
        
        
}



function getRandomNumberOfCustomersGivenARange(minCustomers,maxCustomers) {
    
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
}

Tokyo.getCustomersPerHour();

for (let index = 0; index < Seattle.customersPerHour; index++) {
    console.log(Tokyo.customersPerHour[index]);
    
}
    



let Dubai =  {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookie: 0,

    getCustomersPerHour: function() {
        
        for (let index = 0; index < buisnessHours.length; index++) {
           
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
       
        console.log("loaded up the customers....")
    },

        getcookiesSoldPerHour: function() {
            totalDailyCookies = 0;
            this.getCustomersPerHour(); 
  
            for (let index = 0; index < this.customersPerHour.length; index++) {
              
                let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
          
                this.cookiesSoldPerHour.push(dailyCookies);        
               
                this.totalDailyCookies+=dailyCookies;
            }
        }
        
   
}



function getRandomNumberOfCustomersGivenARange(minCustomers,maxCustomers) {
    
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
}

Dubai.getCustomersPerHour();

for (let index = 0; index < Seattle.customersPerHour; index++) {
    console.log(Dubai.customersPerHour[index]);
    
}


let Paris =  {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookie: 0,

    getCustomersPerHour: function() {
        
        for (let index = 0; index < buisnessHours.length; index++) {
           
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
       
        console.log("loaded up the customers....")
    },

        getcookiesSoldPerHour: function() {
            totalDailyCookies = 0;
            this.getCustomersPerHour(); 
  
            for (let index = 0; index < this.customersPerHour.length; index++) {
              
                let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
          
                this.cookiesSoldPerHour.push(dailyCookies);        
               
                this.totalDailyCookies+=dailyCookies;
            }
        }
        
   
}



function getRandomNumberOfCustomersGivenARange(minCustomers,maxCustomers) {
    
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
}

Paris.getCustomersPerHour();

for (let index = 0; index < Seattle.customersPerHour; index++) {
    console.log(Paris.customersPerHour[index]);
    
}


let Lima =  {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookie: 0,

    getCustomersPerHour: function() {
        
        for (let index = 0; index < buisnessHours.length; index++) {
           
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
       
        console.log("loaded up the customers....")
    },

        getcookiesSoldPerHour: function() {
            totalDailyCookies = 0;
            this.getCustomersPerHour(); 
  
            for (let index = 0; index < this.customersPerHour.length; index++) {
              
                let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
          
                this.cookiesSoldPerHour.push(dailyCookies);        
               
                this.totalDailyCookies+=dailyCookies;
            }
        }
        
   
}



function getRandomNumberOfCustomersGivenARange(minCustomers,maxCustomers) {
    
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
}

Lima.getCustomersPerHour();

for (let index = 0; index < Seattle.customersPerHour; index++) {
    console.log(Lima.customersPerHour[index]);
    
}

// let eLocations = [Seattle,]

// for (let index = 0; index < eLocations.length; index++) {
//     eLocations[index].show();
// }