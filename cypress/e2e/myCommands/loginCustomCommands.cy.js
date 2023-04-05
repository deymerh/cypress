describe('Login con user commnads', () => {
  it('login erroneo', () => {
    cy.myCommadLogin('dsadsal', 'zxzxzxz');
  });

  it('login correcto', () => {
    cy.myCommadLogin('username', 'password');
  });
});