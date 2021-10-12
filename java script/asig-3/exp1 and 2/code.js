class Rectangle{
    constructor (width,height)
    {
        this.width = width;
        this.height = height;
        this.getArea = function()
        {
            document.write("Area = " + (this.width*this.height)+ "<br>");
        };
    }
}


var R1 = new Rectangle(20,50);
document.write("R1 width = " + R1.width +" <br> R1 height = " + R1.height + "<br>");
R1.getArea();
