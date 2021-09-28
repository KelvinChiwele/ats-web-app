<template>
   <base-section
    id="gallery"
    class="grey lighten-3"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="REVIEWS AND DEMOS"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />

    </div>
    <v-row
      justify="center"
      align="center">

     <template v-for="(project, i) in visibleProjects">
        <v-col
          :key="i"
          cols="12"
          lg="4"
        >
  
         <div id="Container"
            style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
          <iframe
                  width="100%"
                  height="100%"
                  :src="project.src"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style="position:absolute; top:0; left: 0"
                ></iframe>
         </div>

        </v-col>
      </template>

      <base-btn
        rounded
        class="mt-10 mb-2 elevation-0"
        color="offblack white--text"
        depressed
        href="https://www.youtube.com/channel/UCVdTZDqlfK1bpMFbBQx4kAA/videos"
        target="_blank"
      >
        <span
          class="font-weight-black text-none"
          v-text="`Watch More ...`"
        />
      </base-btn>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionVideos',
    data () {
      return {
        selectedTab: 'all',
      }
    },
    computed: {
      visibleProjects () {
        return this.appData.youtubeLinks.filter(project => {
          if (this.selectedTab.toLowerCase() === 'all') return true

          return project.src.toLowerCase() === this.selectedTab.toLowerCase()
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
