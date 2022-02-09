describe( 'Example Component', ()=>{
  test( 'Debe de ser mayor a 10', ()=> {

    //Arrangement
     let value = 15

     //ACT
    value += 2

    //Assert
    expect(value).toBeGreaterThan(10)

  } )   
} )