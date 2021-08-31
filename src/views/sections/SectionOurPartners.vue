<template>
  <base-section
    id="our-team"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="OUR PARTNERS"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />
      <!-- <base-body
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
        align="center"
      /> -->
    </div>
    <v-row
      justify="center"
      align="center"
      class="px-10"
    >
      <template v-for="(employee, i) in teamMembers">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="3"
        >
          <base-partner
            v-bind="employee"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionOurPartners',
    data () {
      return {
        teamMembers: [
          {
            title: 'CEO',
            name: 'Neil Barnett',
            socialLinks: [
              { link: 'https://avima.co.za/', icon: 'mdi-twitter' },
            ],
            src: require('@/assets/partners/Avima-logo.jpg'),
          }, 
          {
            title: 'COO',
            name: 'Sherri Cayne',
            socialLinks: [
              { link: 'https://www.fmc.com/en', icon: 'mdi-web' },
            ],
              src: require('@/assets/partners/FMC-logo.jpg'),
          },
          {
            title: 'CTO',
            name: 'Erica Baker',
            socialLinks: [
              { link: 'https://www.aeciworld.com/', icon: 'mdi-web' },
            ],
              src: require('@/assets/partners/AECI-plant-health-logo.jpg'),
          },
          {
            title: 'CFO',
            name: 'Wesley Graves',
            socialLinks: [
              { link: 'https://twitter.com', icon: 'mdi-web' },
            ],
              src: require('@/assets/partners/Inline-trading-logo.png'),
          },
            {
            title: 'CFO',
            name: 'Wesley Graves',
            socialLinks: [
              { link: 'https://seedmarketing.co.za/', icon: 'mdi-web' },
            ],
              src: require('@/assets/partners/K2-logo.jpg'),
          },
          {
            title: 'CFO',
            name: 'Wesley Graves',
            socialLinks: [
              { link: 'https://www.farmag.co.za/', icon: 'mdi-web' },
            ],
              src: require('@/assets/partners/Farmag-logo.jpg'),
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
