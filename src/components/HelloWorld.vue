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
          <v-btn class="inNav" color="#FF9F1C" href="#Personnalisé"
            >Personnalisez</v-btn
          >
          <v-btn class="inNav" color="#FF9F1C" href="#Positivez"
            >Positivez</v-btn
          >
          <v-btn class="inNav" color="#FF9F1C" href="#Vibrez">Vibrez</v-btn>
        </div>

        <v-btn
          class="text-white"
          rounded="pill"
          variant="elevated"
          color="#2ec4b6"
          style="margin-right: 10px"
          >Télécharger l'app</v-btn
        >
      </div>
    </v-app-bar>
    <v-parallax id="top" :height="parallaxHeight" src="/paralax.png">
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
          href="#Personnalisé"
          rounded="pill"
          color="#2EC4B6"
          class="text-white"
          style="margin-top: 50px"
          >Je découvre Vibin</v-btn
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
        padding: 100px;
        padding-left: 250px;
      "
    >
      <v-row>
        <v-col
          cols="4"
          style="display: flex; flex-direction: column; justify-content: center"
        >
          <h2 style="color: #ff9f1c; font-size: 48px; margin-bottom: 20px">
            Personnalisez
          </h2>
          <p>
            Insufflez un vent de positivité dans votre journée en créant un
            profil qui vous ressemble. <br /><br />
            Concevez l’application à votre image et faites-en une safe place :
            Vibin vous aide à donner du sens à votre quotidien.
          </p>
          image.
        </v-col>
        <v-col cols="8" class="d-flex justify-center">
          <img src="/phone-1.png" style="margin-top: 250px" />
        </v-col>
      </v-row>
    </section>
    <section
      id="Positivez"
      style="
        padding: 100px;
        padding-right: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(203, 243, 240, 0.2);
      "
    >
      <v-row>
        <v-col cols="8" class="d-flex justify-center">
          <img src="/phone-2.png" style="margin-top: 250px" />
        </v-col>
        <v-col
          cols="4"
          style="display: flex; flex-direction: column; justify-content: center"
        >
          <h2
            style="
              color: #2ec4b6;
              font-size: 48px;
              margin-bottom: 20px;
              display: flex;
              justify-content: flex-end;
            "
          >
            Positivez
          </h2>
          <p>
            Chaque jour commence avec votre réflexe positivité. <br /><br />
            Vibin aère votre esprit grâce à des objectifs personnalisés, des
            actions bienveillantes qui vous ressemblent et un flux d’actus
            positives qui donnent le sourire.
          </p>
        </v-col>
      </v-row>
    </section>
    <section
      id="Vibrez"
      style="
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px;
        padding-left: 250px;
        padding-right: 0px;
      "
    >
      <v-row>
        <v-col
          cols="4"
          style="display: flex; flex-direction: column; justify-content: center"
        >
          <h2 style="color: #ff9f1c; font-size: 48px; margin-bottom: 20px">
            Vibrez
          </h2>
          <p>
            Insufflez un vent de positivité dans votre journée en créant un
            profil qui vous ressemble. <br /><br />
            Concevez l’application à votre image et faites-en une safe place :
            Vibin vous aide à donner du sens à votre quotidien.
          </p>
          image.
        </v-col>
        <v-col cols="8" class="d-flex justify-end">
          <img
            src="/phone-3.png"
            style="width: 776; height: 1068; margin-top: 300px"
          />
        </v-col>
      </v-row>
    </section>
    <section class="" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
      <h2 style="font-size: 48px; text-align: center; margin-bottom: 30px;">
        Vibrez au rythme de la positivité, <br />créez votre safe place.
      </h2>
      <div><img src="/apple.png" /><img src="/google.png" /></div>
    </section>
  </v-container>
</template>

<script setup>
document.title = "Vibin";

const parallaxHeight = window.innerHeight;
</script>
<style>
html {
  scroll-behavior: smooth;
}
.inNav:hover {
  color: #2ec4b6 !important;
}
</style>
