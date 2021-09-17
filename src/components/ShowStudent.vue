<template>
  <b-container fluid>
    <b-row>
      <b-col sm="2">
        <label for="name">Ime:</label>
      </b-col>
      <b-col sm="10">
        <p id="name" style="text-align: left">{{ student.name }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="lastname">Prezime:</label>
      </b-col>
      <b-col sm="10">
        <p id="lastname" style="text-align: left">{{ student.lastname }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="year">Godina upisa:</label>
      </b-col>
      <b-col sm="10">
        <p id="year" style="text-align: left">{{ student.year }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="vaccine_id">ID Vakcine:</label>
      </b-col>
      <b-col sm="10">
        <p id="vaccine_id" style="text-align: left">{{ student.vaccine_id }}</p>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: "ShowStudent",
  props: {
    student: Object
  }
}
</script>