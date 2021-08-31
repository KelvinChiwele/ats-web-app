<template>
  <base-section class="offblack">
    <v-theme-provider dark>
      <v-row
        no-gutters
        class="px-6"
        align="start"
        justify="center"
      >
        <v-col
          cols="12"
          md="6"
          class="px-3"
        >
          <base-subheading :title="`About ${appData.subTitle}`" />
          <base-body text="We are an Agro-chemical company that sell Seeds, Adjuvants, Herbicides, Fungicides, Foliar Fertilizers, Insecticides, Gardeninng aswell as household pesticides (Efeckto Products), Seed protectants inclusive." />
        </v-col>

        <v-col
          cols="12"
          md="3"
          class="px-3 py-3"
        >
          <base-subheading title="Contact Us" />
          <base-subtitle
            title="Phone: +260 9064 5707"
            weight="bold"
            space="2"
          />
          <base-subtitle
            title="Email: info@atszambia.com"
            weight="bold"
             space="2"
          />

        </v-col>
          <v-col
          cols="12"
          md="3"
          class="px-3"
        >
          <base-subheading title="Follow Us" />
          <base-btn
            v-for="media in appData.socialLinks"
            :key="media.link"
            :href="media.link"
            rel="noreferrer"
            target="_blank"
            class="ma-1"
            min-width="40px"
            width="40px"
            depressed
            :color="media.color"
            :icon="media.icon"
          />
        </v-col>
      </v-row>
    </v-theme-provider>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFooter',
  }
</script>

<style lang="scss" scoped>

</style>
