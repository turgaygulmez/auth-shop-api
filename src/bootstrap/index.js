import mysql from "mysql2"
import dbConfig from '../config'
import DB from "../models";

export const initDB = () => {
  var connection = mysql.createConnection({
    host     :  dbConfig.HOST,
    user     :  dbConfig.USER,
    password :  dbConfig.PASSWORD
  });

  connection.query(
    `SHOW DATABASES LIKE '${dbConfig.DB}';`,
    function(err, results, fields) {
      if (!results.length) {
        connection.query(
          `CREATE DATABASE IF NOT EXISTS ${dbConfig.DB};`,
          function(err, results, fields) {
            console.log('db created');
      
            // sync models with db
            DB.sequelize.sync().then(() => {
              
              DB.productTypes.bulkCreate([
                {
                  name: 'books'
                },
                {
                  name: 'music'
                },
                {
                  name: 'games'
                }
              ]);

              DB.products.bulkCreate([
                {
                  name: 'Halo 2',
                  ProductTypeId: 3,
                  description: 'The Covenant alien race threatens to destroy all humankind, and the only thing standing in its way is Master Chief, a genetically enhanced supersoldier. Master Chief returns in Halo 2, which features new vehicles, weapons, environments, and more.'
                },
                {
                  name: 'Crime and Punishment',
                  ProductTypeId: 1,
                  description: 'It is a murder story, told from a murder;s point of view, that implicates even the most innocent reader in its enormities. It is a cat-and-mouse game between a tormented young killer and a cheerful'
                },
                {
                  name: 'Animal Farm',
                  ProductTypeId: 1,
                  description: 'A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned'
                },
                {
                  name: 'The Eagles Hotel California',
                  ProductTypeId: 2,
                  description: '"Hotel California" was rumored to be about heroin addiction or Satan worship, but Henley had more prosaic things on his mind: "We were all middle-class kids from the Midwest," he said'
                },
                {
                  name: 'Elvis Presley, Heartbreak Hotel',
                  ProductTypeId: 2,
                  description: 'When RCA Records signed "hillbilly cat" Presley, they expected more songs like his rockabilly hits from Sun Records. Instead, for his first RCA single, Presley recorded this gloomy'
                },
                {
                  name: 'Marvin Gaye, Whats Going On',
                  ProductTypeId: 2,
                  description: 'Whats Going On is an exquisite plea for peace on Earth, sung by a man at the height of crisis. In 1970, Marvin Gaye was Motowns top male vocal star, yet he was frustrated by the assembly-line role he played on his own hits.'
                },
                {
                  name: 'Don Quixote',
                  ProductTypeId: 1,
                  description: 'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes'
                },
                {
                  name: 'Grand Theft Auto IV',
                  ProductTypeId: 3,
                  description: 'Also known as "GTA IV What does the American Dream mean today? For Niko Belic, fresh off the boat from Europe. Its the hope he can escape his past. For his cousin, Roman, it is the vision that together'
                },
                {
                  name: 'Half-Life 2',
                  ProductTypeId: 3,
                  description: 'By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the players presence affects everything around him'
                },
                {
                  name: 'Diablo',
                  ProductTypeId: 3,
                  description: 'The kingdom of Khandaras has fallen into chaos. An unknown force of evil has swept across the land. Plunging it nto civil war and terrorizing the populace. A mad king, his missing son, and a mysterious archbishop are'
                },
                {
                  name: 'Hamlet',
                  ProductTypeId: 1,
                  description: 'The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark'
                },
                {
                  name: 'The Beatles, A Day in the Life',
                  ProductTypeId: 2,
                  description: 'A Day in the Life" was one of the last true Lennon-McCartney collaborations: Lennon wrote the opening and closing sections, and McCartney contributed the "Woke up/Fell out of bed" middle. For the climax, they hired 40 musicians'
                }
              ]);

              DB.users.bulkCreate([
                {
                  userName: 'turgaygulmez',
                  password: 'abcd1234'
                },
                {
                  userName: 'billgates',
                  password: 'dcba1234'
                }
              ]);

              console.log('inital sync done! mocks are inserted')
            }).catch(ex => console.log('couldnt re-sync db', ex))
          }
        );
      } else {
        // sync models with db
        DB.sequelize.sync().then(() => {
          console.log('db synced')
        }).catch(ex => console.log('couldnt re-sync db', ex))
      }
    }
  );
}