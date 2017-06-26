/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  firebase: {
    adapter: 'sails-firebase',

    credential: {
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "project_id": "marvelousvoandroid",
      "private_key_id": "51e4e50769f810a14524b3557376aa3825bb7ed3",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCeI3tq33rKjpkY\n3lodV0w70VlUN6DZfShjhX0BxdyOZBRstubdLE6yuBG4906chb9c+i4bFqK5IQqY\nXtvS+BM1shAud/NzGcFja9Ym/xVUevc/Z/nJjyGO7v61D7/SmKKwPnOLj2FFDObs\nAtcc4zK/3w4d2OkXdVw2f5PgAMupZHLYPsvNq7amh5acH1uWWFT1KgY9lNtg7NDr\ntt4lsX5k1imfwz7FQZQkg648mU69RxOXxfm3yUI4RdV4vcqLs776rkipSjyySLE0\nBfEom1tc7wbdMJik6licx2n/PVTwJchWrrkfZibzsoE7xKfEGfPFwxkw+kKo9tRa\n8sxi0vBDAgMBAAECggEAPzziLD09DcZTa7HzKFuSFTOk/LwYGxDlN1MYx743ckuM\nLWNA0/5VZDuefrCK46XKfiRfjp6RKOYRJhh84JMqn2Ta+rImDQemIZtscoC8J2Hb\nAKSUK2mM2msxOPeY1l8KY989dng6RhIgQA3sttUWJMtOiloE8EgSvYpr+H5o8w4i\nXhUjC9bfzefK4J3qZLkovFavtB7SBXmyuXCAwQYeY6d61Q1r1G5MLqmt2rIdbLTA\nI4HWFq52fIZv/UJk3XJ+nO5K8Lo7PC+rIPUQvIyIUiZxNQl0yeERaFaXYKe1yTuN\n4TOEZ+IJY0lGyxIc3/mkkz0Zo32TPl2XrjENGEVJRQKBgQDXoiYK4u0ZtBEZ1S2I\n1+sCxVu1bZaEovy/YWgRB/LmgZi1DJe1tS6Pkoim+w60x5SuGtlDwbCr2HotVSC0\nzda7IHB8QD28A3CsqKk2k1r8M7d8XaVKvpORRLsINZzreVnkfEe7bmAxaWsXN0wP\nMU5/yEsOQ0wQIutw/sp1cJu8tQKBgQC7vf8mXqPfCTeHU+HWZBNZ+hYkC/XR0D3A\nxoWKUi0xzq3lr3YO4PYGVXLLyJjHXTQu3xmjf868+m1EPiPqBBBYqSR5xq4h6uoO\nePeBBxZep/nss/atkjJ3riowAaf33skL4XX5bvxnOCG3x1e2PlL3fuBTAw+agHLr\nuKK9+lqMFwKBgQDJmOAGN4hCCpYeV66djHg7+/W0lkMtuA+igVfA7HSMSsdRJPfF\nOyHPusiljHyASUNYzuMnNLOOxfHb5gWQ5AyIoFhp4cmVuIWj9n9U9ckPlu5JiGeb\njLb8DozprO4LPEXtlr+dnSCzsYIcj2c9oPRqBQEe0Y4QXAVQe/UefOwtLQKBgAhQ\nM3opeqwnplPRvRBXQhwb3NsfxHTT+cgNgmBLn0CzXDPtfxbNk1dYdUrcyRca43Kn\n4mTBBhCMLkZ1UfXM1ER4yOqzh4Zs9oxJgvwtqinq2kBG/8dTz/RIvAmAKUXqkZB7\nHVQ8O+T+MVAH/bROMjJPZfOHESvQQEZ72Ij9CwFlAoGAHovrDonM2CuEYLTneVCU\nrl+2UCK4+zxZwK4XR9voyseB6ViipueTu04vgzPhYCsSeQDu3b35SGTeOIKHRN40\nseI4kRsof3YxLMeMgofI8WHtBCbaPzIKsbe5gyVuQPTLhCjCVk7WVU3keETINksx\nv/BSOZ7KfidK8XVV7oX7GJc=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-pl0ll@marvelousvoandroid.iam.gserviceaccount.com",
      "client_id": "114063161785726303638",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pl0ll%40marvelousvoandroid.iam.gserviceaccount.com",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "type": "service_account",
    },

    databaseURL: "https://marvelousvoandroid.firebaseio.com",
  },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  // someMysqlServer: {
  //   adapter: 'sails-mysql',
  //   host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_MYSQL_USER', //optional
  //   password: 'YOUR_MYSQL_PASSWORD', //optional
  //   database: 'YOUR_MYSQL_DB' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  // someMongodbServer: {
  //   adapter: 'sails-mongo',
  //   host: 'localhost',
  //   port: 27017,
  //   user: 'username', //optional
  //   password: 'password', //optional
  //   database: 'your_mongo_db_name_here' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  // somePostgresqlServer: {
  //   adapter: 'sails-postgresql',
  //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_POSTGRES_USER', // optional
  //   password: 'YOUR_POSTGRES_PASSWORD', // optional
  //   database: 'YOUR_POSTGRES_DB' //optional
  // }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
