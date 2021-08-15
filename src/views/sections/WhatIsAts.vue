<template>
  <base-section
    id="welcome-feature"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="What is ATS Agrochemicals Limited"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />
          <base-body
        text="We are an Agro-chemical company that sell Seeds, Adjuvants, Herbicides, Fungicides, Foliar Fertilizers, Insecticides, Gardeninng aswell as household pesticides (Efeckto Products), Seed protectants inclusive."
        align="center"
      />
    </div>
    <!-- <v-row
      justify="center"
      align="center"
      class="px-10"
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
        </v-col>
      </template>
    </v-row> -->
  </base-section>
</template>

<script>
  export default {
    name: 'whatIsAts',
    data () {
      return {
        features: [
          {
            icon: 'mdi-flash',
            title: 'ADJUVANTS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-cog',
            title: 'FUNGICIDE',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-responsive',
            title: 'HERBICIDE',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-face-agent',
            title: 'INSECTICIDE',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-face-agent',
            title: 'PUBLIC HEALTH',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
