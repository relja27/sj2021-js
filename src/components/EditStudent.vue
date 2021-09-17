<template>
  <b-container fluid>
    <b-form>
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <b-input v-model="newName" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Ime"></b-input>
        </b-col>
        <b-col sm="2" offset="0">
          <b-input v-model="newLastname" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Prezime"></b-input>
        </b-col>
        <b-col sm="2" offset="0">
          <b-input v-model="newYear" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Godina upisa"></b-input>
        </b-col>
        <b-col sm="2" offset="0">
          <b-input v-model="newVaccineId" class="mb-2 mr-sm-2 mb-sm-0" placeholder="ID Vakcine"></b-input>
        </b-col>
        <b-col sm="2" offset="0">
          <b-button variant="primary" size="mb" @click="updateStudent">Sačuvaj izmene</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "EditStudent",
  props: {
    student: Object
  },
  data() {
    return {
      newName: '',
      newLastname: '',
      newYear: '',
      newVaccineId: ''
    }
  },
  mounted: function () {
    this.newName = this.student.name;
    this.newLastname = this.student.lastname;
    this.newYear = this.student.year;
    this.newVaccineId = this.student.vaccine_id;
  },
  methods: {
    ...mapActions(['change_student']),

    updateStudent: function() {
      const newStudent = JSON.stringify({name: this.newName, lastname: this.newLastname, year: this.newYear, vaccine_id: this.newVaccineId});
      this.change_student({id: this.$route.params.id, student: newStudent});
    }
  }
}
</script>

<style scoped>

</style>