<template>
  <h2>Counter:</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <div>
      <button @click=increaseCounter >1+</button>
      <button @click=decreaseCounter>1-</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 5
        }
    },
    methods: {
        getSquareValue(){
            console.log('getSquareValue')
            return this.counter * this.counter
        },
        increaseCounter(){
            this.counter++
        },
        decreaseCounter(){
            this.counter--
        }
    },
    computed: {
        squareCounter(){
            console.log('computed counter')
            return this.counter * this.counter
        }
    }
}
</script>

<style>
button{
    background-color: #64b687;
    border-radius: 5px;
    border: 1px solid  white;
    color: white;
    cursor: pointer;
    margin: 0, 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;

}
</style>