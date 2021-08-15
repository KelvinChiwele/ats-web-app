<template>
  <base-section
    id="gallery"
    space="0"
  >
    <div class="justify-center align-center">
      <v-tabs
        v-model="selectedTab"
        centered
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab.category"
          :href="`#${tab.category.toLowerCase()}`"
          v-text="tab.title"
        />
      </v-tabs>
    </div>
    <v-row
      justify="center"
      align="center"
      no-gutters
    >
      <template v-for="(project, i) in visibleProjects">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <base-project
            v-bind="project"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProjectGallery',
    data () {
      return {
        selectedTab: 'all',
        tabs: [
          { title: 'ALL PRODUCTS', category: 'all' },
          { title: 'ADJUVANTS', category: 'fire' },
          { title: 'FUNGICIDE', category: 'mountain' },
          { title: 'HERBICIDE', category: 'day' },
          { title: 'INSECTICIDE', category: 'insectides' },
          { title: 'PUBLIC HEALTH', category: 'efekto' },
        ],
      }
    },
    computed: {
      visibleProjects () {
        return this.appData.projects.filter(project => {
          if (this.selectedTab.toLowerCase() === 'all') return true

          return project.category.toLowerCase() === this.selectedTab.toLowerCase()
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
