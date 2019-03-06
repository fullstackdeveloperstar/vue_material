<template>
  <div class="hello">
    <md-field md-clearable>
      <label>Cleareable</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Password toggle</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <md-field :md-toggle-password="false">
      <label>Password field without toggle</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
