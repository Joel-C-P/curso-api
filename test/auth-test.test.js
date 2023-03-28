const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app").app;

describe("Suite de pruebas auth", () => {
    it("should return 200 when jwt is valid", (done) => {
         
        //Cuando la llamada no tiene correctamente la llave
        chai.request(app)
            .post("/login")
            .end((err,res) => {
                chai.request(app)
            .get("/team")
            .set("Authorization", "JWT token")
            .end((err,res) => {
                chai.assert.equal(res.statusCode, 200);
                done();

            });

        });

        
        
    });
    

});