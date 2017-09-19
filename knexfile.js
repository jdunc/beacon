module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/beacondev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}
