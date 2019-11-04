import { endpoints } from '../constants/endpoint';
import { formatData } from './api-helper';
import jsonp from 'jsonp';

const getData = url => {
  return new Promise((resolve, reject) => {
    jsonp(url, null, (err, data) => {
      if (!err) {
        resolve(formatData(data));
      } else reject(err);
    });
  });
};

export const getPlayersBioStats = teamID => {
  return getData(
    `${endpoints.PLAYERS}?teamID=${teamID}&Season=2019-20&SeasonType=Regular%20Season&LeagueID=00&PerMode=PerGame`
  )
    .then(response => {
      return response;
    })
    .catch(function() {
      return [];
    });
};
