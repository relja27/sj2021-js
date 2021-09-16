<template>
  <b-container fluid>
    <b-row>
      <b-col sm="2">
        <label for="name">Ime:</label>
      </b-col>
      <b-col sm="10">
        <p id="name" style="text-align: left">{{ vaccine.name }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="country">Država:</label>
      </b-col>
      <b-col sm="10">
        <p id="country" style="text-align: left">{{ vaccine.country }}</p>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col sm="2">
        <label for="doses">Broj doza:</label>
      </b-col>
      <b-col sm="10">
        <p id="doses" style="text-align: left">{{ vaccine.doses }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ShowVaccine",
  props: {
    vaccine: Object
  }
}
</script>