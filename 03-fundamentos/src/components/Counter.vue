<template>
  <h2>{{ getTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
      <button @click="increaseCounter">+1</button>
      <button @click="decreaseCounter">-1</button>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 1,
            // required: true,
            validator( value ){
                return value > 0
            }
        },
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquare() {
            return this.counter * this.counter
        },
        increaseCounter() {
            this.counter++
        },
        decreaseCounter() {
            this.counter--
        },
    },
    computed: {
        squareCounter() {
            return this.counter * this.counter
        },
        getTitle(){
            return this.title || "Counter"
        }
    }
}
</script>

<style>
    button{
        background-color: #64BB87;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }
    button:hover {
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>