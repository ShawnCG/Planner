export class AttemptModel {

  constructor(
    public email: string,
    public password: string
  ) { }

  getAll() {
    const email = this.email;
    const password = this.password;
    return {
      email,
      password
    };
  }
}
