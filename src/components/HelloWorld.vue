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
    <section
      id="top"
      style="
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <Vue3Lottie
        animationLink="https://assets7.lottiefiles.com/packages/lf20_N09fp5kZVe.json"
        style="position: absolute; left: -1200px; opacity: 0.5"
        renderer="canvas"
      />
      <Vue3Lottie
        animationLink="https://assets6.lottiefiles.com/packages/lf20_S6LvWZvFl5.json"
        style="position: absolute; right: -1200px; opacity: 0.5"
        renderer="canvas"
      />
      <div style="margin-right: 500px">
        <img src="/vibin.png" alt="logo" style="margin: 10px" />
        <h1 style="margin: 10px; font-size: 36">
          L'application 100% good vibes
        </h1>
        <p style="margin: 10px; font-size: 20">
          Vibrez au rythme des ondes positives. Créez votre safe place.
        </p>
        <v-btn
          class="text-white"
          rounded="pill"
          variant="elevated"
          color="#2ec4b6"
          style="margin: 10px"
          href="#Personnalisé"
          >Je décrouvre</v-btn
        >
      </div>
      <img
        src="/phone-0.png"
        style="position: absolute; right: 0; width: 550px;"
      />
    </section>
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
            Diffusez des <b>ondes positives</b> dans votre journée en créant un
            profil qui vous ressemble. <br /><br />
            Concevez l’application à votre image et faites-en
            <b>une safe place</b>. <br />
            Vibin vous aide à isuffler un vent de positivité dans votre
            quotidien. Choisissez ce qui vous motive et
            <b>lancez-vous</b> !
          </p>
        </v-col>
        <v-col cols="8" class="d-flex justify-center">
          <video height="634" width="293" style="margin-top: 50px; border-radius: 40px; border: 5px solid #CBF3F0;" autoplay muted loop>
            <source src="/phone-1.mp4" type="video/mp4">
          </video>
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
          <video height="634" width="293" style="margin-top: 50px; border-radius: 40px; border: 5px solid #CBF3F0;" autoplay muted loop>
            <source src="/phone-2.mp4" type="video/mp4">
          </video>
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
            "
          >
            Positivez
          </h2>
          <p>
            Chaque jour commence avec votre réflexe positivité. <br /><br />
            Vibin aère votre esprit grâce à des <b>objectifs personnalisés</b>,
            des actions bienveillantes qui vous ressemblent et
            <b>un flux d’actus positives</b> qui donnent le sourire.
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
            Pas de stress, pas de compétition : que des <b>good vibes</b> !
            <br /><br />
            Vibrez au rythme des ondes positives que vous avez initiées. Avancer
            ce n’est pas toujours aller vite, c’est surtout <b>aller bien</b>.
          </p>
        </v-col>
        <v-col cols="8" class="d-flex justify-center">
          <video height="634" width="293" style="margin-top: 50px; border-radius: 40px; border: 5px solid #CBF3F0;" autoplay muted loop>
            <source src="/phone-3.mp4" type="video/mp4">
          </video>
        </v-col>
      </v-row>
    </section>
    <section
      class=""
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      "
    >
      <h2 style="font-size: 48px; text-align: center; margin-bottom: 30px">
        Diffusez vos ondes positives. <br /> Créez votre safe place.
      </h2>
      <div><img src="/apple.png" /><img src="/google.png" /></div>
    </section>
    <v-footer >
      <img src="/logo-footer.png">
    </v-footer>
    <v-btn href="#top" ></v-btn>
  </v-container>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
export default {
  data: () => ({
    animHeight: window.innerHeight,
    animWidth: window.innerWidth,
  }),
  components: {
    Vue3Lottie,
  },
};
</script> 
<style>
html {
  scroll-behavior: smooth;
}
.inNav:hover {
  color: #2ec4b6 !important;
}
</style>
