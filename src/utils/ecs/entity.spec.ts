// import { Entity } from "./entity";
// import { IComponent } from "./component.h";
import * as Test from "mocha";
import { expect } from "chai";

/**
 * MOCK ENTITIES & COMPONENTS
 */

// class E extends Entity {}

// class C1 implements IComponent {
//     public Entity: E
// }

// class C2 implements IComponent {
//     public Entity: E
// }

// class C3 implements IComponent {
//     public Entity: E
// }

// describe('>>>> Entity', () => {
//     let e: E

//     const c1 = new C1()
//     const c2 = new C2()
//     const c3 = new C3()

//     beforeEach(() => {
//         e = new E()
//     })
// })

describe('test mocha', ()=> {
    it ('Add two integers', ()=> {
         expect(3).to.equal(3)
    })
})