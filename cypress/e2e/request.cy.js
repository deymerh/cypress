describe('Interceptando request', ()=>{
	it('Repaso de request', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response)=>{
			expect(response.body).to.have.property('name', 'ditto');
			expect(response.status).to.eq(200);
			cy.log(response.body);
		})
	});

	it('Prueba de interceptor simple', () => {
		cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon-species/1').as('bulbasaur');
		cy.visit('/');
		cy.contains('Bulbasaur').parent().parent().within((elemento)=>{
			cy.wrap(elemento).contains('Más detalles').click();
		});
		cy.wait('@bulbasaur').then((intercept)=>{
			expect(intercept.response.body).to.have.property('name', 'bulbasaur');
			expect(intercept.response.statusCode).to.eq(200);
			cy.log(intercept.response.body);
		});
	});

	// cy.intercept(
	// 	{'method': 'POST', 'url': 'https://pokeapi.co/api/v2/pokemon-species/1'},
	// 	{ success: true }
	// )

	it('Probar intercept - forzar a que falle', () => {
		cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon-species/1',
		{ forceNetworkError: true }).as('bulbasaur');
		cy.visit('/');
		cy.contains('Bulbasaur').parent().parent().within((elemento)=>{
			cy.wrap(elemento).contains('Más detalles').click();
		});
	});
})

// https://pokeapi.co/api/v2/pokemon/ditto
// https://pokeapi.co/api/v2/pokemon-species/1