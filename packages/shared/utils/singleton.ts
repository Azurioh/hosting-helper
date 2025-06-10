export default abstract class Singleton {
  private static instance: Singleton | null = null;

  protected constructor() {
    if (Singleton.instance) {
      throw new Error('Singleton instance already exists. Use getInstance() instead.');
    }
    Singleton.instance = this;
  }

  public static getInstance<T extends Singleton>(): T {
    if (!Singleton.instance) {
      // biome-ignore lint/complexity/noThisInStatic: <explanation>
      new (this as unknown as new () => T)();
    }
    return Singleton.instance as T;
  }
}
