# Property Decorator
Property decorators are used for decorating properties of classes.
```typescript
declare type PropertyDecorator = 
 (target: Object, propertyKey: string | symbol) => void;
 ```
The property decorator function takes 2 parameters: target and property.

Property decorators can be used to override the property being decorated. This can be done with the static method Object.defineProperty and a new setter and getter for the property.