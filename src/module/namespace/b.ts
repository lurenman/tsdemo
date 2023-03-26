namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { 
            test(){
                console.log("the test")
            }
        }
    }
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square();
sq.test()