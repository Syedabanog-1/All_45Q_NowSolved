/* 40.	Album: Write a function called make_album() that builds a
Object describing a music album. The function should take in an artist
name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three
dictionaries representing different albums. Print each return value to
 show that Objects are storing the album information correctly. Add
 an optional parameter to make_album() that allows you to store the
  number of tracks on an album. If the calling line includes a value
   for the number of tracks, add that value to the album’s Object.
   Make at least one new function call that includes the number of
   tracks on an album.*/
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var albums = [
    make_album('Shehzad Roy', 'Roshni'),
    make_album('Mir Hassan', 'Muntazir Mehdi', 12),
    make_album('Ali Waris', 'Hum Panjatani', 5)
].map(function (album) { return "artist: ".concat(album.artist, "\ntitle: ").concat(album.title).concat(album.tracks ? "\ntracks: ".concat(album.tracks) : ''); }).join('\n\n');
console.log(albums);
