<template>
  <b-container fluid>
    <b-form>
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <b-input v-model="newName" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Ime"></b-input>
        </b-col>
        <b-col sm="2" offset="0">
          <b-input v-model="newCountry" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Država"></b-input>
        </b-col>
        <b-col sm="2" offset="0">
          <b-input v-model="newDoses" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Broj doza"></b-input>
        </b-col>
        <b-col sm="2" offset="0">
          <b-button variant="primary" size="mb" @click="updateVaccine">Izmeni</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "EditVaccine",
  props: {
    vaccine: Object
  },
  data() {
    return {
      newName: '',
     newCountry: '',
    newDoses: ''
    }
  },
  mounted: function () {
    this.newName = this.vaccine.name;
    this.newCountry = this.vaccine.country;
    this.newDoses = this.vaccine.doses;
  },
  methods: {
    ...mapActions(['change_vaccine']),

    updateVaccine: function() {
      const newVaccine = JSON.stringify({name: this.newName, country: this.newCountry, doses: this.newDoses});
      this.change_vaccine({id: this.$route.params.id, vaccine: newVaccine});
    }
  }
}
</script>

<style scoped>

</style>