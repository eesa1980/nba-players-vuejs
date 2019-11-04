import { endpoints } from '../constants/endpoint';

export const formatData = json => {
  let data = [];

  for (const rowSet of json.resultSets[0].rowSet) {
    const player = {};
    let y = 0;

    for (const header of json.resultSets[0].headers) {
      player[header] = rowSet[y];
      y++;
    }
    data.push(player);
  }

  return data;
};

export const getPlayerHeadshotUrl = ({ teamId, playerId }) => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${endpoints.HEADSHOTS}${teamId}/${
    month >= 10 ? year : year - 1
  }/260x190/${playerId}.png`;
};
