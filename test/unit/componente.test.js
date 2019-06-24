import { mount } from '@vue/test-utils'
import Componente from '@/components/componenteTesting'

describe('Componente.vue', () => {
    it('incrementar contador', () => {
        /*mount de test utils nos permite activar internamente el componente y eventualmente interactual con el*/
        const wrapper = mount(Componente);
        /*la variable vm es la instancia principal de vue en nuestro componente
        en este caso vm esta llamando a nuestra variable contador definida anteriormente*/
        expect(wrapper.vm.contador).toBe(0);
        /*fin buscara el primer nodo de DOM o componente de vue*/
        /*trigger ejecutara un eventName de Dom, en este caso click*/
        wrapper.find('[jest="increment-button"]').trigger('click')

        expect(wrapper.vm.contador).toBe(1);
    })
})

