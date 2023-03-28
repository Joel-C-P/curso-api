const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app").app;

describe("Suite de prueba e3e para el curso", () =>{
    it("Should return Modric EL GOAT campeon del mundo", (done) =>{
        chai.request(app)
        .get("/")
        .end((err, res) => {
            chai.assert.equal(res.text, "Modric EL GOAT campeon del mundo")
            done();
        });
    });
});