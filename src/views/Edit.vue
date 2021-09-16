<template>
  <div>
    <Header/>
    <b-container>
      <b-row>
        <b-col cm="6" >
          <div v-if="this.$route.params.id">
            <ShowVaccine v-if="vaccines.length" :vaccine="vaccine"/>
            <EditVaccine v-if="vaccines.length" :vaccine="vaccine"/>
          </div>
          <div v-else>
            <b-container>
              <b-row>
                <b-col cm="6">
                  <AddVaccine/>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ShowVaccine from "@/components/ShowVaccine";
import EditVaccine from "@/components/EditVaccine";
import AddVaccine from "@/components/AddVaccine";

export default {
  name: "Edit",
  components: {
    AddVaccine,
    EditVaccine,
    ShowVaccine
  },
  computed: {
    ...mapState(['vaccines']),

    vaccine: function () {

      for (let i = 0; i < this.vaccines.length; i++)
        if (this.vaccines[i].id === parseInt(this.$route.params.id))
          return this.vaccines[i];
      return null;
    }
  },
  methods: {
    ...mapActions(['load_vaccines']),
  }
}
</script>

<style scoped>

</style>