/* 41.	Magicians: Make a array of magician’s names. Pass the array
 to a function called show_magicians(), which prints the name of each
  magician in the array.*/

  const magicianNames: string[] = ['Irfan','mansoor','rizwan','kamran','aslam'];

  function  show_magicians( magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
  } function make_great( magicians: string[]): string[] {
    const greatMgicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMgicians;
  }
  // modify the array to add "the great" to each magician's name

  const greatMagiciansNames: string[] = make_great(magicianNames);

 // call the function to show origional magician's names
 show_magicians(magicianNames);
 show_magicians(greatMagiciansNames);