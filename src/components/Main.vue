
 
<template>
  <div>
    <Spinner v-if="isLoading" />
    <button v-if="selectedTeam" @click="setSelectedTeam(null)" class="back">Back</button>
    <Teams v-if="!selectedTeam" :teams="teams" :onClick="setSelectedTeam" />
    <Players
      v-if="selectedTeam"
      :players="players"
      :onClick="setSelectedPlayer"
      :abbrev="selectedTeam.Abbrev"
    />
  </div>
</template>

<script>
import Vue from "vue";
import Teams from "./Teams";
import Players from "./Players";
import Spinner from "./Spinner";
import { getPlayersBioStats } from "./../helper/api-calls";
import { getPlayerHeadshotUrl } from "./../helper/api-helper";
import teams from "./../data/teams.js";

const Main = Vue.extend({
  data() {
    return {
      teams,
      players: [],
      logo: null,
      selectedTeam: null,
      selectedPlayer: null,
      isLoading: false
    };
  },
  computed: {
    computedTeam() {
      return this.selectedTeam && JSON.parse(this.selectedTeam);
    }
  },
  methods: {
    async setSelectedTeam(selectedTeam) {
      this.isLoading = true;
      this.selectedTeam = selectedTeam || null;
      if (this.selectedTeam) {
        let players = await getPlayersBioStats(this.selectedTeam.TeamID);

        const filterTeam = player =>
          player.TEAM_ABBREVIATION === this.selectedTeam.Abbrev;

        players = players.filter(filterTeam).map(player => {
          player.HEAD_SHOT = getPlayerHeadshotUrl({
            playerId: player.PLAYER_ID,
            teamId: player.TEAM_ID
          });

          return player;
        });
        this.players = players;

        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        return;
      }

      this.isLoading = false;
    },
    setSelectedPlayer(player) {
      this.selectedPlayer = player;
    },
    onImageError(e) {
      e.target.src = require("./../assets/303792.svg");
    }
  },
  components: {
    Teams,
    Players,
    Spinner
  }
});

export default Main;
</script>

<style scoped lang="scss">
.back {
  background: #022f4f;
  position: fixed;
  top: 0;
  left: 0;
  border: 0;
  font-size: 1em;
  text-transform: uppercase;
  padding: 10px 30px;
  font-weight: 700;
  color: #fff;
  z-index: 9;
  cursor: pointer;
}
</style>
