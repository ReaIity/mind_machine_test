<template>
    <div class="login">
        <h1>Введите кодовое слово</h1>
        <input type="text" class="form__field" placeholder="Password" name="name" id='name' required />
        <p v-show="visibleWarning">Кодовое слово неверно!</p>
        <div class="button" @click="checkWord" >Отправить</div>
    </div>
</template>

<script>
    import Main from './Main.vue'
  export default {
    name: 'Login',
    data () {
      return {
        testWord: "test",
        visibleWarning: false
      }
    },
    methods: {
      checkWord () {
        if (document.getElementById('name').value === "test") {
          this.visible = !this.visible;
          this.$router.replace({ path: 'Main', name: 'Main', component: Main });
          document.getElementsByClassName("login")[0].classList.remove("errorWord");
          this.visibleWarning = false;
        } else {
          document.getElementsByClassName("login")[0].classList.add("errorWord");
          this.visibleWarning = true;
        }
      }
    }
  }
</script>

<style scoped>
    .login {
        min-width: 400px;
        width: 700px;
        min-height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #2c3e50;
        border-radius: 5px;
    }
    .button{
        width: 99px;
        height: 44px;
        margin: 20px auto 10px auto;
        background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
        border-radius: 22px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 44px;
        text-align: center;

        text-transform: uppercase;
        cursor: pointer;
        color: #FFFFFF;
    }
    .form__field {
        font-family: inherit;
        width: 70%;
        margin: auto;
        border: 0;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        color: #2c3e50;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }
    .form__field:focus{
        padding-bottom: 6px;
        border-width: 3px;
        border-image: linear-gradient(to right, #BC9CFF 0%, #8BA4F9 100%);
        border-image-slice: 1;
    }
    .errorWord{
        border-color: red;
    }
    .login p {
        color: red;
        font-size: 0.8em;
        margin: auto;
        margin-top: 3px;
        text-align: center;
    }
</style>
