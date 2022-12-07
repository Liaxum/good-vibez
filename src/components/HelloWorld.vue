<template>
  <v-container
    class="fill-height"
    style="margin: 0; padding: 0; max-width: none"
  >
    <v-app-bar>
      <div
        class="d-flex justify-space-between"
        style="width: 100%; align-items: center"
      >
        <img src="/icon.png" style="height: 64px; padding-left: 10px" />
        <div>
          <v-btn color="#FF9F1C" href="#Personnalisé">Personnalisez</v-btn>
          <v-btn color="#FF9F1C" href="#Positivez">Positivez</v-btn>
          <v-btn color="#FF9F1C" href="#Vibrez">Vibrez</v-btn>
        </div>

        <v-btn class="text-white" rounded="pill" variant="elevated" color="#2ec4b6" style="margin-right: 10px">Télécharger l'app</v-btn>
      </div>
    </v-app-bar>
    <v-parallax :height="parallaxHeight" src="/paralax.png">
      <div class="d-flex flex-column fill-height justify-center align-center">
        <img
          src="/logo-rect.svg"
          alt="logo"
          style="width: 600px; margin: 20px"
        />
        <h4 style="font-size: 40px; font-weight: bold">
          Ta dose de fraicheur, à toute heure !
        </h4>
        <h5 class="font-weight-medium" style="font-size: 24px">
          Vibin, c’est une appli qui surfe sur les good vibes et qui
          t’accompagne chaque jour pour être à l’écoute de toi-même.
        </h5>
        <v-btn
          rounded="pill"
          color="#2EC4B6"
          class="text-white"
          style="margin-top: 50px"
          >Commencer la navigation</v-btn
        >
      </div>
    </v-parallax>
    <section
      id="Personnalisé"
      style="
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
      "
    >
      <v-row>
        <v-col cols="4">
          <h2>Personnalisez</h2>
          Prenez en main votre quotidien : insufflez un vent de positivité dans
          votre journée en créant un profil qui vous ressemble. <br />
          Personnalisez votre fil d’actualité et réalisez des objectifs à votre
          image.
        </v-col>
        <v-col cols="8">
          <img
            src="/phone-1.png"
            style="margin-left: 100px; width: 297.36; height: 610.98"
          />
        </v-col>
      </v-row>
    </section>
    <section id="Positivez" style="padding: 10px">
      <v-row>
        <v-col cols="8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ab
          quam maiores delectus nostrum fugiat libero. Fuga architecto amet
          earum nesciunt quam dolores praesentium placeat et hic, a corrupti
          nostrum.
        </v-col>
        <v-col cols="4">
          <h2>Actualité</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga suscipit
          repellendus, corporis, accusamus sequi iste sapiente voluptas magni
          ipsa quae fugit ut! Reprehenderit assumenda dolore vel reiciendis
          quidem voluptates blanditiis.
        </v-col>
      </v-row>
    </section>
    <section id="Vibrez" style="padding: 10px">
      <v-row>
        <v-col cols="4">
          <h2>Vibrez</h2>
          Pas de stress, pas de compétition : que des good vibes! <br />
          Vibrez au rythme de vos actions positives.
        </v-col>
        <v-col cols="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga suscipit
          repellendus, corporis, accusamus sequi iste sapiente voluptas magni
          ipsa quae fugit ut! Reprehenderit assumenda dolore vel reiciendis
          quidem voluptates blanditiis.
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script setup>
document.title = "Vibin";

const parallaxHeight = window.innerHeight;
</script>
<style>
a:hover {
  color: #2ec4b6 !important;
}
</style>
