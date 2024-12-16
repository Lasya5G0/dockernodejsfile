https://dartpad.dev/

void main() {
  var name;  // tyepe is automatically determined based on assigned valess
  String address;
  int age = 25;
  final count = 10;
//   count=count+10;
  print(age);
  address="hyd";
  print("name: $name, age:$age");
  print("address:$address");
  name="100";
  print(name);
  int? sal;  //int? accepts null values
  print(sal);
}
############################
void main() {
// final message=greetings("Ramya",40);
//   String name="Ramya";
  String? name;
  
  final message = greetings(name);
  print(message);
}

String greetings(String? name) {
  return "Hi $name";
}
######################################
# class
void main()
{
  print("Student Details:");
  Student s=Student();
  s.display();
}

class Student
{
  var name="Ramya";
  int age=50;
  void display()
  {
    print("name:$name,age:$age");
  }
}

###############################################
## sets
void main()
{
  Set <String> city={'hyd','vja'};
  city.add("delhi");
  print(city);
  print(city.elementAt(0));
  var student={"name":"Ramya","age":45};
  print(student['name']);
}

#########################################
// Dart does not support multiple inheritance
class parent1
{
  void first()
  {
    print("first");

  }
}
class parent2 extends parent1
{
  void second()
  {
    print("second");

  }
}
class child extends parent2
{
  void third()
  {
    print("third");

  }
}

void main()
{
  child c1=child();
  c1.first();
  c1.second();
  c1.third();
}

###################################################

