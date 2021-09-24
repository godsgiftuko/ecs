import { IComponent } from './component.h';

export abstract class Entity {
    protected _components:[] = [];

    public get Components(): IComponent[] {
        return this._components;
    }

    public AddComponent(component: IComponent): void {
        this._components.push(component);
        component.Entity = this;
    }

    public GetComponent <C extends IComponent>(constr: { new (...args: any[]): C }): C {
        for (const component of this._components) {
            if (component instanceof constr) {
                return component as C;
            }

            throw new Error(`Components ${constr.name} not found on Entity ${this.constructor.name}`)
        }
    }

    public RemoveComponet<C extends IComponent> (constr: constr<C>): void {
        let toRemove: IComponent | null;
        let index: number | undefined;

        for(let i = 0; i <= this._components.length; i++) {
            const component = this._components[i];

            if (component instanceof constr) {
                toRemove = component
                index = i
                break;
            }
        }

        if (toRemove && index) {
            toRemove.Entity = null;
            this._components.splice(index, 1);
        }
    }
}