const cypress = require("cypress");
const { describe } = require("mocha");

//GSHARMA gupta
describe("test api",()=>{
cy.request({
method: "GET",
url: "https://vas-v4.int.p7s1video.net/4.0/getsources?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6InhfdmUtcWEtaW50ZXJ2aWV3In0.eyJpYXQiOjE2NjkyODE5MTcuMjEzNTMyLCJuYmYiOjE2NjkyODE2MTcuMjEzNTMyLCJleHAiOjE2NjkyODU4MTcuMjEzNTMyLCJjb250ZW50X2lkcyI6eyJ2X3Rlc3Rub25kcm0iOnt9fSwic2VjdXJlX2RlbGl2ZXJ5Ijp0cnVlfQ.-xaKRb_4eOeeO7jdahoQDAJZyUgDlU0h05EZur7AUTc"
}).its("status").should("equal", 200)
})
