<template>
  <div>
    <b-container fluid>
      <b-form>
        <b-row class="mt-2">
          <b-col sm="2" offset="1">
            <b-input v-model="newName" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Ime"></b-input>
          </b-col>
          <br>
          <b-col sm="2" offset="0">
            <b-input v-model="newLastname" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Prezime"></b-input>
          </b-col>
          <br><br>
          <b-col sm="2" offset="0">
            <b-input v-model="newYear" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Godina upisa"></b-input>
          </b-col>
          <br>
          <b-col sm="2" offset="0">
            <b-input v-model="newVaccineId" class="mb-2 mr-sm-2 mb-sm-0" placeholder="ID Vakcine"></b-input>
          </b-col>
          <br>
          <b-col sm="2" offset="0">
            <b-button variant="primary" size="mb" @click="addNew">Dodaj studenta</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
const Joi = require('joi');


const studentSchema = Joi.object().keys({
  name: Joi.string().trim().min(1).max(45).required(),
  lastname: Joi.string().trim().min(1).max(45).required(),
  year: Joi.number().min(2006).max(2021).required(),
  vaccine_id: Joi.number().min(1).max(200).required(),
})

export default {
  name: "AddStudent",
  props: {
    name: {
      type: String,
      default: ''
    },
    lastname: {
      type: String,
      default: ''
    },
    year: {
      type: Number,
      default: ''
    },
    vaccine_id: {
      type: Number,
      default:''
    }
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
    this.newName = this.name;
    this.newLastname = this.lastname;
    this.newYear = this.year;
    this.newVaccineId = this.vaccine_id;
  },
  methods: {
    ...mapActions(['new_student']),

    addNew: function () {

      let {error} = studentSchema.validate({
        name: this.newName,
        lastname: this.newLastname,
        year: this.newYear,
        vaccine_id: this.newVaccineId
      });

      if (error) {
        alert(error.details[0].message);
      } else {
        alert("Uspešno ste dodali novog studenta!")
        const newStudent = JSON.stringify({
          name: this.newName,
          lastname: this.newLastname,
          year: this.newYear,
          vaccine_id: this.newVaccineId
        });

        this.new_student(newStudent);

        this.newName = '';
        this.newLastname = '';
        this.newYear = '';
        this.newVaccineId = '';
      }

    }
  }
}
</script>


<style scoped>

</style>