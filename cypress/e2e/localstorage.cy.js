
describe('LocalStorage', () => { 

  beforeEach(()=>{
    cy.visit('https://www.todo-cypress-iota.vercel.app').then(()=>{
      localStorage.setItem('react_todo_ids', JSON.stringify(['Titulo de prueba']));
      localStorage.setItem('Titulo de prueba', JSON.stringify({
        title: 'Titulo de prueba',
        id: 'Titulo de prueba',
        complete: false,
        description: 'Descripcion de una prueba'
      }));
    });
  })
  it('Crear una tarea', ()=>{
    
    cy.get('#title').type('Titulo de prueba');
    cy.get('#description').type('Descripcion de pruba');

    cy.contains('Create').click();

    cy.contains('Titulo de prueba');

    cy.reload();

    cy.contains('Titulo de prueba').then(()=>{
      expect(localStorage.getItem('Titulo de prueba')).to.exist;
    });
    
    cy.contains('Remove').click().then(()=>{
      expect(localStorage.getItem('Titulo de prueba')).to.not.exist;
    });
  });

})