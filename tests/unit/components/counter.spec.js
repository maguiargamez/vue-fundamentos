import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', ()=> {

    let wrapper

    beforeEach( ()=> {
        wrapper = shallowMount( Counter )
    } )
    // test('Debe ser identico al snapshot', ()=> {
    
    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    test('H2 debe de tener el valor por defecto', ()=>{
        
        const h2 = wrapper.find('h2')

        expect(h2.exists()).toBe(true)

        const h2Value = h2.text()

        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto deve ser 100 en el p', ()=>{
        
        

        //const pTags = wrapper.findAll('p')
        //const pTagsSecondValue = pTags[1].text()
        const value = wrapper.find('[data-testid="counter"]').text()

        //expect(pTagsSecondValue).toBe("100")
        expect(value).toBe("100")
    })

    test('Debe de incrementar y decrementar el valor del contador', async ()=>{
        
        

        //const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')
        const increaseBtn = wrapper.find('[data-testid="btn-increase"]')
        const decreaseBtn = wrapper.find('[data-testid="btn-decrease"]')

        await increaseBtn.trigger('click')      
        await increaseBtn.trigger('click') 
        await increaseBtn.trigger('click') 
        
        await decreaseBtn.trigger('click') 
        await decreaseBtn.trigger('click') 


        let value = wrapper.find('[data-testid="counter"]').text()
        expect( value ).toBe('101')

    })

    test('debe de establecer el valor por defecto', () => {
        const { start } = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()
        expect( Number(value) ).toBe(start)
        
    })

    test('debe de mostra el prop title', ()=> {
        const title = 'Hola mundo!'
        const wrapper = shallowMount( Counter, { 
            props: {
                title: title
            }
        } )

        expect( wrapper.find('h2').text() ).toBe(title)
    })

})