/**
 * Created by modonnel on 1/27/2017.
 */
'use strict';

var request = require("supertest"),
    app = require("../app").getApp;

descript('GET /', function(){
    it('expects HTTP response 200', function(done){
        request(app)
            .get('/')
            .exptect(200, done);
    });
});