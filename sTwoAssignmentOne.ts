//////////////////////////////////////////////////////////////////////////////////////
                        // Stage 2 Assignment # 1

class Shape{
  show(){
    console.log(`We are in show() of Base class
    className: ${this.constructor.name}`)
  }

  getInfo(){
    console.log(`We are in getInfo() of Base class 
    className: ${Shape.name}`)
  }
}

class Circle extends Shape{
  show(){
    console.log(`We are in show() of Child-Circle Class
    className: ${this.constructor.name}`)
  }
}

class Rectangle extends Shape{
  show(){
    console.log(`We are in show() of Child-Rectangle Class
    className: ${this.constructor.name}`)
  }
}

let shapeObj = new Shape()
let circleObj = new Circle()
let rectangleObj = new Rectangle()


shapeObj.show()
shapeObj.getInfo()

circleObj.show()
circleObj.getInfo()

rectangleObj.show()
rectangleObj.getInfo()


// ################################################################################## //
                        // Stage 2 Assignment # 2

// abstract class Shape{
//   abstract show(): any

//   getInfo(){
//     console.log(`We are in getInfo() of Base class 
//     className:  ${Shape.name}`)
//   }
// }

// class Circle extends Shape{

// // as show() is abstract method in base class. So, if we do not create body for show function here in derived class it will show error as
// //'Non-abstract class 'Circle' does not implement inherited abstract member 'show' from class 'Shape'.'
// // it works fine when we completly create show() in derived class

//   show(){
//     console.log(`We are in show() of Child-Circle Class
//     className: ${this.constructor.name}`)
//   }
// }

// class Rectangle extends Shape{
//   show(){
//     console.log(`We are in show() of Child-Rectangle Class
//     className: ${this.constructor.name}`)
//   }
// }

// // let shapeObj = new Shape() 
// // if we create object for abstract class, it will show error as "Cannot create an instance of an abstract class."

// let circleObj = new Circle()
// let rectangleObj = new Rectangle()


// // shapeObj.show()
// // shapeObj.getInfo()

// circleObj.show()
// circleObj.getInfo()

// rectangleObj.show()
// rectangleObj.getInfo()

// ################################################################################## //
                        // Stage 2 Assignment # 3

// class Student{
//   private _studentName: string;
//   private _studentRegistrationNo: number;
//   private _batchName: any

//   public set studentName(name: string){
//     this._studentName = name
//   }

//   public get studentName(){
//     return (`Student Name: ${this._studentName}`)
//   }

//   public set studentRegistrationNo(registrationNo: number){
//     this._studentRegistrationNo = registrationNo
//   }

//   public get studentRegistrationNo(){
//     return `Registration Number: ${this._studentRegistrationNo}`
//   }

//   public set batchName(batch: any){
//     this._batchName = batch
//   }

//   public get batchName(){
//     return (`Batch Name: ${this._batchName}`)
//   }
// }

// const student = new Student()

// student.studentName = "Khizar"
// student.studentRegistrationNo = 12345
// student.batchName = "A1B2C3"

// console.log(student.studentName)
// console.log(student.studentRegistrationNo)
// console.log(student.batchName)