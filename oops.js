console.log(this)

var classTry={
    name:"Ishan",
    marks:69,
    getMarks : function()
    {
        console.log("My Marks are ");
        console.log(this);
        function randomHi()
        {
            console.log("Hi");
            console.log(this)
        }
        randomHi();
    }
};

classTry.getMarks();