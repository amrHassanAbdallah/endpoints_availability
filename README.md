# endpoints_availability


#### Breif: 
This repo act as server simulator , by exposing 2 endpoints , one that return fast response and different
 random response status , and another that returns slow (delayed) response with random response status too .
 In order to allow [Health checker](https://github.com/amrHassanAbdallah/site_health_checker)  to work with different cases .
 
 
 
 #### Up & Running
 ```
 npm i
 ```
 
 
 #### Endpoints
 
 ````
 - api #/api
 
   - slow  # /api/slow
     - test   # /api/slow/test
       - number # /api/slow/test/:number
       
   - fast  # /api/fast
     - test   # /api/fast/test
       - number # /api/fast/test/:number
     
 ````
 
 