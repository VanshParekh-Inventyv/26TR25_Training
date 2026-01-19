// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const uniqueList = new Set(playlist);
  const newPlaylist = Array.from(uniqueList);
  return newPlaylist;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const uniqueList = new Set(playlist);
  return uniqueList.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const uniqueList = new Set(playlist);
  uniqueList.add(track);
  const newPlaylist = Array.from(uniqueList);
  return newPlaylist;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const uniqueList = new Set(playlist);
  uniqueList.delete(track);
  const newPlaylist = Array.from(uniqueList);
  return newPlaylist;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const uniqueList = new Set();
  for (let list of playlist) {
    let songArtist = list.split(' - ');
    uniqueList.add(songArtist[1].trim());
  }
  const newPlaylist = Array.from(uniqueList);
  return newPlaylist;
}
