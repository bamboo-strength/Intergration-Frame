export abstract class Subject {
  protected observers = new Array<Function>();

  public subscriber(cb: Function) {
    this.observers.push(cb);
  }

  public unsubscriber(cb: Function) {
    this.observers = this.observers.filter(_item => _item !== cb);
  }

  public abstract notify(): void;
}
