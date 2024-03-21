var userprofile = (function () {
    var name = "SHARY";
    var age = 23;
    return { displayinfo: function () {
            console.log("NAME: ".concat(name, ", AGE : ").concat(age));
        } };
})();
userprofile.displayinfo();
