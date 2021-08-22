<template>
  <base-section
    id="welcome-feature"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="OUR PRODUCT CATEGORIES"
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
      class="px-3"
    >
      <template v-for="(feature, i) in features">
        <v-col
          :key="i"
          cols="12"
          md="2"
        >
          <base-feature
            class="pa-3"
            v-bind="feature"
          />
        <!-- <base-feature-card
          class="mx-3 mt-12"
          icon="mdi-recycle"
          heading="Fusion Builder"
          outlined
          outline-color="white"
          body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          :to="{ name: 'Home' }"
        /> -->
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>


<script>
  export default {
    name: 'SectionProducts',
    data () {
      return {
        features: [
          {
            icon: 'mdi-flash',
            title: 'ADJUVANTS',
            text: 'Used to enhance pesticides effectiveness',
            body: 'Used to enhance pesticides effectiveness',
            to: { name: 'Home' }
          },
          {
            icon: 'mdi-cog',
            title: 'FUNGICIDE',
            text: 'Used to kill fungi or fungal spores.',
            body: 'Used to kill fungi or fungal spores.',
             to: { name: 'Home' }
          },
          {
            icon: 'mdi-responsive',
            title: 'HERBICIDE',
            text: 'Used to control unwanted plants.',
            body: 'Used to control unwanted plants.',
             to: { name: 'Home' }
          },
          {
            icon: 'mdi-face-agent',
            title: 'INSECTICIDE',
            text: 'Used to kill unwanted insects',
            body: 'Used to kill unwanted insects',
             to: { name: 'Home' }
          },
          // {
          //   icon: 'mdi-face-agent',
          //   title: 'PUBLIC HEALTH',
          //   text: 'Substance used to kill insects',
          // },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
