$.ajax({
  url: 'https://api.twitter.com/1.1/users/show.json',
  type: 'GET',
  dataType: 'JSON',
  data: {
    screen_name: 'therealjoahg',
    oauth_consumer_key: 'mOVf8dSwih6Mz0ZojNK34Q',
    oauth_nonce: '6c47f47b7f25f5ce9859548619533ce9',
    oauth_signature: 'pFKMhbyZtOJlNFSc2Sg3sd7UsmA%3D',
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: '1417399131',
    oauth_token: '2309118324-fRmtPzndj7sYaC3chvKnLNwUUopQGHFPHCHTCOu',
    oauth_version: '1.0'
  },
  success: function(d) {
    console.log(d)
  }
})