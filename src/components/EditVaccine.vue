<template>
  <b-container fluid>
    <b-form>
      <b-row class="mt-2">
        <b-col sm="5">
          <b-form-textarea v-model="newName" placeholder="New name"></b-form-textarea>
        </b-col>
        <b-col sm="5">
          <b-form-textarea v-model="newCountry" placeholder="New country"></b-form-textarea>
        </b-col>
        <b-col sm="5">
          <b-form-textarea v-model="newDoses" placeholder="New doses"></b-form-textarea>
        </b-col>
        <b-col sm="1">
          <b-button variant="primary" size="lg" @click="updateVaccine">Update</b-button>
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
      newDoses: '',
    }
  },
  mounted: function () {
    this.newName = this.vaccine.name,
    this.newCountry = this.vaccine.country,
    this.newDoses = this.vaccine.doses
  },
  methods: {
    ...mapActions(['change_vaccine']),

    updateVaccine: function() {
      const newVaccine = JSON.stringify({name: this.vaccine.name, country: this.vaccine.country, doses: this.doses});

      this.change_vaccine({id: this.$route.params.id, vaccine: newVaccine});

    }
  }
}
</script>

<style scoped>

</style>