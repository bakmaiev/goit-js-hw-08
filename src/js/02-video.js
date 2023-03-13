import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const KEY_LOCAL_STORAGE = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

setCurrentTimePlayer();

const handleCurrentTime = e => {
  localStorage.setItem(KEY_LOCAL_STORAGE, e.seconds);   
}
player.on('timeupdate', throttle(handleCurrentTime, 1000));

function setCurrentTimePlayer() {
  if (localStorage.getItem(KEY_LOCAL_STORAGE)) {
    player.setCurrentTime(localStorage.getItem(KEY_LOCAL_STORAGE));
}
}