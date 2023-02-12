const dispositivos = [
  { viewport: 'macbook-15', type: 'desktop' },
  { viewport: [1280, 720], type: 'desktop' },
  { viewport: 'ipad-2', type: 'movile' },
  { viewport: [375, 667], type: 'movile' },
]
describe('Dispositivos moviles', () => {
  dispositivos.forEach((dispositivo)=>{
    it(`Prueba con el viewport ${dispositivo.viewport}`, ()=>{
      if(Cypress._.isArray(dispositivo.viewport)){
        cy.viewport(dispositivo.viewport[0], dispositivo.viewport[1])
      }else{
        cy.viewport(dispositivo.viewport)
      }
      cy.visit('/');
      if(dispositivo.type === 'desktop'){
        cy.contains('Safari').should('exist');
      }else{
        cy.contains('Safari').should('not.be.visible');
      }
    });

  });
  // it('El viewport', ()=>{
  //   cy.viewport(1280, 720);
  //   cy.visit('/');
  //   cy.contains('Safari').should('exist');
  // });

  // it('El viewport en movile', ()=>{
  //   cy.viewport(375, 667);
  //   cy.visit('/');
  //   cy.contains('Safari').should('not.be.visible');
  // });

  // it('El viewport en macbook-15', ()=>{
  //   cy.viewport('macbook-15');
  //   cy.visit('/');
  //   cy.contains('Safari').should('exist');
  // });
});