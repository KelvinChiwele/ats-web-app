<template>
  <base-section
    id="welcome-feature">
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="OUR BRANCHES"
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
          <base-contact-card
            class="pa-3"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>

    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="OUR RETAIL TRADE CENTERS"
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
          <base-contact-card
            class="pa-3"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionContacts',
    data () {
      return {
        features: [
          {
            icon: 'mdi-flash',
            title: 'ADJUVANTS',
            heading: 'Choma',
            text: 'Used to enhance pesticides effectiveness',
            body: 'Plot No. 1375 Livingstone Road, Cell: +260 76 2 581 871',
            to: { name: 'Home' }
          },
          {
            icon: 'mdi-cog',
            title: 'FUNGICIDE',
            heading: 'Lusaka',
            text: 'Used to kill fungi or fungal spores.',
            body: 'Used to kill fungi or fungal spores.',
             to: { name: 'Home' }
          },
          {
            icon: 'mdi-responsive',
            title: 'HERBICIDE',
            heading: 'Kabwe',
            text: 'Used to control unwanted plants.',
            body: 'Used to control unwanted plants.',
             to: { name: 'Home' }
          },
          {
            icon: 'mdi-face-agent',
            title: 'INSECTICIDE',
            heading: 'Mazabuka',
            text: 'Used to kill unwanted insects',
            body: 'Used to kill unwanted insects',
             to: { name: 'Home' }
          },
          {
            icon: 'mdi-face-agent',
            title: 'INSECTICIDE',
            heading: 'Mpongwe',
            text: 'Used to kill unwanted insects',
            body: 'Used to kill unwanted insects',
             to: { name: 'Home' }
          },
           {
            icon: 'mdi-face-agent',
            title: 'INSECTICIDE',
            heading: 'Mkushi',
            text: 'Used to kill unwanted insects',
            body: 'Used to kill unwanted insects',
             to: { name: 'Home' }
          },
           {
            icon: 'mdi-face-agent',
            title: 'INSECTICIDE',
            heading: 'Ndola',
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
