const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send("working")
})

app.get('/create-story',(req,res)=>{
    res.send("testing, working and exposing story creation end points")
})

app.post('/ussd', (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON Welcome! What would you want to do?
        1. Get Mobile money from Hbar.
        2. Convert Mobile money to Hbar Tokens.
        3. About Decent Hd.
        `;
    } else if ( text == '1') {
        // Business logic for first level response
        response = `CON Send Hbar to address 0.0.7641180
        1. Amount of Hbar you sent.  
        2. Back`;
    } else if ( text == '2') {
        response = `Send Mobile money to +256700988025?
        1. Haba address (Must be of the format X.Y.Z)
        2. Back`;
    }else if ( text == '3') {
        response = `END
        Decent HD is a platform for you to get mobile money from Hbar`;
    }
    else if (text == '1*1') {
        response = `END 
       Thank you for working with us, check your wallet for the mobile money equivalent to the Hbar you sent.
        `;
    }else if (text == '1*2') {
        response = `END
        Maize is one of the best crops to grow . It takes three months to grow and 
        requires minimum supervision yet it brings good yields. With Steady rainfalls, Expect a profit margin almost 
        tripple to five times the input. Yet, with persistent sunshine, the yield is not as good. When taken good care 
        of, expect a yield even up to 10x. You need to prepare the land, aquire fertilisers, apply pesticides and 
        more to make this a reality.
        `;
    }else if (text == '1*3') {
        response = `END 
         Hbar sent succesfully to your wallet.
        `;
    }
  
    // else if (/^(1|2|3)\*(1|2|3|4|5)$/.test(text)) {
    //     console.log(text)
    //     response = `CON Enter your Quantity in kgs`;
    // }
    // else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)$/.test(text)
    // ){
    //     response = `CON Choose your Delivery district
    //     1. Kapchorwa
    //     2. Mpigi
    //     3. Nebbi 
    //     4. Lira`;
    // }
    // else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+$/.test(text)){
    //     response = `CON Choose from a pool of our Authentic Suppliers.

    //     1. MUKASA SUPPLIERS
    //     2. OMULIMI STORES
    //     3. LETS FARM SHOP
    //     4. MOMO AGRO`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*1$/.test(text)){
    //     response = `CON Choose your Delivery point
    //     1. Kapchorwa Taxi Park
    //     2. Kapchorwa Bus Park`;
    // }
    // else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*2$/.test(text)){
    //     response = `CON Choose your Delivery point
    //     1. Mpigi Taxi Park`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*3$/.test(text)){
    //     response = `CON Choose your Delivery point
    //     1. Nebbi Taxi Park
    //     2. Nebbi Bus Park`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*4$/.test(text)){
    //     response = `CON Choose your Delivery point
    //     1. Lira Taxi Park
    //     2. Lira Bus Park`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*(1|2|3|4)\*(1|2)$/.test(text)){
    //     response = `CON Proceed to Make payment of sh.340000
    //     1. Pay
    //     2. Pay with another number`;
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*(1|2|3|4)\*(1|2)\*2$/.test(text)){
    //     response = `CON Enter Phone number`
    // }else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*(1|2|3|4)\*(1|2)\*1$/.test(text)){
    //     response = `END Thank you for ordering with us. Your order is being processed.
    //     For any inquiries, contact +256703806580.`
    // }
    // else if(/^(1|2|3)\*(1|2|3|4|5)\*\d+\*(1|2|3|4)\*(1|2|3|4)\*(1|2)\*2\d+$/.test(text)){
    //     response = `END Thank you for ordering with us. Your order is being processed.
    //     For any inquiries, contact +256703806580.`
    // }

    else{
        response =`END Sorry, For any inquiries. Contact Decent Hd directly on +256700988025!`;
    }


    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});

const PORT= process.env.PORT || 6000
app.listen(PORT,(req,res)=>{
console.log(`App listening on ${PORT}`)
})

// "use strict";

// const express = require("express");
// const app = express();

// app.listen(3000, err => {
//     if(err) {
//         console.log("There was a problem", err);
//         return;
//     }
//     console.log("listening on port 3000");
// });
