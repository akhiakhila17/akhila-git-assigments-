function person(fname,lname,age,skill,dateofbirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skill=skill;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;

}
var person1=new person("nikhil", "goud",22,['c'],"24/10/1997",{city:"hyberabad",pincode:"521185"},"false","sr analyst");
var person2=new person("harish", "chinna",21,['html'],"8/6/1997",{city:"ammeerpet",pincode:"500038"},"false","jr analyst");

print=function(){
    console.log(person1);
    console.log(person2);
}();

amitabh=new person("amitabh", "bachan",22,['c'],"24/10/1997",{city:"hyberabad",pincode:"521185"},"false","sr analyst")
abhishek=new person("abhishek",21,['html'],"8/6/1997","false","jr analyst")
var abhishek=Object.create(amitabh);
aaradhya=new person("aaradhya",20,['python'],"10/5/2000","fresher")
var aaradhya=Object.create(amitabh,abhishek);
print=function(){
    console.log(amitabh);
    console.log(abhishek.lname);
    console.log(abhishek.address);
    console.log(aaradhya);
}();
