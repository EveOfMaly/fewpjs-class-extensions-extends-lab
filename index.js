// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides
        this.sideCounter = this.countSides
    }

    get countSides () {
        return this.sides.length
    }

    get perimeter(){
       return this.sides.reduce((acc, curr) => acc + curr);  
    }
}



class Triangle extends Polygon{

    isValid() {
        if (this.sideCounter !== 3) return false;
        if (!Array.isArray(this.sides)) return false;

       
        let sideA = this.sides[0]
        let sideB = this.sides[1]
        let sideC = this.sides[2]

        return ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA))
    }
}



class Square extends Polygon {

    isValid() {
        
        if (this.sideCounter !== 4) return false 
        if (!Array.isArray(this.sides)) return false

    
        let sideA = this.sides[0]
        let sideB = this.sides[1]
        let sideC = this.sides[2]
        let sideD = this.sides[3]


         return ((sideA === sideB) && (sideA === sideC) && (side1 === sideD))

    }


    area(){
        let sideA = this.sides[0]
        let sideB = this.sides[1]

        return sideA * sideB
        
    }




}



triangle = new Triangle( [ 5, 5, 5 ] )
triangle2 = new Triangle( [ 15, 10, 1 ] )


// if (this.array[0] + this.array[1]) > this.array[2]) {
//     return true 
// // } else if  (this.array[1] + this.array[2]) > this.array[0])  {
// //     return true 
// // } else if (this.array[2] + this.array[0]) > this.array[1])  {
// //     return true
// // } else  {
// //     return false
// }