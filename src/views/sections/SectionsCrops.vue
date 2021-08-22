<template>
  <base-section
    id="gallery"
    class="grey lighten-3"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="CROPS"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />

    </div>
    <v-row
      justify="center"
      align="center"
      class="px-10"
    >
      <template v-for="(project, i) in visibleProjects">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <base-crop
            v-bind="project"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'CropTypes',
    data () {
      return {
        selectedTab: 'all',
      }
    },
    computed: {
      visibleProjects () {
        return this.appData.crops.filter(project => {
          if (this.selectedTab.toLowerCase() === 'all') return true

          return project.category.toLowerCase() === this.selectedTab.toLowerCase()
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
